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
    }
}, {
    timestamps: true
})
