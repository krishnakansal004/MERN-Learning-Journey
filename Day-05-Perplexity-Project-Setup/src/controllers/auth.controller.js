import userModel from "../models/model.user.js";

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



}

