const mongoose = require("mongoose")

const notificaitonSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
     type: {
      type: String,
      enum: [
        // "event_created",
        "ticket_created",
        // "ticket_scanned",
        // "payment_received",
        "general",
      ],
      default: "general",
    },
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Events",
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
    },
    readAT: { type: Date },
    deleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Notifications", notificaitonSchema)
