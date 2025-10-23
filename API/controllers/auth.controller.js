const User = require('../models/user.model')
const { doHash, doHashValidation } = require('../utils/hashing')
const { registerSchema, loginSchema } = require('../middlewares/validator')
const jwt = require('jsonwebtoken')

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
        res.status(400).json({success: false, message: error.message})        
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
        console.log("Error in login route" , error);
        res.status(400).json({success: false, message: error.message})
    }
}

