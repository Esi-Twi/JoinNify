import { AppDataSource } from "@config/data.source"
import { Users } from "@database/entity/users"
import { UpdateProfileDTO } from "types"

const UserRepository = AppDataSource.getRepository(Users)


export const updateProfile = (data: UpdateProfileDTO) => {
    const existingUser = await UserRepository.findOne({
        where: {
            email: data.email, 
            deleted: false
        }
    })

    //check if user exists
    // update userInfo
}