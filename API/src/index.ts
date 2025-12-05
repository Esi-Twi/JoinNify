import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import helmet from "helmet"
import { Server } from "socket.io"
import http from "http"

import { AppDataSource } from "@config/data.source"
import AuthRoutes from "@routes/auth.routes"
import UserRoutes from "@routes/user.routes"
import { errorHandler } from "@middlewares/customErrorHandler"
import { loggerMiddleware } from "@middlewares/apiLogger"


dotenv.config()
const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

app.use(express.json())
app.use(cookieParser())
app.use(helmet())

app.use(loggerMiddleware)
app.use("/api/v1/auth", AuthRoutes)
app.use("/api/v1/users", UserRoutes)


app.use(errorHandler)

const onlineUsers = new Map<string, string>();

io.on("connection", (socket) => {
    console.log("User connected: ", socket.id)

    // Client sends userId when connecting
    socket.on("register", (userId: string) => {
        onlineUsers.set(userId, socket.id)
        console.log("Registerd: ", userId);
    })

    socket.on("disconnect", () => {
        console.log("User disconnected: ", socket.id);

        // Remove user by socket id
        for (const [userId, sId] of onlineUsers.entries()) {
            if (sId === socket.id) onlineUsers.delete(userId)
        }
    })
})

AppDataSource.initialize()
    .then(() => {
        console.log("✅ Database connected!");

        const PORT = process.env.PORT || 3000
        app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}...`))
    })
    .catch(err => {
        console.log("❌ Database connection error:", err);
    })
    




