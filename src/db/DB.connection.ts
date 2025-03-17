import mongoose from "mongoose";
import Log from "../console/color.console";

export const connectDB=async(URL:string)=>{
       await mongoose.connect(URL).then(()=>{
              Log.blue(`✅ MongoDB Connected Successfully`)
       }).catch(error=>{
              Log.red(`❌ MongoDB Connection Error: ${error}`)
       })
}