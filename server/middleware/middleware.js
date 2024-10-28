import jwt from "jsonwebtoken"
import User from "../models/User.js"

const middleware = async (req, res, next) =>  {
    try {
        const token = req.headers.authorization.split(" ")[1]
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized Access: Token not found" })
        }
        const decoded = jwt.verify(token, "secretkeyofbrowsernotes@*123#")
        if (!decoded) {
            return res.status(401).json({ success: false, message: "Unauthorized Access: Token not verified" })
        }
        const user = await User.findById({ _id: decoded.id })
        if (!user) {
            return res.status(404).json({ success: false, message: "User Account does not exist" })
        }
        const newUser = { name: user.name, id: user._id }
        req.user = newUser
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Middleware Error in verifying User Account, Kindly Re-login" })
    }
}

export default middleware