import dotenv from "dotenv"
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";

const PORT = process.env.PORT || 3000;

connectToDB()
  .catch((err)=>{
    console.log("Mongo DB connection failed",err)
    process.exit(1)
})

app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`)
})

