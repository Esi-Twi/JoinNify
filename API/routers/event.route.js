const express = require('express')
const { addEvent, updateStatus, deleteEvent, allEvents, updateEvent, allApprovedEvents, featureEvent, organizerEventDetails } = require('../controllers/event.controller')
const router = express.Router()
const {identifier, authorizedRoles} = require('../middlewares/authenticator')


router.get("/", identifier, authorizedRoles("Admin"), allEvents)
router.get("/approved", identifier, authorizedRoles("Organizer", "Attendee", "Admin"), allApprovedEvents)
router.get("/:id", identifier, authorizedRoles("Organizer", "Admin",), organizerEventDetails)

router.post("/add", identifier, authorizedRoles("Organizer", "Admin"), addEvent)

router.patch("/update-status/:id", identifier, authorizedRoles("Admin"), updateStatus)
router.patch("/update/:id", identifier, authorizedRoles("Admin", "Organizer"), updateEvent)
router.patch("/feature/:id", identifier, authorizedRoles("Admin"), featureEvent)

router.delete("/delete/:id", identifier, authorizedRoles("Admin", "Organizer"), deleteEvent)


module.exports = router