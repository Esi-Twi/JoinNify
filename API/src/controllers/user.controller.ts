import { updateProfileSchema } from "@middlewares/inputValidator";
import { updateProfile, viewProfile } from "@services/user.service";
import { AppError } from "@utils/app-errror";
import { NextFunction, Request, Response } from "express";


export const UserController = {
    async updateProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const authenticatedUser = req.user
            const { name, location, phone_number } = req.body

            //validate input
            const { error, value } = updateProfileSchema.validate({ name, location, phone_number })
            if (error) {
                throw new AppError(error.details[0].message, 400)
            }

            const updatedUser = await updateProfile({
                name,
                location,
                phone_number,
                email: authenticatedUser!.email
            })

            res.status(200).json({ success: true, msg: "Profile updated successfully!!!", 
                updatedUser: {
                    name: updatedUser.name,
                    email: updatedUser.email,
                    role: updatedUser.role,
                    phone_number: updatedUser.phone_number,
                    location: updatedUser.location,
                    is_verified: updatedUser.is_verified,
                    updated_at: updatedUser.updated_at,
                    created_at: updatedUser.created_at
                }
            })

        } catch (error) {
            next(error)
        }
    },

    async viewProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const authenticatedUser = req.user
            const profileInfo = await viewProfile(Number(authenticatedUser!.id))

            res.status(200).json({ success: true, profileInfo })

        } catch (error) {
            next(error)
        }
    }
}