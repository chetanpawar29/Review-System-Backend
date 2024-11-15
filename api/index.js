import express, { response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnect from "../config/database.js";
import User from "../model/user.js";
import router from "../routes/reviewRoute.js";

const app=express();

const PORT =6677 || process.env.PORT;

app.use(express.json());

app.use("/api/v1",router);



app.get("/", (req, res)=>{
  res.json({
    success: true,
    message: "Server Running Successfully"
  })
})

dotenv.config();

dbConnect();




app.listen(PORT ,()=>{
    console.log(`Server run at port ${PORT}`);
})
