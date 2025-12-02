import { AppError } from "@utils/app-errror";
import { emailTransporter } from "@utils/emailTransporter"
import { NextFunction } from "express"



export const AuthEmails = {
    async sendWelcomeEmail(email: string, username: string) {
        try {
            let info = await emailTransporter.sendMail({
                from: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS,
                to: email,
                subject: "🎉Welcome to JoinNify — Let’s Get You Started!",
                html: `
             <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                <h2>Hi ${username || 'there'},</h2>
                <p>Welcome to <strong>JoinNify</strong> — your all-in-one platform for discovering, managing, and booking amazing events! 🎟️</p>

                <h3>Here’s what you can do right away:</h3>
                <ul>
                    <li>🔍 <strong>Explore events:</strong> Browse upcoming concerts, workshops, and conferences.</li>
                    <li>🎫 <strong>Book tickets easily:</strong> Secure your spot in just a few clicks.</li>
                    <li>📩 <strong>Stay updated:</strong> Get instant email confirmations and reminders.</li>
                </ul>

                <h3>If you’re an event organizer, you can:</h3>
                <ul>
                    <li>🏗️ <strong>Create and manage events</strong> effortlessly.</li>
                    <li>💰 <strong>Track ticket sales and attendees</strong>.</li>
                    <li>📱 <strong>Check in guests with QR codes</strong>.</li>
                </ul>

                <p>We’re excited to have you join our growing community of event lovers and creators!</p>
                <p>If you need help, our support team is always here: 
                    <a href="mailto:support@joinnify.com">support@joinnify.com</a>
                </p>

                <p>Cheers,<br>
                The <strong>JoinNify</strong> Team<br>
                <em>Your Event. Your Way.</em></p>
            </div>`
            })

            return info; 

        } catch (error) {
            throw new AppError("Failed to send welcome email " + error, 401)
        }
    },

}