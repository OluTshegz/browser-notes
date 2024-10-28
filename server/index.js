import express from "express"
import cors from "cors"
import connectMongoDB from "./db/connectMongoDB.js"

import authRouter from "./routes/auth.js"
import noteRouter from "./routes/note.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/note", noteRouter)

app.listen(5000, () => {
    connectMongoDB()
    console.log("Server is running..")
})