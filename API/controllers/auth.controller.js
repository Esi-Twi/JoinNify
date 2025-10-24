const User = require('../models/user.model')
const { doHash, doHashValidation } = require('../utils/hashing')
const { registerSchema, loginSchema } = require('../middlewares/validator')
const jwt = require('jsonwebtoken')
const { generateToken } = require('../utils/generateToken')
const { sendPasswordResetEmail } = require('../utils/sendEmail')



exports.register = async (req, res) => {
    const { email, password, role, name } = req.body

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and Password is required' })
    }

    try {
        const { error, value } = registerSchema.validate({ email, password })
        if (error) {
            return res.status(400).json({ success: false, message: error.details[0].message })
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' })
        }

        const hashedPassword = await doHash(password, 12)

        const newUser = new User({
            email,
            name,
            password: hashedPassword,
            role: role || "Attendee"
        })
        await newUser.save()

        const token = jwt.sign({
            userId: newUser._id,
            email,
            role: newUser.role
        }, process.env.JWT_SECRET, {
            expiresIn: '8h'
        })
        newUser.password = undefined

        res.status(200)
            .cookie("Authorization", "Bearer " + token, {
                expiresIn: new Date(Date.now() + 8 * 3600000),
                httpOnly: process.env.NODE_ENV === 'production',
                secure: false,
            })
            .json({
                success: true,
                token,
                user: newUser,
                message: 'User registered successfully',
            })
    } catch (error) {
        console.log("Error in register route", error);
        res.status(400).json({ success: false, message: error.message })
    }
}


exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and Password is required' })
        }

        const { error, value } = loginSchema.validate({ email, password })
        if (error) {
            return res.status(400).json({ success: false, message: error.details[0].message })
        }

        const existingUser = await User.findOne({ email }).select("+password")
        if (!existingUser) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' })
        }

        const isPasswordValid = await doHashValidation(password, existingUser.password)
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' })
        }

        const token = jwt.sign({
            userId: existingUser._id,
            email,
            role: existingUser.role
        }, process.env.JWT_SECRET, {
            expiresIn: '8h'
        })
        existingUser.password = undefined

        return res.status(400)
            .cookie("Authorization", "Bearer " + token, {
                expiresIn: new Date(Date.now() + 8 * 3600000),
                httpOnly: process.env.NODE_ENV === 'production',
                secure: false,
            })
            .json({
                success: true,
                message: "User logged in successfully!",
                existingUser,
                token,
            })
    } catch (error) {
        console.log("Error in login route", error);
        res.status(400).json({ success: false, message: error.message })
    }
}

exports.logout = async (req, res) => {

    try {


    } catch (error) {
        console.log("Error in logout route", error);
        res.status(400).json({ success: false, message: error.message })
    }
}


//click on forget password/reset password link 
//system takes email
//check if user exists
//generate resetPasswordToken with a time limit about 20 minutes
//store token in database and token usage status
//send email to user with reset link containing the token
//user clicks link, system verifies token and time limit
//user enters new password and confirms
//validate password format
//token is marked as used in database and cleared
exports.resetPassword = async (req, res) => {
    const { email } = req.body

    try {
        const existingUser = await User.findOne({email})
        if(!existingUser) {
            return res.status(400).json({ success: false, message: "User does not exist" })
        }

        const resetPasswordToken = generateToken()
        const resetPasswordTokenExpiry = Date.now() * 1 * 60 * 60 * 1000 // 1 hour

        existingUser.resetPasswordToken = resetPasswordToken; 
        existingUser.resetPasswordTokenExpiry = resetPasswordTokenExpiry; 
        await existingUser.save();

        await sendPasswordResetEmail(existingUser.email, `${process.env.CLIENT_URL}/reset-password/${resetPasswordToken}`)
        res.json({resetPasswordToken})


    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in reset password route", error);
    }
}


exports.verifyEmail = async (req, res) => {

    try {

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in verify email route", error);
    }
}

