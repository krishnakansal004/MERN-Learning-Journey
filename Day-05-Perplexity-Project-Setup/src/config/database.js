import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
async function connectToDB() {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected To DB")
}

export default connectToDB