import { AppDataSource } from "@config/data.source"
import { Events } from "@database/entity/event"
import { Users } from "@database/entity/users"
import { AppError } from "@utils/app-errror"
import { CreateEventDTO } from "types"


const UserRepository = AppDataSource.getRepository(Users)
const EventRepository = AppDataSource.getRepository(Events)


export const getAllEvents = async() => {
    const events = await EventRepository.find({
        where: {
            deleted: false, 
            is_approved: true
        }
    })

    return events
}


export const getEvent = async(id: number) => {
    const event = await EventRepository.findOne({
        where: {
            id, 
            deleted: false,
            is_approved: true
        }
    })

    return event
}


export const createEvent = async(id: number, data: CreateEventDTO) => {
    //check if user exists
    const existingUser = await UserRepository.findOne({
        where: {
            id, 
            deleted: false
        }
    })
    if(!existingUser) {
        throw new AppError("User cannot be found", 401)
    }

    // Upload each image to Cloudinary

    //create event
}


export const updateEvent = async(id: number, data: CreateEventDTO) => {
    const event = await EventRepository.findOne({
        where: {
            id,
            deleted: false,
            is_approved: true
        }
    })
    if (!event) {
        throw new AppError("Event does not exist", 401)
    }

    event.title = data.title || event.title
    event.location = data.location || event.location
    event.capacity = data.capacity || event.capacity
    event.ticket_price = data.price || event.ticket_price
    event.start_date = data.start_date || event.start_date
    event.end_date = data.end_date || event.end_date

    //add image to existing images

    return await EventRepository.save(event)

}


export const deleteEvent = async(id: number) => {
    const event = await EventRepository.findOne({
        where: {
            id, 
            deleted: false, 
            is_approved: true
        }
    })
    if(!event) {
        throw new AppError("Event does not exist", 401)
    }

    event.deleted = true
    return EventRepository.save(event)
}

