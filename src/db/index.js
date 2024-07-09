import mongoose, { connect } from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${connection.connection.host}`)
    } catch(error) {
        console.log("Error while Connecting to Database : ", error.message);
        process.exit(1);
    }
}

export default connectDB