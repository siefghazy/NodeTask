import mongoose from "mongoose";
const taskSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["completed","not completed"],
        required:true
    }
},{timestamps:true})
export const taskModel= mongoose.model('Task',taskSchema)