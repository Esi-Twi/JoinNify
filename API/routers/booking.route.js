const express = require('express');
const { bookTicket, getBookingHistory, cancelTicket, getEventSpecificAnalytics, getAllEventAnalytics} = require('../controllers/booking.controller');
const { identifier, authorizedRoles } = require('../middlewares/authenticator');
const router = express.Router()


router.post("", identifier, authorizedRoles("Admin", "Organizer", "Attendee"), bookTicket)
router.get("/history", identifier, authorizedRoles("Admin", "Organizer", "Attendee"), getBookingHistory)
router.get("/eventAnalytics/:id", identifier, authorizedRoles("Admin", "Organizer"), getEventSpecificAnalytics)
router.get("/eventAnalytics", identifier, authorizedRoles("Admin", "Organizer"), getAllEventAnalytics)

router.patch("/cancel/:id", identifier, authorizedRoles("Admin", "Organizer", "Attendee"), cancelTicket)


module.exports = router;