const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        trim: true,
        unique: [true, "email must be unique"],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "email is required"],
        trim: true,
        select: false,
    },
    role: {
        type: String,
        enum: {
            values: ["Admin", "Organizer", "Attendee"],
            message: "{VALUE} is not supported"
        },
        default: "Attendee"
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true
    },
    profilePic: {
        type: String,
        trim: true
    },
    deleted: {
        type: Boolean,
        default: false,
    },
    isBanned: {
        type: Boolean,
        default: false,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationToken: String,
    verificationTokenExpiry: Date,
    resetPasswordToken: String,
    resetPasswordTokenExpiry: Date,
}, {
    timestamps: true
})

module.exports = mongoose.model('Users', UserSchema)
