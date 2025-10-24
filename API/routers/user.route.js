const express = require('express');
const { getAllUsers, updateRole, updateStatus, resetPassword, updateProfile, verifyEmail } = require('../controllers/user.controller');
const { identifier, authorizedRoles } = require('../middlewares/authenticator');
const router = express.Router()


router.get("/", identifier, authorizedRoles("Admin"), getAllUsers)

router.patch("/update-role/:id", identifier, authorizedRoles("Admin"), updateRole)
router.patch("/update-status/:id", identifier, authorizedRoles("Admin"), updateStatus)

router.patch("/reset-password/:id", identifier, authorizedRoles("Admin", "Organizer", "Attendee"), resetPassword)
router.patch("/verify-email/:id", identifier, authorizedRoles("Admin", "Organizer", "Attendee"), verifyEmail)

router.patch("/update-profile/:id", identifier, authorizedRoles("Admin", "Organizer", "Attendee"), updateProfile)


module.exports = router;