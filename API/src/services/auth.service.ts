import { AppDataSource } from "@config/data.source"
import { Users } from "@database/entity/users"
import { AppError } from "@utils/app-errror"
import { compareHash, doHash } from "@utils/hashing"
import { RegisterDTO } from "types"


const UserRepository = AppDataSource.getRepository(Users)


export const registerUser = async(data: RegisterDTO) => {
    //check if user already exists
    const existingUser = await UserRepository.findOne({
        where: {
            email: data.email, 
            deleted: false
        }
    })
    if(existingUser) {
        throw new AppError("User already exists!!", 401)
    }

    //hash password
    const hashedPassword = await doHash(data.password, 12)

    //create new user
    const newUser = UserRepository.create({
        name: data.name, 
        password: hashedPassword, 
        email: data.email, 
        role: data.role
    })

    return await UserRepository.save(newUser)
}


export const loginUser = async(data:RegisterDTO) => {
    // check if user email exists 
    const existingUser = await UserRepository.findOne({
        where: {
            email: data.email, 
            deleted: false
        }
    })
    if (!existingUser) {
        throw new AppError("User does not exist!!", 401)
    }

    const result = await compareHash(data.password, existingUser.password)
    if(!result) {
        throw new AppError("Invalid Credentials", 401)
    }

    return existingUser
}


