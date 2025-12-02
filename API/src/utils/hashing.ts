import bcrypt from "bcryptjs"

export const doHash = (password: string, salt: number) => {
    return bcrypt.hash(password, salt)
}