export const catchAsyncError=(fn)=>{
    return(req,res,next)=>{
        fn(req,res,next).catch((error)=>{next(error)})
    }
}
export class AppError extends Error{
    constructor(message,status){
        super(message)
        this.status=status
    }
}