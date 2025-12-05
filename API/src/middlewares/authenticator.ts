import { UserRoles } from "@database/enum";
import { AppError } from "@utils/app-errror";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { JWTPayload } from "types";


export const identifier = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies?.token
        if (!token) {
            throw new AppError("Not authenticated. Please login", 401)
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload
        req.user = decoded

        next()

    } catch (error) {
        next(new AppError("Invalid or Expired Token", 401))
    }
}



export const allowedRoles = (...roles: `${UserRoles}`[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const role = req.user?.role

        if(!role || !roles.includes(role)) {
            throw new AppError("Access Denied", 401)
        }
       
        next()
    }
}