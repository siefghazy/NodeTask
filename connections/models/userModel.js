import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    password:{
        type:String,
       required:true
    }
},{timestamps:true})
export const userModel= mongoose.model('user',userSchema)