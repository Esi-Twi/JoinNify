const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const { Server } = require('socket.io')
const http = require('http')

const authRouter = require('./routers/auth.route')
const userRouter = require('./routers/user.route')
const eventRouter = require('./routers/event.route')
const bookRouter = require('./routers/booking.route')

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    console.log("A user connected: ", socket.id);

    socket.on("join_room", (userId) => {
        socket.join(userId)
        console.log(`User ${userId} joined room`);
    })

    socket.on("disconnect", () => {
        console.log("User disconnected: ", socket.id);
        
    })
})
app.set("io", io)

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth/", authRouter)
app.use("/api/users/", userRouter)
app.use("/api/events/", eventRouter)
app.use("/api/purchase-ticket/", bookRouter)


const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected....."))
    .catch((error) => console.log("Error in mongoose connection" + error))

app.get("/", (req, res) => {
    res.send('this is the event managment app')
})



server.listen(port, () => {
    console.log(`server is listening to port ${port}....`);
})


