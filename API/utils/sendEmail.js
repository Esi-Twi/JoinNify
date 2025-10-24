const nodeMailer = require("nodemailer")


const transport = nodeMailer.createTransport({
    service: 'email', 
    auth: {
        user: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS,
        
    }
})


exports.sendPasswordResetEmail = async(email, resetURL) => {
    try {
        
    } catch (error) {
        console.log("Error in send password reset email route" + error);
        
    }
}