import { AppError, catchAsyncError } from "../../../utils/asyncErrorHandler.js";
import { taskModel } from "../../../connections/models/taskModel.js";
export const getAllTasks=catchAsyncError(async(req,res,next)=>{
    const Tasks= await taskModel.find()
    res.status(200).json({Tasks})
})
export const getOneTask=catchAsyncError(async(req,res,next)=>{
    const{id}=req.params
    const task=await taskModel.findById({_id:id})
    res.status(200).json({task})
})
export const createTask=catchAsyncError(async(req,res,next)=>{
    const {Name,status}=req.body
    await taskModel.create({Name,status})
    res.status(200).json({message:"Task Add Successfully"})
})
export const updateTask=catchAsyncError(async(req,res,next)=>{
    const{id}=req.params
    await taskModel.findByIdAndUpdate({_id:id},req.body)
    res.status(200).json({message:"task updated successfully"})
})
export const deleteTask=catchAsyncError(async(req,res,next)=>{
    const{id}=req.params
    await taskModel.findByIdAndDelete({_id:id})
    res.status(200).json({message:"task deleted successfully"})
})
export const filterTask=catchAsyncError(async(req,res,next)=>{
    const{status}=req.body
    if(status=="completed"){
        const data=await taskModel.find().where({status:"completed"})
        res.status(200).json({data})
    }
    else if(status=="not completed"){ const data=await taskModel.find().where({status:"not completed"})
    res.status(200).json({data})}
throw new AppError('no error',400)
})
