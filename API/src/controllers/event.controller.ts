import { createEventSchema } from "@middlewares/inputValidator";
import { createEvent, deleteEvent, getAllEvents, getAllUserEvents, getEvent, updateEvent } from "@services/event.service";
import { AppError } from "@utils/app-errror";
import { NextFunction, Request, Response } from "express";



export const EventController = {
    async getEvent(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

            const event = await getEvent(Number(id))
            res.status(200).json({ success: true, event })

        } catch (error) {
            next(error)
        }
    },

    async getAllEvents(req: Request, res: Response, next: NextFunction) {
        try {
            const events = await getAllEvents()
            res.status(200).json({ success: true, num: events.length, events })

        } catch (error) {
            next(error)
        }
    },

    async allOrganizerEvents(req: Request, res: Response, next: NextFunction) {
        try {
            const authenticatedUserId = req.user.id
            // const events = await getAllUserEvents(Number(authenticatedUserId))
            // res.status(200).json({ success: true, num: events.length, events })
            res.status(200).json({ success: true,  authenticatedUserId })



        } catch (error) {
            next(error)
        }
    },

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const authenticatedUser = req.user
            const { title, location, capacity, price, start_date, end_date, images, category, desc } = req.body

            if (!title || !location || !desc || !capacity || price < 0 || !start_date || !end_date || !category) {
                throw new AppError("All Fields required", 401)
            }

            //check if image is added
            // if (!images) {
            //     throw new AppError("At least one image is needed", 401)
            // }

            // //check images.length
            // if (images.length > 9) {
            //     throw new AppError("You can upload a minimun of 9 images", 401)
            // }

            //validate inputs
            const { error, value } = createEventSchema.validate(req.body)
            if (error) {
                throw new AppError(error.details[0].message, 401)
            }

            //check if ending date is older than starting date
            if (new Date(end_date) <= new Date(start_date)) {
                throw new AppError("Ending Date must be older than Starter Date", 401)
            }

            const event = await createEvent(
                Number(authenticatedUser!.id),
                value
            )

            res.status(201).json({ success: true, msg: "Event created successfully!!!", event })

        } catch (error) {
            next(error)
        }
    },

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params
            const authenticatedUserId = req.user.id
            const { title, location, capacity, price, start_date, end_date, images, desc } = req.body

            //check images.length
            // if (images && images.length > 9) {
            //     throw new AppError("You can upload a minimun of 9 images", 401)
            // }

            //validate inputs
            const { error, value } = createEventSchema.validate(req.body)
            if (error) {
                throw new AppError(error.details[0].message, 401)
            }

            //check if ending date is older than starting date
            if (end_date && start_date && new Date(end_date) <= new Date(start_date)) {
                throw new AppError("Ending Date must be older than Starter Date", 401)
            }

            const event = await updateEvent(Number(id), Number(authenticatedUserId), value)

            res.status(200).json({ success: true, msg: "Event updated successfully!!!", event})
            
        } catch (error) {
            next(error)
        }
    },

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params
            const authenticatedUserId = req.user.id

            await deleteEvent(Number(id), Number(authenticatedUserId))
            res.status(200).json({ success: true, msg: "Event deleted successfully!!!" })

        } catch (error) {
            next(error)
        }
    },

}