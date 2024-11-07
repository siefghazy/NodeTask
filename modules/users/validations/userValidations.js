import joi from "joi"
export const signUpSchema=joi.object({
    body:{
        Name:joi.string().max(30).min(3).required(),
        password:joi.string().max(100).min(5).required(),
        Email:joi.string().email().required()
    },
     params:{}
})
export const signinScehma=joi.object({
    body:{
        Name:joi.string().max(30).min(3),
        password:joi.string().max(100).min(5).required(),
        Email:joi.string().email().required()
    },
   params:{}
})