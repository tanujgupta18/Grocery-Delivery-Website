import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";

import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Config dotenv
dotenv.config({ quiet: true });

// Database Connection
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Allowed Multiple Origins
const allowedOrigins = ["http://localhost:5173"];

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
