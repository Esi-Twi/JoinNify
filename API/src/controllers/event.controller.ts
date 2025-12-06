import { createEventSchema } from "@middlewares/inputValidator";
import { AppError } from "@utils/app-errror";
import { NextFunction, Request, Response } from "express";



export const EventController = {
    async get(req: Request, res: Response, next: NextFunction) {

    },

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const authenticatedUser = req.user
            const { title, location, capacity, price, start_date, end_date, images} = req.body

            if (!title || !location || !capacity || price < 0 || !start_date || !end_date) {
                throw new AppError("All Fields required", 401)
            }

            //check if image is added
            if(!images) {
                throw new AppError("At least one image is needed", 401)
            }

            //check images.length
            if(images.length > 9) {
                throw new AppError("You can upload a minimun of 9 images", 401)
            }

            //validate inputs
            const {error, value} = createEventSchema.validate(req.body)
            if(error) {
                throw new AppError(error.details[0].message, 401)
            }
           
            //check if ending date is older than starting date
            if(new Date(end_date) <= new Date(start_date)) {
                throw new AppError("Ending Date must be older than Starter Date", 401)
            }

            //check if user exists
            // Upload each image to Cloudinary
            //create event

            res.status(201).json({ success: true, msg: "Event created successfully!!!", body: req.body, authenticatedUser })

        } catch (error) {
            next(error)
        }
    },

    async update(req: Request, res: Response, next: NextFunction) {

    },

    async delete(req: Request, res: Response, next: NextFunction) {

    },

}