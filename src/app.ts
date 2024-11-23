import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./config/database";
import authRoutes from "./routes/authRoutes";
import todoRoutes from "./routes/todoRoutes";
import { scheduleReminders } from "./utils/reminderScheduler";
import { authenticateToken } from "./middleware/authMiddleware";

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(authenticateToken);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

// Start Reminder Scheduler
scheduleReminders();

export default app;
