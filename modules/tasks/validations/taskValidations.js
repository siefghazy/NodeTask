import Joi from "joi";
export const addTaskSchema=Joi.object({
    body:{
        Name:Joi.string().max(30).required().min(2),
        status:Joi.string().required()
    },
    params:{}
})
export const updateTaskSchema=Joi.object({
    body:{
        Name:Joi.string().max(30).min(2),
        status:Joi.string()
    },
    params:{
        
   }
})