import { AppDataSource } from "@config/data.source"
import { Users } from "@database/entity/users"
import { AppError } from "@utils/app-errror"
import { UpdateProfileDTO } from "types"

const UserRepository = AppDataSource.getRepository(Users)


export const updateProfile = async (data: UpdateProfileDTO) => {
    const existingUser = await UserRepository.findOne({
        where: {
            email: data.email,
            deleted: false
        }
    })
    if (!existingUser) {
        throw new AppError("User not found!", 400)
    }

    existingUser.name = data.name || existingUser.name
    existingUser.phone_number = data.phone_number || existingUser.phone_number
    existingUser.location = data.location || existingUser.location

    return await UserRepository.save(existingUser)
}


export const viewProfile = async (id: number) => {
    const existingUser = await UserRepository.findOne({
        where: {
            id,
            deleted: false
        }, 
        select: {
            name: true, 
            email: true,
            role: true, 
            phone_number: true,
            location: true, 
            is_verified: true,
            updated_at: true, 
            created_at: true
        }
    })
    if (!existingUser) {
        throw new AppError("User not found!", 400)
    }

    return existingUser
}


