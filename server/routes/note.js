import express from "express"
import middleware from '../middleware/middleware.js'
import Note from "../models/Note.js"

const noteRouter = express.Router()

noteRouter.post("/add", middleware, async (req, res) => {
    try {
        const { title, description } = req.body
        const newNote = new Note({ title, description, userId: req.user.id })
        await newNote.save()
        return res.status(201).json({ success: true, message: "Note Created Successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Note Error in creating Note, Please try again later" })
    }
})

export default noteRouter