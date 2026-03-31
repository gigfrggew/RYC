import express from "express"
import "dotenv/config";
import cors from "cors"
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

//Initialize Express App
const app=express()

//connect database
connectDB();


//MiddleWare
app.use(cors({
  origin: ["http://localhost:5173", "https://ryc-yp71.vercel.app"],
  credentials: true
}));
app.use(express.json())

app.get('/',(req,res)=>res.send("Server is running"))
app.use('/api/user',userRouter)
app.use('/api/owner',ownerRouter)
app.use('/api/bookings',bookingRouter)

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>console.log(`Server Running on Port ${PORT}`))