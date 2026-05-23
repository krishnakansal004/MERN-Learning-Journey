import userModel from "../models/model.user.js";
import { sendEmail } from "../services/mail.service.js";
import jwt from "jsonwebtoken";

export async function registerController(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User is already registered",
      success: false,
      err: "User Already exists",
    });
  }

  const user = await userModel.create({
    username,
    email,
    password,
  });

  const emailVerificationToken = jwt.sign(
    {
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  await sendEmail({
    to: email,
    subject: "Welcome to Perplexity!",
    html: `
                <p>Hi ${username},</p>
                <p>Thank you for registering at <strong>Perplexity</strong>. We're excited to have you on board!</p>
                <p>Please verify your email address by clicking the link below:</p>
                <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}">Verify Email</a>
                <p>If you did not create an account, please ignore this email.</p>
                <p>Best regards,<br>The Perplexity Team</p>
        `,
  });

  res.status(201).json({
    message: "User Registered successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

export async function verifyEmail(req, res) {
  const { token } = req.query;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({ email: decoded.email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Token",
        success: false,
        err: "User not found",
      });
    }

    user.verified = true;

    await user.save();

    const html = `
        <h1>Email Verified Successfully</h1>
        <p>You can now login into your account.</p>
        <a href="http://localhost:3000/login">Go to Login </a>
        `;
    return res.send(html);
  } catch (err) {
    return res.status(400).json({
      message: "Invalid or expired token",
      success: false,
      err: err.message,
    });
  }
}

export async function loginController(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res.status(404).json({
      message: "User not Registered",
      success: false,
      err: "User not found",
    });
  }
  const isPasswordMatch = await user.comparePassword(password)

  if(!isPasswordMatch){
    return res.status(400).json({
        message:"Invalid Credentials",
        success:false,
        err:"Incorrect Password"
    })
  }
  if(!user.verified){
    return res.status(400).json({
        message:"Please Verify your email before Login",
        success:false,
        err:"Email not verified"
    })
  }
  const token = jwt.sign({
    id:user._id,
    username:user.username,
    email:user.email
  },process.env.JWT_SECRET)

  res.cookie("token",token)

  return res.status(200).json({
    message:"User logged in successfully",
    success:true,
    user:{
        user:user._id,
        email:user.email,
        username:user.username
    }
  })
}

export async function getMeController(req,res) {
    const userId = req.user.id;

    const user = await userModel.findById(userId)

    if(!user){
        return res.status(404).json({
            message:"User not found",
            success:false,
            err:"User not found"
        })
    }
    res.status(200).json({
        message:"User details fetched successfully",
        success:true,
        user
    })

}