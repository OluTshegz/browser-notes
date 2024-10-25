import express from "express"
import User from "../models/User.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

authRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ success: false, message: "User Account does not exist" })
        }
        const checkedPassword = await bcrypt.compare(password, user.password)
        if (!checkedPassword) {
            return res.status(401).json({ success: false, message: "Wrong/Invalid password: User Account access unauthorized" })
        }
        const token = jwt.sign({ id: user._id }, "secretkeyofbrowsernotes@*123#", { expiresIn: "6h" })
        return res.status(200).json({ success: true, token, user: { name: user.name }, message: "User Account Login Successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Login Auth Error in logging User Account" })
    }
})

export default authRouter