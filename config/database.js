import mongoose from "mongoose";

const dbConnect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MONGODB Connected Successfully!!");
    }catch(error)
    {
        console.log("MONGODB Connection Failed!!",error);
    }
}

export default dbConnect;