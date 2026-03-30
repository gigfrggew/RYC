import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
    let token = req.headers.authorization; // initially contains "Bearer <token>"


    // ❌ check if token exists
    if (!token || !token.startsWith("Bearer ")) {
        return res.json({ success: false, message: "not authorised" });
    }

    try {
        //  extract actual token
        token = token.split(" ")[1];  
        //  verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const userId = decoded.userId;

        if (!userId) {
            return res.json({ success: false, message: "not authorised" });
        }

        // ✅ fetch user
        req.user = await User.findById(userId).select("-password");

        next();

    } catch (error) {
        return res.json({ success: false, message: "not authorised" });
    }
};