import { userModel } from "../../../connections/models/userModel.js";
import { catchAsyncError,AppError } from "../../../utils/asyncErrorHandler.js";
import bcryptjs from 'bcryptjs'
import env from 'dotenv'
import  jwt  from "jsonwebtoken";
env.config()
export  const signUp=catchAsyncError(async(req,res,next)=>{
    const {Email,Name,password}=req.body
    const test=await userModel.findOne({Email})
    if(test){
        throw new AppError('email already exist',400)
    }
    const hashedPassword=bcryptjs.hashSync(password,parseInt(process.env.SALT_NUMBER))
    await userModel.create({Email,Name,password:hashedPassword})
    res.status(200).json({message:"user added"})
})
export const signIn=catchAsyncError(async(req,res,next)=>{
    const {Email,password}=req.body
    const data = await userModel.findOne({Email})
    if(data&&bcryptjs.compareSync(password,data.password)){
        const{_id}=data
        const token=jwt.sign({_id},process.env.SECRET_KEY)
        res.status(200).json({message:"login successfully",token})
    }
    throw new AppError("wrong credentials",400)
})