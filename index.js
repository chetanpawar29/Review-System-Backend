import express, { response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import User from "./model/user.js";
import router from "./routes/reviewRoute.js";

const app=express();

const PORT =6677;

app.use("/api/v1",router);

app.use(express.json())

dotenv.config();

dbConnect();





app.listen(PORT ,()=>{
    console.log(`Server run at port ${PORT}`);
})