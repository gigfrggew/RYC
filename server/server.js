import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

const app = express();

// DB
connectDB();

// Middleware
app.use(cors()); // ✅ TEMP FIX
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Server is running"));

app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/bookings", bookingRouter);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Server Error");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));