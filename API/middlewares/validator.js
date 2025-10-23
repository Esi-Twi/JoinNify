const Joi = require('joi')

exports.registerSchema = Joi.object({
    email: Joi.string().required().min(5).max(60).email({
        tlds: { allow: ['com', 'net'] }
    }),
    password: Joi.string().required().pattern(
        new RegExp('^(?=.*[A-Z])(?=.*\\d).+$')
        // takes Capital letters and numbers
    )
})

exports.loginSchema = Joi.object({
    email: Joi.string().required().min(5).max(60).email({
        tlds: { allow: ['com', 'net'] }
    }),
    password: Joi.string().required().pattern(
        new RegExp('^(?=.*[A-Z])(?=.*\\d).+$')
        // takes Capital letters and numbers

    )
})

exports.eventSchema = Joi.object({
    title: Joi.string().required().min(5), 
    location: Joi.string().required(), 
    capacity: Joi.number().required(), 
    price: Joi.number().required(), 
})
