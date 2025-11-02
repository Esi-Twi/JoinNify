const express = require('express');
const { bookTicket, getBookingHistory, cancelTicket} = require('../controllers/book.controller');
const { identifier, authorizedRoles } = require('../middlewares/authenticator');
const router = express.Router()

router.post("/:id", identifier, authorizedRoles("Admin", "Organizer", "Attendee"), bookTicket)
router.get("history/:id", identifier, authorizedRoles("Admin", "Orgainzer", "Attendee"), getBookingHistory)

router.patch("cancel/:id", identifier, authorizedRoles("Admin", "Organizer", "Attendee"), cancelTicket)


module.exports = router;