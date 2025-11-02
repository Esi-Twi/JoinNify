const User = require('../models/user.model')
const { doHash, doHashValidation } = require('../utils/hashing')
const { registerSchema, loginSchema } = require('../middlewares/validator')
const jwt = require('jsonwebtoken')
const { generateToken } = require('../utils/generateToken')
const { sendVerificationEmail, sendSignUpEmail, sendResetPasswordEmail } = require('../utils/sendEmail')


// cannot register as admin 
// send notification to admin if organizer signs up 
exports.register = async (req, res) => {
    const { email, password, role, name } = req.body

    //check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and Password is required' })
    }

    try {
        // joi validatiion for email and password
        const { error, value } = registerSchema.validate({ email, password })
        if (error) {
            return res.status(400).json({ success: false, message: error.details[0].message })
        }

        //check if user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' })
        }
        //hash password
        const hashedPassword = await doHash(password, 12)

        //create new user
        const newUser = new User({
            email,
            name,
            password: hashedPassword,
            role: role || "Attendee"
        })
        await newUser.save()

        //generate token
        const token = jwt.sign({
            userId: newUser._id,
            email,
            role: newUser.role
        }, process.env.JWT_SECRET, {
            expiresIn: '8h'
        })
        newUser.password = undefined

        //send welcome email
        //-------add user email later
        const info = await sendSignUpEmail(newUser.name);

        //create cookie and send response
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

//register only admin
exports.registerAdmin = async (req, res) => {

    try {

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in register admin route", error);
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

        return res.status(200)
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
    res.clearCookie("Authorization")
        .status(200)
        .json({ success: true, message: 'logged out successfully!!!' })
}


exports.sendResetPasswordEmail = async (req, res) => {
    const { email } = req.body

    try {
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(400).json({ success: false, message: "User does not exist" })
        }

        const resetPasswordToken = generateToken()
        const resetPasswordTokenExpiry = Date.now() + 20 * 60 * 1000 // 20 minutes

        existingUser.resetPasswordToken = resetPasswordToken; 
        existingUser.resetPasswordTokenExpiry = resetPasswordTokenExpiry; 
        await existingUser.save();
        const resetLink = `${process.env.CLIENT_URL}/reset-password/${resetPasswordToken}`;

        const info = await sendResetPasswordEmail(resetLink)
        res.json({success: true, link: resetLink, resetPasswordToken, message: "Reset password email has been sent", existingUser })


    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in send reset password email route", error);
    }
}

exports.resetPassword = async (req, res) => {
    const { email, token, newPassword } = req.body

    try {
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(400).json({ success: false, message: "User does not exist" })
        }

        //check if token is expired
        if(existingUser.resetPasswordToken !== token || Date.now() > email.resetPasswordTokenExpiry) {
            return res.status(400).json({ success: false, message: "Invalid or expired token!!" })
        }

        //hash password
        const hashedPassword = await doHash(newPassword, 12)
        
        //update user data
        existingUser.resetPasswordToken = undefined;
        existingUser.resetPasswordTokenExpiry = undefined;
        existingUser.password = hashedPassword;
        await existingUser.save()

        //send response
        existingUser.password = undefined;
        res.json({success: true, message: "Passward was reset successfully", existingUser})


    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in reset password route", error);
    }
}

exports.sendVerificationEmail = async (req, res) => {
    const { email } = req.body
    try {
        //check if user exists
        const existingUser = await User.findOne({ email })
        //check if user is already verified
        if (!existingUser) {
            return res.status(400).json({ success: false, message: "User does not exist!!" })
        }
        //check if user is already verified
        if (existingUser.isVerified) {
            return res.status(400).json({ success: false, message: "User is already verified!!" })
        }

        //generate verification token and token expiry time
        const verificationToken = generateToken()
        const verificationTokenExpiry = Date.now() + 20 * 60 * 1000 // 20 minutes

        //update existing user data
        existingUser.verificationToken = verificationToken
        existingUser.verificationTokenExpiry = verificationTokenExpiry
        await existingUser.save()

        //send email
        const info = await sendVerificationEmail(verificationToken)
        //send response
        existingUser.password = undefined;
        res.json({ success: true, message: "Verification email sent successfully", verificationToken, existingUser })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in send verification email route", error);
    }
}


exports.verifyEmail = async (req, res) => {
    const {email, token} = req.body
    try {
        //check if user exists
        const existingUser = await User.findOne({email})
         if (!existingUser) {
            return res.status(400).json({ success: false, message: "User does not exist!!" })
        }

        //check if token is expired
        if(existingUser.verificationToken !== token || Date.now > email.verificationTokenExpiry) {
            return res.status(400).json({ success: false, message: "Invalid or expired token!!" })
        }
        
        //update user data
        existingUser.isVerified = true; 
        existingUser.verificationToken = undefined;
        existingUser.verificationTokenExpiry = undefined;
        await existingUser.save()

        //send response
        existingUser.password = undefined;
        res.status(200).json({success: true, message: "Email is verified successfully", existingUser})
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in send verification email route", error);
    }
}


