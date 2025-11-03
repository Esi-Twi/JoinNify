const Event = require("../models/event.model")
const Notification = require("../models/notification.model")
const Ticket = require("../models/ticket.model")
const User = require('../models/user.model')
const QRCode = require('qrcode')
const { sendTicketEmail } = require("../utils/sendEmail")
const cloudinary  = require('../lib/cloudinary')


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
        //generate qr code 
        const qrCodeData = await QRCode.toDataURL(JSON.stringify({ eventId, userId }))
        const uploaded = await cloudinary.uploader.upload(qrCodeData, {
            folder: 'tickets',
            public_id: `ticket-${eventId}-${userId}`,
        });
        const ticketImageUrl = uploaded.secure_url;

        //updating events
        existingEvent.ticketsSold += numTickets;
        existingEvent.totalRevenue += totalPrice;
        if (!existingEvent.attendees.includes(userId)) {
            existingEvent.attendees.push(userId)
        }
        await existingEvent.save()

        //creating ticket
        const newTicket = new Ticket({
            eventId,
            userId,
            expiry: new Date(new Date(existingEvent.date).getTime() + 24 * 60 * 60 * 1000),
            qr_code: ticketImageUrl
        })
        await newTicket.save()

        //send notification to organizer of event
        await Notification.create({
            receiverId: existingEvent.creatorId,
            type: "ticket_created",
            title: "Ticket sold: " + existingEvent.title,
            message: `A new ticket has been sold for your event ${existingEvent.title}.`,
            eventId,
        })

        //send attendee digital ticket with qrcode via email
        const info = await sendTicketEmail(existingUser.name, existingEvent, ticketImageUrl)

        res.status(201).json({ success: true, message: "Ticket bought successfully!", info, newTicket, existingEvent })
        // res.status(201).json(info)

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in book ticket route", error);
    }
}

exports.getBookingHistory = async (req, res) => {

    try {

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in get booking history route", error);
    }
}

exports.cancelTicket = async (req, res) => {

    try {

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in cancel ticket route", error);
    }
}

