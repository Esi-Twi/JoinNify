import { NextFunction, Request, Response } from "express";


export const UserController = {
    async updateProfile (req: Request, res: Response, next: NextFunction) {
        try {
            const authenticatedUser = req.user


            //check if name, phoneNumber, location
            
            //check if user exists
            // update userInfo

       
       
            res.status(200).json({success: true, msg: "Profile updated successfully!!!", authenticatedUser})     
            
        } catch (error) {
            next(error)
        }   
    }, 

}