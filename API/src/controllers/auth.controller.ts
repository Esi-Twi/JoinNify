import { loginSchema, registerSchema } from "@middlewares/inputValidator";
import { loginUser, registerUser, verifyEmail } from "@services/auth.service";
import { AppError } from "@utils/app-errror";
import { generateToken } from "@utils/generateJWTToken";
import { AuthEmails } from "emails/send.auth.email";
import { NextFunction, Request, Response } from "express";


export const AuthControllers = {
    // todo: send notification to admin if organizer signs up
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { role, email, password } = req.body

            //check if email and password are provided
            if (!email || !password ) {
                throw new AppError("Email, Password and Role is required!", 400)
            }

            // validatiion for email, password and role
            const { error, value } = registerSchema.validate(
                { role, email, password },
                { abortEarly: true }
            )
            if (error) {
                throw new AppError(error.details[0].message, 400)
            }

            const newUser = await registerUser(value)

            //generate token
            const token = generateToken(res, {
                id: newUser.id.toString(),
                name: newUser.name,
                email: newUser.email, 
                role: newUser.role
            })

            const verificationLink = `${process.env.BASE_URL}/verify-email?userId=${newUser.id}&token=${newUser.verification_token}`
            // const verificationLink = "https://yourdomain.com/verify-email?userId=USER_ID_HERE&token=VERIFICATION_TOKEN_HERE"


            //send welcome email
            await AuthEmails.sendWelcomeEmail(newUser.email, newUser.name, verificationLink)

            // // send notification to admin if organizer signs up
            // app.post("/notify", (req: Request, res: Response) => {
            //     const { userId, message } = req.body;

            //     const socketId = onlineUsers.get(userId);

            //     if (!socketId) {
            //         return res.status(404).json({ success: false, msg: "User offline" });
            //     }

            //     // Send notification to the specific user
            //     io.to(socketId).emit("notification", {
            //         message,
            //         date: new Date(),
            //     });

            //     return res.json({ success: true, msg: "Notification sent!" });
            // });

            // server.listen(5000, () => {
            //     console.log("Server running on http://localhost:5000");
            // });




            // send response
            res.status(201).json({
                success: true,
                message: "Account created successfully!!",
                user: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email, 
                    role: newUser.role, 
                    verificationToken: newUser.verification_token,
                    verificationTokenExpiry: newUser.verification_token_expiry
                }, 
                token
            })

        } catch (error) {
            next(error)
        }

    },

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body

            //check if email and password are provided
            if (!email || !password ) {
                throw new AppError("Email and Password is required!", 400)
            }

            // validatiion for email, password 
            const { error, value } = loginSchema.validate(
                { email, password },
                { abortEarly: true }
            )
            if (error) {
                throw new AppError(error.details[0].message, 400)
            }
           
            const user = await loginUser(value)

            // create token 
            const token = generateToken(res, {
                id: user.id.toString(), 
                name: user.name, 
                email: user.email, 
                role: user.role
            })

            res.status(200).json({
                success: true, 
                msg: "User logged in successfully!!!",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role, 
                },
                token
            })
            
        } catch (error) {
            next(error)
        }
    },

    async verifyEmail(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, token } = req.body
            const user = await verifyEmail(Number(userId), Number(token))

            res.status(200).json({
                success: true, 
                msg: "Email verified successfully!!!",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    is_verified: user.is_verified,
                }, 
            })

        } catch (error) {
            next(error)
        }
    },

    async logout(req: Request, res: Response, next: NextFunction) {
        res.clearCookie("token").status(200).json({
            success: true, 
            msg: "Logged out successfully!!!", 
        })
    },

    async forgotPassword(req: Request, res: Response, next: NextFunction) {

    }, 

    async resetPassword(req: Request, res: Response, next: NextFunction) {

    }
}