import { AppError } from "@utils/app-errror";
import { NextFunction, Request, Response } from "express";



export const errorHandler = (
    err: any,
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    console.log(err);

    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false, 
            message: err.message
        })
    }

    return res.status(500).json({
        success: false, 
        message: "Something went wrong"
    })
}




