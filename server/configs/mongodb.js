import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
// Connect to MongoDB
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("MongoDB connected"));
        
        await mongoose.connect('mongodb+srv://mukesh:mukesh@cluster0.zbi0r.mongodb.net/lms',{
        });

    } catch (error) {
        console.log("MongoDB connection failed", error);
    }
}

export default connectDB;
