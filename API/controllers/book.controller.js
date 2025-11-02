const Event = require("../models/event.model")
const Ticket = require("../models/ticket.model")
const User = require('../models/user.model')


exports.bookTicket = async (req, res) => {
    const { id: userId } = req.params
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

        //updating events
        existingEvent.ticketsSold += numTickets;
        existingEvent.totalRevenue += totalPrice;
        if (!existingEvent.attendees.includes(userId)) {
            existingEvent.attendees.push(userId)
        }
        // await existingEvent.save()

        //creating ticket
        const newTicket = new Ticket({
            eventId,
            userId,
            expiry: existingEvent.date, // date + one
            qr_code: ""
        })
        // await newTicket.save()

        //send notification to organizer of event
        //send attendee digital ticket with qrcode via email

        res.status(200).json({ success: true, message: "Ticket bought successfully!", newTicket, existingEvent })

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

