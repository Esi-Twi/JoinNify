const nodeMailer = require("nodemailer")


const transport = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS,
        pass: process.env.NODE_CORE_SENDING_EMAIL_PASSWORD
    }
})


exports.sendSignUpEmail = async (username) => {
    try {
        let info = await transport.sendMail({
            from: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS,
            to: 'esitwitawiah@gmail.com',
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
        console.log("Error in send signup email route" + error);
    }
}

exports.sendVerificationEmail = async (token) => {
    try {
        let info = await transport.sendMail({
            from: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS,
            to: 'esitwitawiah@gmail.com',
            subject: "Password Reset Request",
            html: `<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
  <h2>Hi 'there',</h2>
  <p>Welcome to <strong>JoinNify</strong> — your all-in-one platform for discovering, managing, and booking amazing events! 🎟️</p>

  <p>To complete your registration, please verify your email address using the code below:</p>

  <div style="text-align: center; margin: 30px 0;">
    <div style="display: inline-block; background-color: #4F46E5; color: #fff; padding: 15px 30px; font-size: 24px; font-weight: bold; border-radius: 8px; letter-spacing: 4px;">
      ${token}
    </div>
  </div>

  <p>This code will expire in <strong>10 minutes</strong>. Please do not share it with anyone for security reasons.</p>

  <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

  <h3>Here’s what awaits you inside:</h3>
  <ul>
    <li>🔍 <strong>Explore events:</strong> Browse upcoming concerts, workshops, and conferences.</li>
    <li>🎫 <strong>Book tickets easily:</strong> Secure your spot in just a few clicks.</li>
    <li>📱 <strong>JoinNify QR Check-in:</strong> Quick entry at any event you attend.</li>
  </ul>

  <p>We’re thrilled to have you join the JoinNify community. Once verified, you’ll have full access to all features!</p>

  <p>If you didn’t sign up for JoinNify, please ignore this email.</p>

  <p>Need help? Contact our support team at 
    <a href="mailto:support@joinnify.com">support@joinnify.com</a>.
  </p>

  <p>Cheers,<br>
  The <strong>JoinNify</strong> Team<br>
  <em>Your Event. Your Way.</em></p>
</div>
`
        })

        return info;

    } catch (error) {
        console.log("Error in send password reset email route" + error);
    }
}

exports.sendResetPasswordEmail = async (resetLink) => {
    try {
        let info = await transport.sendMail({
            from: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS,
            to: 'esitwitawiah@gmail.com',
            subject: "Reset Password Link",
            html: `<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
  <h2>Hi there,</h2>
  <p>You recently requested to reset your password for your <strong>JoinNify</strong> account.</p>

  <p>Click the button below to reset your password:</p>

  <div style="text-align: center; margin: 30px 0;">
    <a href="${resetLink}" 
       style="display: inline-block; background-color: #4F46E5; color: #fff; padding: 12px 28px; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 8px;">
       🔒 Reset My Password
    </a>
  </div>

  <p>If the button above doesn’t work, copy and paste the link below into your browser:</p>
  <p style="word-break: break-all;">
    <a href="${resetLink}" style="color: #4F46E5;">${resetLink}</a>
  </p>

  <p>This link will expire in <strong>20 minutes</strong>. If you didn’t request a password reset, you can safely ignore this email — your password will remain unchanged.</p>

  <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

  <h3>Stay in control of your JoinNify account:</h3>
  <ul>
    <li>✅ <strong>Secure your events and data:</strong> Always keep your password private.</li>
    <li>🎫 <strong>Access your bookings:</strong> Manage your upcoming events anytime.</li>
    <li>📱 <strong>Instant access:</strong> Use QR check-in for smooth entry at your events.</li>
  </ul>

  <p>If you need help or didn’t make this request, please contact our support team immediately.</p>

  <p>Contact us: 
    <a href="mailto:support@joinnify.com">support@joinnify.com</a>
  </p>

  <p>Cheers,<br>
  The <strong>JoinNify</strong> Team<br>
  <em>Your Event. Your Way.</em></p>
</div>
`
        })

        return info;

    } catch (error) {
        console.log("Error in send reset password email route" + error);
    }
}

