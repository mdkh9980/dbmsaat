import dotenv from "dotenv";
import app from "../backend/app.js";
import connectDB from "../backend/src/db/index.js";

dotenv.config({
    path: "./backend/.env"
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
    app.on("error", (error)=>{
        console.log(`Error: ${error.message}`)
        throw error;
    })
})
.catch((error) => {
    console.log(`Mongo DB Connection Failed : `,error);
})