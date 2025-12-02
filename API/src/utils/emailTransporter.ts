import nodemailer from "nodemailer"


export const emailTransporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
        user: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS, 
        pass: process.env.NODE_CORE_SENDING_EMAIL_PASSWORD
    }
})



