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

// noteRouter.get("/", async (req, res) => {
noteRouter.get("/", middleware, async (req, res) => {
    try {
        // const notes = await Note.find()
        const notes = await Note.find({ userId: req.user.id })
        return res.status(200).json({ success: true, notes })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Note Error in fetching Notes, Please try again later" })
    }
})

noteRouter.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const updateNote = await Note.findByIdAndUpdate(id, req.body)
        return res.status(200).json({ success: true, updateNote })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Note Error in updating Notes, Please try again later" })
    }
})

noteRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteNote = await Note.findByIdAndDelete(id)
        return res.status(200).json({ success: true, deleteNote })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Note Error in deleting Notes, Please try again later" })
    }
})

export default noteRouter