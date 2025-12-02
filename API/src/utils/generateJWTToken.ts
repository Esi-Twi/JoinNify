import { Response } from "express";
import { UserProps } from "types";
import jwt from "jsonwebtoken"


export const generateToken = (res: Response, user: Pick<UserProps, "id" | "name" | "email" >) => {
    const token = jwt.sign({
        id: user.id, 
        email: user.id, 
        name: user.id
    }, 
    process.env.JWT_SECRET as string, 
    {expiresIn: "7d"}
    )

    // res.cookie()

}