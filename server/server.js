import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

dotenv.config();

// Initialize the Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// Connect to MongoDB
const startServer = async () => {
    try {
        await connectDB(); // Wait for MongoDB connection before starting the server

        // Routes
        app.get('/', (req, res) => {
            res.send("Hello World");
        });

        app.post('/clerk', clerkWebhooks); // JSON parsing is already handled globally

        // PORT
        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log(`http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start the server:", error);
    }
};

// Start the server
startServer();
