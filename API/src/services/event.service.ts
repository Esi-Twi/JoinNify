import { AppDataSource } from "@config/data.source"
import { Events } from "@database/entity/events"
import { Users } from "@database/entity/users"
import cloudinary from "@lib/cloudinary"
import { AppError } from "@utils/app-errror"
import { CreateEventDTO } from "types"


const UserRepository = AppDataSource.getRepository(Users)
const EventRepository = AppDataSource.getRepository(Events)


export const getAllEvents = async () => {
    const events = await EventRepository.find({
        where: {
            deleted: false,
            // is_approved: true
        },
        relations: ["attendees"]
    })

    return events
}


export const getEvent = async (id: number) => {
    const event = await EventRepository.findOne({
        where: {
            id,
            deleted: false,
            // is_approved: true
        },
        relations: ["attendees"]
    })

    return event
}


export const createEvent = async (id: number, data: CreateEventDTO) => {
    //check if user exists
    const existingUser = await UserRepository.findOne({
        where: {
            id,
            deleted: false
        }
    })
    if (!existingUser) {
        throw new AppError("User cannot be found", 401)
    }

    // // Upload each image to Cloudinary
    // const uploadedImages = await Promise.all(data.images.map(async(img) => {
    //     const uploadRes = await cloudinary.uploader.upload(img, {
    //         folder: "events",
    //     })

    //     return uploadRes.secure_url
    // }))

    //create event
    const event = EventRepository.create({
        creatorId: id,
        title: data.title,
        location: data.location,
        capacity: data.capacity,
        ticket_price: data.price,
        start_date: data.start_date,
        end_date: data.end_date,
        category: data.category,
        // images: uploadedImages, 
    })

    return await EventRepository.save(event)
}


export const updateEvent = async (id: number, data: CreateEventDTO) => {
    const event = await EventRepository.findOne({
        where: {
            id,
            deleted: false,
            // is_approved: true
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
    // for(let image in data.images) {
    //     event.images.push(image)
    // }

    return await EventRepository.save(event)

}


export const deleteEvent = async (id: number) => {
    // const event = await EventRepository.findOne({
    //     where: {
    //         id, 
    //         deleted: false, 
    //         // is_approved: true
    //     }
    // })
    // if(!event) {
    //     throw new AppError("Event does not exist", 401)
    // }

    // event.deleted = true
    // return EventRepository.save(event)

    await EventRepository.deleteAll()
}

