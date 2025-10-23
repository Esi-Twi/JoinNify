const express = require('express')
const { addEvent, updateStatus, deleteEvent, allEvents, updateEvent } = require('../controllers/event.controller')
const router = express.Router()
const {identifier, authorizedRoles} = require('../middlewares/authenticator')


router.get("/", identifier, authorizedRoles("Organizer", "Admin", "Attendee"), allEvents)
router.post("/add", identifier, authorizedRoles("Organizer", "Admin"), addEvent)

router.patch("/update-status/:id", identifier, authorizedRoles("Admin"), updateStatus)
router.patch("/update/:id", identifier, authorizedRoles("Admin", "Organizer"), updateEvent)

router.delete("/delete/:id", identifier, authorizedRoles("Admin", "Organizer"), deleteEvent)


module.exports = router