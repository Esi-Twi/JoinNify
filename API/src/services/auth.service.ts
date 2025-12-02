import { AppDataSource } from "@config/data.source"
import { User } from "@database/entity/user"
import { AppError } from "@utils/app-errror"
import { doHash } from "@utils/hashing"
import { RegisterDTO } from "types"


const UserRepository = AppDataSource.getRepository(User)


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
        email: data.email
    })

    return await UserRepository.save(newUser)
}

