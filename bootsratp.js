import { AppError } from "./utils/asyncErrorHandler.js";
import  Express  from "express";
import env from "dotenv";
import taskRouter from "./modules/tasks/Routers/taskRouters.js";
import userRouter from "./modules/users/Routers/userRouters.js";
import filterRouter from "./modules/tasks/Routers/taskRouter2.js";
env.config
export const bootstrap=(app)=>{
    app.use(Express.json())
    app.use("/task",taskRouter)
    app.use('/auth',userRouter)
    app.use('/filter',filterRouter)
    app.all('*', (req, res, next) => {
        throw new AppError('Route not found', 404)
    })
    app.use((err, req, res, next) => {
        const { message, status, stack } = err
        res.status(status || 500).json({
            message,
            ...(process.env.MODE === 'development' && { stack }),
        })
    })
    app.listen(process.env.PORT_NUMBER,()=>{console.log("server is running")})
    }