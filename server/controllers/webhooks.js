import { Webhook } from "svix";
import User from "../models/User.js";
import { request } from "express";
import Stripe from "stripe";
import Course from "../models/Course.js";
import Purchase from "../models/Purchase.js";


// API Controller Function to Manage Clerk User with the database;
export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(
      JSON.stringify(req.body),
      {
        "svix-id": req.headers["svix-id"],
        "svix-signature": req.headers["svix-signature"],
        "svix-timestamp": req.headers["svix-timestamp"],
      }
    );

    const { data, type } = req.body;

    switch (type) {
      case 'user.created': {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        }
        await User.create(userData);
        res.status(201).json({ success: true, message: "User Created Successfully", user });
        break;
      }

      case 'user.updated': {
        const userData = {
          email: data.email_addresses[0].email_address,  // Corrected email access
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        }
        await User.findByIdAndUpdate(data.id, userData);
        res.json({ success: true, message: "User Updated Successfully" });
        break;
      }

      case 'user.deleted': {
        await User.findByIdAndDelete(data.id);
        res.json({ success: true, message: "User Deleted Successfully" });
        break;
      }

      default: {
        res.status(400).json({ success: false, message: "Unhandled Event" });  // Respond with 400 for unhandled events
        break;
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeWebhooks = async(req,res)=>
  {
  
  const sig = req.headers['stripe-signature'];

  let event;
  try{
    event = Stripe.webhooks.constructEvent(request.body,sig,process.env.STRIPE_WEBHOOK_SECRET);
  }
  catch(error)
  {
    res.status(400).send(`Webhook Error: ${error.message}`);
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;

      const session = await stripeInstance.checkout.sessions.list({payment_intent:paymentIntentId});

      const {purchaseId} = session.data[0].metadata;

      const purchaseData = await purchaseId.finById(purchaseId);

      const userData = await User.findById(purchaseData.userId);
      const courseData = await Course.findById(purchaseData.courseId.toString())

      courseData.enrolledStudents.push(userData);
      await courseData.save();

      userData.enrolledCourses.push(courseData._id);
      await userData.save();

    purchaseData.status = 'completed';
      await purchaseData.save();

      break;

    case 'payment_intent.payment_failed':{

      
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;
      
      const session = await stripeInstance.checkout.sessions.list({payment_intent:paymentIntentId});
      
      const {purchaseId} = session.data[0].metadata;
      const purchaseData = await purchaseId.findById(purchaseId);

      purchaseData.status = 'failed';
      await purchaseData.save();
      break;
      // ... handle other event types
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  response.json({received: true});

}
