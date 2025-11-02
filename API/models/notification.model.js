const mongoose = require("mongoose")

const notificaitonSchema = new mongoose.Schema({
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
    deleted: {
        type: Boolean, 
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Notifications", notificaitonSchema)
