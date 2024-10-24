import express from "express"
import User from "../models/User.js"
import bcrypt from "bcryptjs"

const authRouter = express.Router()

authRouter.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
            return res.status(401).json({ success: false, message: "User Account already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ name, email, password: hashedPassword})
        await newUser.save()
        return res.status(201).json({ success: true, message: "User Account Created Successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Register Auth Error in creating User Account" })
    }
})

export default authRouter