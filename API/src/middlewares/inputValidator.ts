import { EventCategories, UserRoles } from "@database/enum"
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

export const forgetPasswordSchema = Joi.object({
    email: Joi.string().required().email().min(5).max(60),
})

export const verifyForgotPasswordSchema = Joi.object({
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
    title: Joi.string().min(2),
    location: Joi.string().min(2),
    capacity: Joi.number().min(0),
    price: Joi.number().min(0),
    desc: Joi.string().min(5), 

    start_date: Joi.date().min(Date.now()),
    end_date: Joi.date().min(Date.now()),
    category: Joi.string().valid(...Object.values(EventCategories)),

    images: Joi.array().items(
        Joi.object({
            originalName: Joi.string(),
            mimetype: Joi.string().valid(
                "image/png", "image/jpeg", "image/jpg", "image/webp"
            ),
            size: Joi.number().max(5 * 1024 * 1024) // 5MB
        })
    ).min(1)

})



