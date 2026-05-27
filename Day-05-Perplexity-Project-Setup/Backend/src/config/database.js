import mongoose from "mongoose";

async function connectToDB() {
  await mongoose.connect(process.env.MONGO_URI, {
    family: 4,
  });
  console.log("Connected To DB");
}

export default connectToDB;
