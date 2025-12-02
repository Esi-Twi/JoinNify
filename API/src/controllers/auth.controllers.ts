import { registerSchema } from "@middlewares/inputValidator";
import { registerUser } from "@services/auth.service";
import { AppError } from "@utils/app-errror";
import { generateToken } from "@utils/generateJWTToken";
import { AuthEmails } from "emails/send.auth.email";
import { NextFunction, Request, Response } from "express";



export const AuthControllers = {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { role, email, password } = req.body

            //check if email and password are provided
            if (!email || !password || !role) {
                throw new AppError("Email, Password and Role is required!", 400)
            }

            // validatiion for email, password and name
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
                email: newUser.email
            })

            //send welcome email
            await AuthEmails.sendWelcomeEmail(newUser.email, newUser.name)

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
                }, 
                token
            })

        } catch (error) {
            next(error)
        }

    },

    async login(req: Request, res: Response, next: NextFunction) {

    },

    async verifyEmail(req: Request, res: Response, next: NextFunction) {

    },

    async logout(req: Request, res: Response, next: NextFunction) {

    },
}