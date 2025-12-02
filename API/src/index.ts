import { AppDataSource } from "@config/data.source"
import express from "express"
import dotenv from "dotenv"
import AuthRoutes from "@routes/user.routes"
import { errorHandler } from "@middlewares/customErrorHandler"
import cookieParser = require("cookie-parser")


dotenv.config()
const app = express()


app.use(express.json())
app.use(cookieParser())
app.use("/api/v1/users", AuthRoutes)


app.use(errorHandler)

AppDataSource.initialize()
    .then(() => {
        console.log("✅ Database connected!");

        const PORT = process.env.PORT || 3000
        app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}...`))
    })
    .catch(err => {
        console.log("❌ Database connection error:", err);
    })
    




