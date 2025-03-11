import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";
import educatorRouter from "./routes/educatorRoutes.js";
import { clerkMiddleware } from "@clerk/express";
import {connectCloudinary} from "./configs/cloudinary.js";
import courseRouter from "./routes/courseRoute.js";
import userRouter from "./routes/userRoute.js";
import { stripeWebhooks } from "./controllers/webhooks.js";

dotenv.config();

// Initialize the Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON bodies
app.use(clerkMiddleware());

// Connect to MongoDB
await connectDB();
await connectCloudinary();

// Routes
app.get("/", (req, res) => {res.send("EduSphere Home Page");});
app.post("/clerk",express.json(),clerkWebhooks); // JSON parsing is already handled globally
app.use('/api/educator',express.json(),educatorRouter);
app.use('/api/course',express.json(),courseRouter);
app.use('/api/user',express.json(),userRouter);
app.post('/stripe',express.raw({type:'application/json'}),stripeWebhooks);

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
