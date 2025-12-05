import bcrypt from "bcryptjs"

export const doHash = (password: string, salt: number) => {
    return bcrypt.hash(password, salt)
}


export const compareHash = (password: string, hashedPassword: string) => {
    return bcrypt.compare(password, hashedPassword)
}
