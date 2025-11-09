const cron = require("node-cron")
const Event = require("../models/event.model")
const Ticket = require("../models/ticket.model")
const { sendReminderEmail } = require("../emails/send.event.emails")


cron.schedule("0 0 * * *", async () => {
  console.log("⏰ Running daily reminder job...");

  const now = new Date()


})


/*
const moment = require("moment");

console.log("✅ Reminder job initialized...");

// Runs once every 24 hours (at 00:00 / midnight)
cron.schedule("0 0 * * *", async () => {
  console.log("⏰ Running daily reminder job...");

  const now = new Date();
  const next24Hours = moment(now).add(24, "hours").toDate();

  // Find events starting in the next 24 hours
  const upcomingEvents = await Event.find({
    date: { $gte: now, $lte: next24Hours },
  });

  for (const event of upcomingEvents) {
    const tickets = await Ticket.find({ eventId: event._id }).populate("userId");

    for (const ticket of tickets) {
      const user = ticket.userId;
      if (!user.email) continue;

      await sendEventReminderEmail(user, event);
      console.log(`📧 Reminder sent to ${user.email} for ${event.title}`);
    }
  }

  console.log("✅ Reminder job completed.");
});

};


require("./jobs/reminderJob");

*/