import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("MongoDB connected"));
        
        await mongoose.connect(`${process.env.MONGODB_URI}/lms`);

    } catch (error) {
        console.log("MongoDB connection failed", error);
    }
}

export default connectDB;
