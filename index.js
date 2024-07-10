import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./src/db/index.js";

dotenv.config({
    path: "/.env"
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