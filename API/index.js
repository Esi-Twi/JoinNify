const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')


const authRouter = require('./routers/auth.route')
const userRouter = require('./routers/user.route')
const eventRouter = require('./routers/event.route')
const bookRouter = require('./routers/booking.route')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth/", authRouter)
app.use("/api/users/", userRouter)
app.use("/api/events/", eventRouter)
app.use("/api/book-ticket/", bookRouter)

const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected....."))
    .catch((error) => console.log("Error in mongoose connection"+error))
    
app.get("/", (req,res) => {
    res.send('this is the event managment app')
})



app.listen(port, () => {
    console.log(`server is listening to port ${port}....`);
})


