import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routes/user.js"
dotenv.config()

let MONGO=process.env.MONGO
mongoose.connect(MONGO).then(()=>{
    console.log("Connected to Mongodb");
    
}).catch((err)=>{
    console.log(err);
    
})
const app=express()
app.listen(3000,()=>{
    console.log("Server is started on port 3000");
})

app.use("/api/user",userRouter)
    
 
