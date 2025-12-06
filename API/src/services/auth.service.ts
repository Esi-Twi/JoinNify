import { AppDataSource } from "@config/data.source"
import { Users } from "@database/entity/users"
import { AppError } from "@utils/app-errror"
import { genereateVerificationToken } from "@utils/generateToken"
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

    //generate verification token 
    const verificationToken = genereateVerificationToken()

    //create new user
    const newUser = UserRepository.create({
        name: data.name, 
        password: hashedPassword, 
        email: data.email, 
        role: data.role, 
        verification_token: verificationToken, 
        verification_token_expiry: new Date(Date.now() + 60 * 60 * 1000) //1 hour
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

    if(!existingUser.is_verified) {
        throw new AppError("Email is not verified. Please verify your email to login.", 401)
    }

    const result = await compareHash(data.password, existingUser.password)
    if(!result) {
        throw new AppError("Invalid Credentials", 401)
    }

    return existingUser
}


export const verifyEmail = async(id: number, token: number) => {
    const existingUser = await UserRepository.findOne({
        where: {
            id, 
            deleted: false
        }
    })
    if(!existingUser) {
        throw new AppError("User does not exist!!", 401)
    }

    if(existingUser.is_verified) {
        throw new AppError("User is already verified", 400)
    }

    if(existingUser.verification_token !== token) {
        throw new AppError("Invalid verification token", 400)
    }

    if(existingUser.verification_token_expiry && existingUser.verification_token_expiry < new Date()) {
        throw new AppError("Verification token has expired", 400)
    }

    existingUser.is_verified = true
    existingUser.verification_token = null
    existingUser.verification_token_expiry = null

    return await UserRepository.save(existingUser)

}
