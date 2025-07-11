import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import urlRoutes from "./routes/urlRoutes.js";
import logger from "./middlewares/logger.js";

dotenv.config();

const app = express();

// ✅ DYNAMIC CORS SETUP
app.use(
  cors({
    origin: function (origin, callback) {
      console.log("🧪 CORS check from:", origin);
      if (!origin || origin.startsWith("http://localhost:517")) {
        callback(null, true);
      } else {
        callback(new Error("CORS Not Allowed"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use(logger);
app.use("/", urlRoutes);

export default app;
