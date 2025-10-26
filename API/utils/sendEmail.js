const nodeMailer = require("nodemailer")


const transport = nodeMailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS,
        pass: process.env.NODE_CORE_SENDING_EMAIL_PASSWORD
    }
})


exports.sendVerificationEmail = async(token) => {
    try {
        let info = await transport.sendMail({
            from: process.env.NODE_CORE_SENDING_EMAIL_ADDRESS, 
            to: 'esitwitawiah@gmail.com', 
            subject: "Password Reset Request", 
            html: `<p>You requested for a password reset. Click <a href="${token}">here</a> to reset your password.</p>`
        })

        return info; 

    } catch (error) {
        console.log("Error in send password reset email route" + error);
        
    }
}