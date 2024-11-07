import { Router } from "express";
import { validate } from "../../../middleware/validateMiddleware.js";
import { signinScehma,signUpSchema } from "../validations/userValidations.js";
import * as user from'../Controllers/userControllers.js'

const userRouter=Router()
userRouter.post('/signUp',validate(signUpSchema),user.signUp)
userRouter.get('/signIn',validate(signinScehma),user.signIn)
export default userRouter