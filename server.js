import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import uploadRoutes from "./Routes/uploadRoutes.js";
import path from "path";

dotenv.config();

const app = express();

// ✅ Connect MongoDB
connectDB();

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

// Routes
app.use("/", uploadRoutes);

const PORT = process.env.PORT || 1003;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
