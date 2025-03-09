import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./configs/mongodb.js";
import {clerkWebhooks} from "./controllers/webhooks.js";
// Initialize the Express
const app = express();
dotenv.config();

// Middleware
app.use(cors());

// Connect to MongoDB
await connectDB();

// Routes
app.get('/',(req,res)=>{res.send("Hello World");})
app.post('/clerk',express.json(),clerkWebhooks);
// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>
{
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})
