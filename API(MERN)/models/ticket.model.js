const mongoose = require("mongoose")

const ticketSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Events", 
        required: true
    }, 
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Users", 
        required: true, 
    },
    uniqueNumber: {
        type: Number, 
        required: true, 
    },
    expiry: {
        type: Date, 
    }, 
    qr_code: {
        type: String, 
        required: true, 
    }, 
    checkedIn: {
        type: Boolean, 
        default: false, 
    },
    checkInTime: { type: Date },
    deleted: {
        type: Boolean, 
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Tickets", ticketSchema)
