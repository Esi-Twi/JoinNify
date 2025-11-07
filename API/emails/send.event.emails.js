const nodeMailer = require("nodemailer");
const { formatDate, formatTime } = require("../utils/formatTime");


const transport = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS,
    pass: process.env.NODE_CORE_SENDING_EMAIL_PASSWORD
  }
})


exports.sendTicketEmail = async (attendeeName, event, ticketImageUrl) => {
  try {
    let info = await transport.sendMail({
      from: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS,
      to: 'esitwitawiah@gmail.com',
      subject: "Your JoinNify Ticket is Here",
      html: `
 <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
  <h2>🎉 Congratulations!</h2>
  <p>Hi <strong>${attendeeName || 'there'}</strong>,</p>

  <p>You’ve successfully purchased your ticket for <strong>${event.title}</strong>! We’re excited to have you join us.</p>

  <div style="margin: 25px 0; text-align: center;">
    <img src="${ticketImageUrl}" alt="Your Ticket" 
         style="max-width: 100%; border-radius: 10px; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
  </div>

  <h3>📅 Event Details</h3>
  <ul style="list-style: none; padding-left: 0;">
    <li><strong>Event:</strong> ${event.title}</li>
    <li><strong>Date:</strong> ${formatDate(event.date)}</li>
    <li><strong>Time:</strong> ${formatTime(event.date)}</li>
    <li><strong>Venue:</strong> ${event.location}</li>
  </ul>

  

  <p>Make sure to bring your ticket or show the QR code at the entrance for check-in.</p>
  <p>Note you cannot cancel your ticket 2 hours to the event</p>

  <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

  <h3>💡 Tips for a Smooth Experience</h3>
  <ul>
    <li>📱 <strong>Keep it handy:</strong> Save your ticket image on your phone for quick check-in.</li>
    <li>🕐 <strong>Arrive early:</strong> Check-in starts 30 minutes before the event.</li>
    <li>❓ <strong>Need help?</strong> Reach out to us anytime if you face issues with your ticket.</li>
  </ul>

  <p>If you didn’t make this purchase or think something’s wrong, please contact our support team immediately.</p>

  <p>Contact us: 
    <a href="mailto:support@joinnify.com" style="color: #4F46E5;">support@joinnify.com</a>
  </p>

  <p>Thank you for choosing <strong>JoinNify</strong>! We can’t wait to see you at the event.</p>

  <p>Best regards,<br>
  The <strong>JoinNify</strong> Team<br>
  <em>Your Event. Your Way.</em></p>
</div>

`
    })

    return info;

  } catch (error) {
    console.log("Error in send ticket email route" + error);
  }
}

exports.sendTicketCancellationEmail = async (attendeeName, event) => {
  try {
    let info = await transport.sendMail({
      from: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS,
      to: 'esitwitawiah@gmail.com',
      subject: "Your JoinNify Ticket Has been cancelled",
      html: `
<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
  <h2>❌ Event Cancellation Confirmed</h2>
  <p>Hi <strong>${attendeeName || 'there'}</strong>,</p>

  <p>We’re sorry to hear that you won’t be joining us for <strong>${event.title}</strong>. Your ticket has been successfully <strong>canceled</strong>, and we’ve released your spot.</p>

  <h3>📅 Event Details</h3>
  <ul style="list-style: none; padding-left: 0;">
    <li><strong>Event:</strong> ${event.title}</li>
    <li><strong>Date:</strong> ${formatDate(event.date)}</li>
    <li><strong>Time:</strong> ${formatTime(event.date)}</li>
    <li><strong>Venue:</strong> ${event.location}</li>
  </ul>

  <p>Your cancellation has been processed successfully. Please note that cancellations made <strong>within 2 hours of the event start time</strong> are not eligible for refunds.</p>

  <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

  <h3>💬 What’s Next?</h3>
  <ul>
    <li>🎫 <strong>Changed your mind?</strong> You can always rebook your ticket anytime from your JoinNify account.</li>
    <li>💰 <strong>Refunds (if applicable):</strong> Refunds will be processed within 3–5 business days to your original payment method.</li>
    <li>📅 <strong>Stay updated:</strong> Explore new and upcoming events you might love on our platform.</li>
  </ul>

  <p>We hope to see you at a future event soon! If you have any questions or concerns, please reach out to our support team.</p>

  <p>Contact us: 
    <a href="mailto:support@joinnify.com" style="color: #4F46E5;">support@joinnify.com</a>
  </p>

  <p>Thank you for being part of <strong>JoinNify</strong> — where events come to life.</p>

  <p>Best regards,<br>
  The <strong>JoinNify</strong> Team<br>
  <em>Your Event. Your Way.</em></p>
</div>
`
    })

    return info;

  } catch (error) {
    console.log("Error in send ticket cancellation email route" + error);
  }
}

exports.sendOrganizerTicketPurchaseEmail = async (creator, event, attendee, numTickets, amountPaid) => {
  try {
    let info = await transport.sendMail({
      from: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS,
      to: 'esitwitawiah@gmail.com',
      subject: "Your JoinNify Event Sold a Ticket",
      html: `
<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
  <h2>🎟 New Ticket Sold!</h2>

  <p>Hi <strong>${creator.name || 'Organizer'}</strong>,</p>

  <p>Great news! A new attendee has just purchased a ticket for your event, <strong>${event.title}</strong>.</p>

  <h3>👤 Attendee Details</h3>
  <ul style="list-style: none; padding-left: 0;">
    <li><strong>Name:</strong> ${attendee.name || 'Attendee'}</li>
    <li><strong>Tickets Purchased:</strong> ${numTickets}</li>
    <li><strong>Amount Paid:</strong> GHS ${amountPaid}</li>
  </ul>

  <h3>📅 Event Details</h3>
  <ul style="list-style: none; padding-left: 0;">
    <li><strong>Event:</strong> ${event.title}</li>
    <li><strong>Date:</strong> ${formatDate(event.date)}</li>
    <li><strong>Time:</strong> ${formatTime(event.date)}</li>
    <li><strong>Venue:</strong> ${event.location}</li>
  </ul>


  <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

  <h3>📈 Quick Insights</h3>
  <ul>
    <li>🎫 Total tickets sold for this event: <strong>${event.ticketsSold}</strong></li>
    <li>💰 Total revenue so far: <strong>GHS ${event.totalRevenue}</strong></li>
  </ul>

  <p>Keep up the great work! Every sale brings your event closer to success 🎉</p>

  <p>If you’d like to get automatic updates for every sale or daily summaries, you can manage your notification preferences in your dashboard.</p>

  <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

  <p>Contact us if you need assistance: 
    <a href="mailto:support@joinnify.com" style="color: #4F46E5;">support@joinnify.com</a>
  </p>

  <p>Best regards,<br>
  The <strong>JoinNify</strong> Team<br>
  <em>Your Event. Your Way.</em></p>
</div>
`
    })

    return info;

  } catch (error) {
    console.log("Error in send organizer ticket purchase email route" + error);
  }
}




// <div style="text-align: center; margin: 30px 0;">
  //   <a href="${downloadLink}" 
  //      style="display: inline-block; background-color: #4F46E5; color: #fff; padding: 12px 28px; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 8px;">
  //      🎫 Download Ticket
  //   </a>
  // </div>

    // <li><strong>Ticket ID:</strong> ${ticketId}</li>



  // <p>You can view this sale and all ticket data in your <a href="${organizerDashboardUrl}" style="color: #4F46E5;">JoinNify Organizer Dashboard</a>.</p>
