import { registerSchema } from "@middlewares/inputValidator";
import { registerUser } from "@services/auth.service";
import { AppError } from "@utils/app-errror";
import { NextFunction, Request, Response } from "express";



export const AuthControllers = {
    async register (req: Request, res: Response, next: NextFunction) {
        const {role, email,password} = req.body

        try {
            //check if email and password are provided
            if(!email || !password || !role){
                throw new AppError("Email, Password and Role is required!", 400)
            }

            // validatiion for email, password and name
            const {error, value} =  registerSchema.validate({role, email, password})
            if(error) {
                throw new AppError(error.details[0].message, 400)
            }

            const newUser = await registerUser(value)

            

            
        } catch (error) {
            next(error)
        }

        // cannot register as admin
        // send notification to admin if organizer signs up
        //generate token
        //send welcome email
        //-------add user email later
        //create cookie and send response
    }, 

    async login(req: Request, res: Response, next: NextFunction) {

    }, 

    async verifyEmail(req: Request, res: Response, next: NextFunction) {

    }, 

    async updateProfile (req: Request, res: Response, next: NextFunction) {

    }, 
    
    async logout(req: Request, res: Response, next: NextFunction) {

    },
}