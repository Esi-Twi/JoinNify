const User = require("../models/user.model")


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})

        res.status(200).json({ success: true, numUsers: users.length, users })
    } catch (error) {
        res.status(400).json({ success: fale, message: error.message })
        console.log("error in get all users router", error);

    }
}

exports.updateRole = async (req, res) => {
    const { id } = req.params
    const { role } = req.body

    try {
        const existingUser = await User.findById(id)
        if (!existingUser) {
            return res.status(400).json({ success: false, messge: "User does not exist!" })
        }

        const updatedUser = await User.findByIdAndUpdate(
            id, { role }, { new: true, runValidators: true }
        )
        res.status(200).json({ success: true, msg: "User updated successfully", updatedUser })

    } catch (error) {
        res.status(400).json({ success: false, error: error.message })
        console.log("error in update role route", error);
    }
}


exports.updateStatus = async (req, res) => {
    const { id } = req.params
    const { isBanned } = req.body

    try {
        const existingUser = await User.findById(id)
        if (!existingUser) {
            return res.status(400).json({ success: fale, message: "User does not exist" })
        }

        const updatedUser = await User.findByIdAndUpdate(
            id, { isBanned }, { new: true, runValidators: true }
        )
        res.status(200).json({ success: true, msg: "User status updated successfully", updatedUser })

    } catch (error) {
        res.status(400).json({ success: fale, message: error.message })
        console.log("error in update status route", error);
    }
}

exports.updateProfile = async(req,res) => {

    try {
        
    } catch (error) {
         res.status(400).json({ success: fale, message: error.message })
        console.log("error in update profile route", error);
    }
}