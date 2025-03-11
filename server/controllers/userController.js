import User from "../models/User.js";
import Course from "../models/Course.js";
import Purchase from "../models/Purchase.js";
import Stripe from "stripe";

// Get User Data
export const getUserData = async (req, res) => {
    try {
        const userId = req.auth.userId;  // Assuming req.auth contains userId
        const user = await User.findById(userId);

        if (!user) {
            console.log("User not found");
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, user });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

// User Enrolled Courses With Lecture Links
export const userEnrolledCourses = async (req, res) => {
    try {
        const userID = req.auth.userId;  // Assuming req.auth contains userId
        const userData = await User.findById(userID).populate("enrolledCourses");

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, enrolledCourses: userData.enrolledCourses });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

// Purchase Course

export const purchaseCourse = async(req,res)=>
    {
        try{
            const {courseId} = req.body;
            const {origin} = req.headers;
    
            const userId = req.auth.userId;
            const userData = await User.findById(userId);
            const courseData = await Course.findById(courseId);
    
            if(!courseData)
                {
                    return res.json({success:false,message:"Course not found"});
                }
                if(!userData)
                {
                    return res.json({success:false,message:"User not found"});
                }
            const purchaseData = {
                courseId:courseData._id,
                userId,
                amount:(courseData.coursePrice - courseData.discount* courseData.coursePrice / 100).toFixed(2),
            }
    
            const newPurchase = await Purchase.create(purchaseData);
    
            // Stripe Gateway Initialize
    
            const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
            const currency = process.env.CURRENCY.toLowerCase();

            // Creating line items to for Stripe
            const line_items = [{
                price_data:{
                    currency,
                    product_data:{
                        name:courseData.courseTitle
                    },
                    unit_amount: Math.floor(newPurchase.amount)*100
                },
                quantity:1
            }]

            const session = await stripeInstance.checkout.sessions.create ({
                success_url:`${origin}/loading/my-enrollments`,
                cancel_url:`${origin}/`,
                line_items:line_items,
                mode:'payment',
                metadata:{
                    purchaseId:newPurchase._id.toString()
                },  
            })

            res.json({success:true,session_url:session.url});
            
        }
        catch(error)
        {
            res.json({success:false,message:"Internal Server Error"});
            console.log(error);
        }
    }
    