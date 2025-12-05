import { UserRoles } from "@database/enum"
import Joi, { object } from "joi"

export const registerSchema = Joi.object({
    role: Joi.string().required().valid(...Object.values(UserRoles)),

    email: Joi.string().required().email().min(5).max(60), 

    password: Joi.string().pattern(
        new RegExp('^(?=.*[A-Z])(?=.*\\d).+$')
        // takes Capital letters and numbers
    )
})

export const loginSchema = Joi.object({
    email: Joi.string().required().email().min(5).max(60),

    password: Joi.string().pattern(
        new RegExp('^(?=.*[A-Z])(?=.*\\d).+$')
        // takes Capital letters and numbers
    )
})

