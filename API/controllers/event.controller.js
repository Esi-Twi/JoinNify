const { eventSchema } = require("../middlewares/validator")
const Event = require("../models/event.model")
const User = require('../models/user.model')
const { cloudinary } = require('../lib/cloudinary')


exports.addEvent = async (req, res) => {
    const { title, location, capacity, price, date, images } = req.body
    const id = req.user.userId

    try {
        //check if input is given
        if (!title || !location || !capacity || price < 0 || !date) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }

        const existingUser = await User.findById(id)
        if (!existingUser) {
            return res.status(400).json({ success: false, message: 'User does not exist.' })
        }

        //validate inputs
        const { error, value } = eventSchema.validate({ title, location, capacity, price, date })
        if (error) {
            return res.status(400).json({ success: true, message: error.details[0] })
        }

        //check if date is greater than today
        if (new Date(date) < Date.now()) {
            return res.status(400).json({ success: false, message: "Date must be older than today!" })
        }

        //check if image is added
        if (!images) {
            return res.status(400).json({ success: false, message: "At leat one image or banner is requried!" })
        }

        //check images.length
        if (images.length > 9) {
            return res.status(400).json({ success: false, message: "You can upload a maximum of 9 images" })
        }

        // Upload each image to Cloudinary
        const uploadedImages = await Promise.all(images.map(async (img) => {
            const uploadRes = await cloudinary.uploader.upload(img, {
                folder: "events",
            })

            return uploadRes.secure_url;
        }))

        //create event
        const newEvent = new Event({
            creatorId: id,
            title,
            location,
            capacity,
            ticketPrice: price,
            date,
            images: uploadedImages
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
        console.log("error in all event route", error);
    }
}


exports.allApprovedEvents = async (req, res) => {
    try {
        const events = await Event.find({ isApproved: true })
        res.status(200).json({ success: true, numEvents: events.length, events })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in all approved event route", error);
    }
}

exports.updateEvent = async (req, res) => {
    const { id } = req.params
    const { title, location, capacity, price, images } = req.body

    try {
        if (!title || !location || !capacity || !price) {
            res.status(400).json({ success: false, message: "All fields are required" })
        }

        const event = await Event.findByIdAndUpdate(
            id, {
            title,
            location,
            capacity,
            ticketPrice: price,
            images
        }, { new: true, runValidators: true }
        )
        res.status(200).json({ success: true, event })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in update event route", error);
    }
}

exports.featureEvent = async (req, res) => {
    const { id } = req.params
    const { feature } = req.body

    try {
        const existingEvent = await Event.findById(id)
        if (!existingEvent) {
            res.status(400).json({ success: false, message: "Event does not exist" })
        }

        const updatedEvent = await Event.findByIdAndUpdate(
            id, { feature }, { new: true, runValidators: true }
        )
        res.status(200).json({ success: true, message: "Event is featured successfully!!", updatedEvent })

    } catch {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in feature event route", error);
    }
}

exports.organizerEventDetails = async (req, res) => {
    const { id } = req.params;

    try {
        const existingEvent = await Event.findById(id)
        if (!existingEvent) {
            res.status(400).json({ success: false, message: "Event does not exist" })
        }

        res.status(200).json({ success: true, event: {
            ...existingEvent._doc, 
            isApproved: undefined, 
            deleted: undefined, 
            feature: undefined, 
        }})

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in all organizer event details route", error);
    }
}