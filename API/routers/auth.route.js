const express = require('express')
const router = express.Router()
const {register, login, resetPassword, sendVerificationEmail, verifyEmail, logout, sendResetPasswordEmail} = require('../controllers/auth.controller')
const { identifier, authorizedRoles } = require('../middlewares/authenticator')



router.post("/register", register)
router.post("/login", login)

router.get("/logout", logout)

router.post("/reset-password", identifier, authorizedRoles("Admin", "Organizer", "Attendee"), resetPassword)
router.post("/send-reset-password-email", identifier, authorizedRoles("Admin", "Organizer", "Attendee"), sendResetPasswordEmail)

router.post("/send-verification-email", identifier, authorizedRoles("Admin", "Organizer", "Attendee"), sendVerificationEmail)
router.post("/verify-email", identifier, authorizedRoles("Admin", "Organizer", "Attendee"), verifyEmail)



module.exports = router;