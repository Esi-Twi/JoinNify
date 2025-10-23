const express = require('express');
const { bookTicket } = require('../controllers/book.controller');
const { identifier, authorizedRoles } = require('../middlewares/authenticator');
const router = express.Router()

router.post("/:id", identifier, authorizedRoles("Admin", "Organizer", "Attendee"), bookTicket)


module.exports = router;