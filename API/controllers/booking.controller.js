const Event = require("../models/event.model")
const Notification = require("../models/notification.model")
const Ticket = require("../models/ticket.model")
const User = require('../models/user.model')
const QRCode = require('qrcode')
const { sendTicketEmail, sendTicketCancellationEmail } = require("../utils/sendEmail")
const cloudinary = require('../lib/cloudinary')

exports.bookTicket = async (req, res) => {
    const userId = req.user.userId
    const { eventId, numTickets } = req.body

    try {
        const existingUser = await User.findById(userId)
        if (!existingUser) {
            return res.status(400).json({ success: false, message: 'User does not exist' })
        }

        const existingEvent = await Event.findOne({ _id: eventId, isApproved: true, deleted: false })
        if (!existingEvent) {
            return res.status(400).json({ success: false, message: "Event does not exist!!!" })
        }

        const totalPrice = existingEvent.ticketPrice * numTickets;

        //updating events
        existingEvent.ticketsSold += numTickets;
        existingEvent.totalRevenue += totalPrice;
        if (!existingEvent.attendees.includes(userId)) {
            existingEvent.attendees.push(userId)
        }
        await existingEvent.save()

        const tickets = []

        for (let i = 0; i < numTickets; i++) {
            //generate qr code 
            const qrCodeData = await QRCode.toDataURL(JSON.stringify({ eventId, userId }))
            const uploaded = await cloudinary.uploader.upload(qrCodeData, {
                folder: 'tickets',
                public_id: `ticket-${eventId}-${userId}`,
            });
            const ticketImageUrl = uploaded.secure_url;

            //creating ticket
            const newTicket = new Ticket({
                eventId,
                userId,
                expiry: existingEvent.endDate,
                qr_code: ticketImageUrl
            })
            await newTicket.save()
            tickets.push(newTicket)

            //send notification to organizer of event
            await Notification.create({
                receiverId: existingEvent.creatorId,
                type: "ticket_created",
                title: "Ticket sold: " + existingEvent.title,
                message: `A new ticket has been sold for your event ${existingEvent.title}.`,
                eventId,
            })

            //send attendee digital ticket with qrcode via email
            await sendTicketEmail(existingUser.name, existingEvent, ticketImageUrl)
        }

        res.status(201).json({ success: true, message: "Ticket(s) bought successfully!", tickets, existingEvent })

    } catch (error) {
        res.status(400).json({ success: false, error })
        console.log("error in book ticket route", error);
    }
}


exports.getBookingHistory = async (req, res) => {
    const userId = req.user.userId

    try {
        //get all my tickets
        const myTickets = await Ticket.find({ userId, deleted: false })

        //not expired
        const todayEvents = [];
        const upcomingEvents = [];
        const pastEvents = [];

        for (i = 0; i < myTickets.length; i++) {
            if (new Date(myTickets[i].expiry) == Date.now()) {
                todayEvents.push(myTickets[i])
            }
            else if (new Date(myTickets[i].expiry) < Date.now()) {
                pastEvents.push(myTickets[i])
            }
            else if (new Date(myTickets[i].expiry) > Date.now()) {
                upcomingEvents.push(myTickets[i])
            }
        }

        res.status(200).json({ success: true, numOfTickets: myTickets.length, todayEvents, upcomingEvents, pastEvents })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in get booking history route", error);
    }
}


exports.cancelTicket = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.userId

    try {
        const existingTicket = await Ticket.findById(id)

        const existingUser = await User.findById(userId)
        if (!existingUser) {
            return res.status(400).json({ success: false, message: 'User does not exist' })
        }

        const existingEvent = await Event.findOne({ _id: existingTicket.eventId, isApproved: true, deleted: false })
        if (!existingEvent) {
            return res.status(400).json({ success: false, message: "Event does not exist!!!" })
        }

        //check if it is left with 2 hours to event
        const time = (new Date(existingTicket.expiry) - new Date(Date.now())) / (1000 * 60 * 60);
        if (time <= 2) {
            return res.status(400).json({ success: false, msg: "You cannot cancel a ticket 2 hours to the event" })
        }

        //update existing event
        existingTicket.deleted = true;
        existingEvent.ticketsSold -= 1;
        await existingTicket.save()

        //check if the user bought only one ticket then update event attendee list 
        const userTickets = await Ticket.find({ userId, deleted: false })
        if (userTickets.length <= 1) {
            existingEvent.attendees = existingEvent.attendees.filter(
                attendeeId => attendeeId.toString() !== userId.toString()
            );
            await existingEvent.save();
        }

        //send cancellation email
        await sendTicketCancellationEmail(existingUser.name, existingEvent)
        res.status(200).json({ success: true, msg: "Ticket cancelled successfully!!", existingTicket })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in cancel ticket route", error);
    }
}

// number of tickets bought 
//list of users 
//total revenue 
//cancelled ticket number 


exports.getEventSpecificAnalytics = async (req, res) => {
    const { id } = req.params
    const userId = req.user.userId

    try {
        const existingEvent = await Event.findOne({ _id: id, creatorId: userId, isApproved: true, deleted: false, })
        if (!existingEvent) {
            return res.status(400).json({ success: false, message: 'Event does not exist' })
        }

        const cancelledTickets = await Ticket.find({ eventId: id, deleted: true })

        res.status(200).json({
            success: false,
            existingEvent,
            cancelledTickets
        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in cancel ticket route", error);
    }
}

exports.getAllEventAnalytics = async (req, res) => {
    const userId = req.user.userId


    /*
    * Total tickets sold (weekly + cumulative)
       * Top-performing events (by tickets or revenue)
       * Low-performing events (by tickets or revenue)
       * Average ticket price
       * New attendees vs returning attendees
       * Cancellations (count and %)
       * Payment breakdown (mobile money, card, cash)
       
    
     240 tickets sold
    - 💰 GHS 4,250 in total revenue
    - 🏆 Top Event: TechFest Accra 2025 (GHS 2,100)
    - ⚠️ 10 ticket cancellations
    */
    try {
        const existingEvents = await Event.find({ creatorId: userId, isApproved: true, deleted: false, })
        if (!existingEvents) {
            return res.status(400).json({ success: false, message: 'Event does not exist' })
        }

        let totalRevenue = 0;
        let topRevenuePerformingEvent = {
            title: "", revenue: 0
        }
        let topAttendancePerformingEvent = {
            title: "", attendees: 0
        }


        for (let item of existingEvents) {
            totalRevenue += item.totalRevenue
            console.log(item.ticketsSold > topAttendancePerformingEvent.attendees);
            

            //top revenue
            if(item.totalRevenue > topRevenuePerformingEvent.revenue) {
                topRevenuePerformingEvent.title = item.title
                topRevenuePerformingEvent.revenue = item.totalRevenue
            }

            //top attendees
            if(item.ticketsSold > topRevenuePerformingEvent.attendees) {
                topRevenuePerformingEvent.title = item.title
                topRevenuePerformingEvent.attendees = item.ticketsSold
            }




        }

        for (let i = 0; i < existingEvents.length; i++) {

        }


        // const myTickets = await Ticket.find({ userId, deleted: false })

        res.status(200).json({
            success: true,
            totalRevenue,
            topRevenuePerformingEvent,
            topAttendancePerformingEvent,
            existingEvents
        })


    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in cancel ticket route", error);
    }
}

