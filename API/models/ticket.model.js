const mongoose = require("mongoose")

const ticketSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Events", 
        required: true
    }, 
    price: {
        type: Number, 
        required: true, 
    }, 
    expiry: {
        type: Date, 
    }, 
    qr_code: {
        type: String, 
        required: true, 
    }
}, {
    timestamps: true
})
