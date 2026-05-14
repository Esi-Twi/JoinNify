import { AppError } from "@utils/app-errror";
import { emailTransporter } from "@utils/emailTransporter"
import { NextFunction } from "express"



export const AuthEmails = {
  async sendWelcomeEmail(email: string, username: string, verificationLink: string) {
    try {
      let info = await emailTransporter.sendMail({
        from: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS,
        to: email,
        subject: "🎉Welcome to JoinNify — Let’s Get You Started!",
        html: `
             <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                <h2>Hi ${username || 'there'},</h2>
                <p>Welcome to <strong>JoinNify</strong> — your all-in-one platform for discovering, managing, and booking amazing events! 🎟️</p>

                <p style="margin-top: 20px;">
                    Before you get started, please verify your email to secure your account and unlock all features.
                </p>

                <!-- VERIFY BUTTON -->
                <div style="text-align: center; margin: 25px 0;">
                    <a href="${verificationLink}"
                    style="display: inline-block; background-color: #4F46E5; color: #fff; padding: 12px 26px; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 8px;">
                        ✔️ Verify My Email
                    </a>
                </div>

                <!-- FALLBACK PLAIN LINK -->
                <p>If the button above doesn’t work, use this link:</p>
                <p style="word-break: break-all;">
                    <a href="${verificationLink}" style="color: #4F46E5;">Click Here</a>
                </p>

                <h3>Here’s what you can do right after verification:</h3>
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
            </div>   `
      })

      return info;

    } catch (error) {
      throw new AppError("Failed to send welcome email " + error, 401)
    }
  },

  async sendForgotPasswordEmail(email: string, username: string, resetLink: string) {
    try {
      let info = await emailTransporter.sendMail({
        from: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS,
        to: email,
        subject: "Fogot Password Email - JoinNify!",
        html: `
            <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
  <h2>🔒 Reset Your JoinNify Password</h2>

  <p>Hi ${username || 'there'},</p>

  <p>
    We received a request to reset the password for your 
    <strong>JoinNify</strong> account.
  </p>

  <p>
    Click the button below to securely reset your password:
  </p>

  <!-- RESET PASSWORD BUTTON -->
  <div style="text-align: center; margin: 30px 0;">
    <a href="${resetLink}"
       style="display: inline-block; background-color: #4F46E5; color: #ffffff;
              padding: 14px 30px; font-size: 16px; font-weight: bold;
              text-decoration: none; border-radius: 8px;">
      🔐 Reset My Password
    </a>
  </div>

  <!-- FALLBACK LINK -->
  <p>If the button above doesn’t work, copy and paste this link into your browser:</p>
  <p style="word-break: break-all;">
    <a href="${resetLink}" style="color: #4F46E5;">${resetLink}</a>
  </p>

  <p>
    This password reset link will expire in 
    <strong>20 minutes</strong> for security reasons.
  </p>

  <p>
    If you did not request a password reset, please ignore this email.
    Your password will remain unchanged.
  </p>

  <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

  <h3>Need help?</h3>
  <ul>
    <li>🎫 Access and manage your event bookings</li>
    <li>📱 Enjoy seamless QR check-ins</li>
    <li>🔐 Keep your account safe and secure</li>
  </ul>

  <p>
    If you’re having trouble, contact our support team at
    <a href="mailto:support@joinnify.com" style="color: #4F46E5;">
      support@joinnify.com
    </a>.
  </p>

  <p>
    Cheers,<br>
    The <strong>JoinNify</strong> Team<br>
    <em>Your Event. Your Way.</em>
  </p>
</div>
  `
      })

      return info;

    } catch (error) {
      throw new AppError("Failed to send welcome email " + error, 401)
    }
  },

  async sendResetPasswordEmail(email: string, username: string, resetLink: string) {
    try {
      let info = await emailTransporter.sendMail({
        from: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS,
        to: email,
        subject: "Reset Password Email - JoinNify!",
        html: `
            <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
  <h2>🔒 Reset Your JoinNify Password</h2>

  <p>Hi ${username || 'there'},</p>

  <p>
    We received a request to reset the password for your 
    <strong>JoinNify</strong> account.
  </p>

  <p>
    Click the button below to securely reset your password:
  </p>

  <!-- RESET PASSWORD BUTTON -->
  <div style="text-align: center; margin: 30px 0;">
    <a href="${resetLink}"
       style="display: inline-block; background-color: #4F46E5; color: #ffffff;
              padding: 14px 30px; font-size: 16px; font-weight: bold;
              text-decoration: none; border-radius: 8px;">
      🔐 Reset My Password
    </a>
  </div>

  <!-- FALLBACK LINK -->
  <p>If the button above doesn’t work, copy and paste this link into your browser:</p>
  <p style="word-break: break-all;">
    <a href="${resetLink}" style="color: #4F46E5;">${resetLink}</a>
  </p>

  <p>
    This password reset link will expire in 
    <strong>20 minutes</strong> for security reasons.
  </p>

  <p>
    If you did not request a password reset, please ignore this email.
    Your password will remain unchanged.
  </p>

  <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

  <h3>Need help?</h3>
  <ul>
    <li>🎫 Access and manage your event bookings</li>
    <li>📱 Enjoy seamless QR check-ins</li>
    <li>🔐 Keep your account safe and secure</li>
  </ul>

  <p>
    If you’re having trouble, contact our support team at
    <a href="mailto:support@joinnify.com" style="color: #4F46E5;">
      support@joinnify.com
    </a>.
  </p>

  <p>
    Cheers,<br>
    The <strong>JoinNify</strong> Team<br>
    <em>Your Event. Your Way.</em>
  </p>
</div>
  `
      })

      return info;

    } catch (error) {
      throw new AppError("Failed to send welcome email " + error, 401)
    }
  },

}