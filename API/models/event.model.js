const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    }, 
    title: {
        type: String,
        required: [true, "Event name is required"],
        trim: true,
    },
    location: {
        type: String,
        required: [true, "Event location is required"],
        trim: true,
    },
    capacity: {
        type: Number,
        required: [true, "Event capacity is required"],
    },
    ticketPrice: {
        type: Number,
        required: [true, "Event ticket price is required"]
    },
    date: {
        type: Date,
        required: [true, "Event date is required"],
    },
    endDate: {
        type: Date, 
        required: [true, "Event duration is required"]
    },
    images: [
        { 
            type: String 
        }
    ],
    ticketsSold: {
        type: Number,
        default: 0,
    },
    attendees: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    totalRevenue: {
        type: Number, 
        default: 0
    },
    isApproved: {
        type: Boolean,
        default: false,
    },
    feature: {
        type: Boolean, 
        defaut: false, 
    },
    deleted: {
        type: String,
        default: false,
    }

}, {
    timestamps: true
})

module.exports = mongoose.model("Events", eventSchema)