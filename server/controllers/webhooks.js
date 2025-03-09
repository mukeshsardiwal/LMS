import { Webhook } from "svix";
import User from "../models/User.js";

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
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };
        const user = await User.create(userData);
        res.status(201).json({ success: true, message: "User Created Successfully", user });
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,  // Corrected email access
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        res.json({ success: true, message: "User Updated Successfully" });
        break;
      }

      case "user.deleted": {
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
