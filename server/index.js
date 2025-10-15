import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import chats from "./data/data.js";
// const colors = require('colors')
import colors from 'colors'
import userRouter from './routes/userRoute.js'
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.ORIGIN || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));


app.use('/api/user',userRouter)

app.use(notFound)
app.use(errorHandler)


const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`.red.bold.underline);
});

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB".blue.bold.underline);
})
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});