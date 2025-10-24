const { eventSchema } = require("../middlewares/validator")
const Event = require("../models/event.model")

//update to add image or banner when creating event 
exports.addEvent = async (req, res) => {
    const { title, location, capacity, price } = req.body

    try {
        if (!title || !location || !capacity || !price) {
            res.status(400).json({ success: false, message: "All fields are required" })
        }

        const { error, value } = eventSchema.validate({ title, location, capacity, price })
        if (error) {
            return res.status(400).json({ success: true, message: error.details[0] })
        }

        const newEvent = new Event({
            title,
            location,
            capacity,
            ticketPrice: price
        })
        await newEvent.save()

        res.status(200).json({ success: true, msg: "Event is created successfully!!", newEvent })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in add event route", error);
    }
}


exports.updateStatus = async (req, res) => {
    const { id } = req.params
    const { isApproved } = req.body

    try {
        const existingEvent = await Event.findById(id)
        if (!existingEvent) {
            res.status(400).json({ success: false, message: "Event does not exist" })
        }

        const updatedEvent = await Event.findByIdAndUpdate(
            id, { isApproved }, { new: true, runValidators: true }
        )
        res.status(200).json({ success: true, message: "Event is updated successfully!!", updatedEvent })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in update event status route", error);
    }
}

exports.deleteEvent = async (req, res) => {
    const { id } = req.params
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            id, { deleted: true }, { new: true, runValidators: true }
        )
        res.status(200).json({ success: true, message: "Event is deleted successfully!!!", updatedEvent })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in delete event route", error);
    }
}

exports.allEvents = async (req, res) => {
    try {
        const events = await Event.find({})
        res.status(200).json({ success: true, events })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in add event route", error);
    }
}


exports.allApprovedEvents = async (req, res) => {
    try {
        const events = await Event.find({isApproved: true})
        res.status(200).json({ success: true,numEvents: events.length,  events })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in add event route", error);
    }
}

//add edit event to add banner or images 
exports.updateEvent = async (req, res) => {
    const { id } = req.params
    const { title, location, capacity, price } = req.body

    try {
        if (!title || !location || !capacity || !price) {
            res.status(400).json({ success: false, message: "All fields are required" })
        }

        const event = await Event.findByIdAndUpdate(
            id, {
                title, 
                location, 
                capacity, 
                ticketPrice: price
            }, { new: true, runValidators: true }
        )
        res.status(200).json({ success: true, event })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in add event route", error);
    }
}
