import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {
    const token = req.headers.Authorization
    if (!token) {
        return res.status(401).json({ success: false, message: "Token is required" })
    } try {
        const decoded = jwt.verify(token, "321890")
        req.user = decoded
    } catch (e) {
        console.log(e.message)
        res.status(401).json({ success: false, message: "User not found" })
    }



    return next()
}