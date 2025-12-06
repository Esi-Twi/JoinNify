import { UserRoles } from "@database/enum"
import Joi, { object } from "joi"

export const registerSchema = Joi.object({
    role: Joi.string().valid(...Object.values(UserRoles)),

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


export const updateProfileSchema = Joi.object({
    name: Joi.string().min(2).max(60), 

    location: Joi.string().min(2),

    phone_number: Joi.string().pattern(/^\+?[1-9]\d{6,14}$/)
    .messages({
        "string.pattern.base": "Phone number must follow E.164 format (e.g., +1234567890)"
    })
})


export const createEventSchema = Joi.object({
    title: Joi.string().min(2).required(), 
    location: Joi.string().min(2).required(), 
    capacity: Joi.number().required().min(0), 
    price: Joi.number().required().min(0), 

    start_date: Joi.date().required().min(Date.now()),
    end_date: Joi.date().required().min(Date.now()),

    // images

})
