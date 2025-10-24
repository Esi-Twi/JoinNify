const express = require('express');
const { getAllUsers, updateRole, updateStatus, updateProfile } = require('../controllers/user.controller');
const { identifier, authorizedRoles } = require('../middlewares/authenticator');
const router = express.Router()


router.get("/", identifier, authorizedRoles("Admin"), getAllUsers)

router.patch("/update-role/:id", identifier, authorizedRoles("Admin"), updateRole)
router.patch("/update-status/:id", identifier, authorizedRoles("Admin"), updateStatus)


router.patch("/update-profile/:id", identifier, authorizedRoles("Admin", "Organizer", "Attendee"), updateProfile)


module.exports = router;