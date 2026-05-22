import userModel from "../models/model.user.js";
import { sendEmail } from "../services/mail.service.js";
import jwt from 'jsonwebtoken'


export async function registerController(req,res) {

    const {username,email,password} = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or:[{username},{email}]
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"User is already registered",
            success:false,
            err: "User Already exists"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password
    })

    await sendEmail({
        to:email,
        subject:"Welcome to Perplexity!!!",
        text:`hi ${username}\n\nWelcome!!!You are succesfully registered. We're excited to have on onboard:\n\nBest Regards,\nThe Perplexity `
    })

    res.status(201).json({
        message:"User Registered successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })





}

