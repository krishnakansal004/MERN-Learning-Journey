import express from "express"
import { loginController, registerController, verifyEmail,getMeController } from "../controllers/auth.controller.js"
import { registerValidation,loginValidation } from "../validators/auth.validator.js"
import { authUser } from "../middlewares/auth.middleware.js"

const authRouter = express.Router()

authRouter.post("/register",registerValidation,registerController)


authRouter.post("/login",loginValidation,loginController)

authRouter.get("/verify-email",verifyEmail)

authRouter.get("/get-me",authUser,getMeController)


export default authRouter