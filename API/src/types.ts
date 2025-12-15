import { EventCategories, UserRoles } from "@database/enum"


export interface RegisterDTO {
    name: string, 
    email: string, 
    password:string, 
    role: UserRoles
}

export interface LoginDTO {
    email: string,
    password: string
}

export interface UserProps {
    id: string, 
    name: string, 
    email: string,
    role: string, 
}

export interface JWTPayload {
    id: string, 
    name: string, 
    email: string, 
    role: UserRoles
}

export interface UpdateProfileDTO {
    name: string, 
    phone_number: string, 
    location: string, 
    email: string
}

export interface CreateEventDTO {
    title: string,
    location: string,
    capacity: number,
    price: number,
    start_date: Date,
    end_date: Date, 
    category: EventCategories,
    // images: string[]
}


