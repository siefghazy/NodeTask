import mongoose from "mongoose";
import env from "dotenv";
env.config();
const con=mongoose.connect(process.env.CONNECTION_STRING).then(()=>console.log("DATABASE CONNECTED"))
export default con