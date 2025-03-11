import { clerkClient } from "@clerk/express";
import Course from "../models/Course.js";
import cloudinary from "../configs/cloudinary.js";
import Purchase from "../models/Purchase.js";

// Update Role To Educator
export const updateRoleToEducator = async (req, res) => {
  try {
    const userId = req.auth.userId;

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: "educator",
      },
    });
    res.json({
      success: true,
      message: "You have been updated to educator role",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
    console.log(error);
  }
};

// Add New Course
export const addCourse = async (req,res)=>
{
    try{
        const {courseData} = req.body
        const imageFile = req.file;
        const educatorId = req.auth.userId;

        if(!imageFile)
        {
            return res.json({success:false,message:"Course Thumbnail is required"});
        }

        const parsedCourseData = await JSON.parse(courseData);
        parsedCourseData.educator = educatorId
        await Course.create(parsedCourseData);

        const newCourse = await Course.create(parsedCourseData);
        const imageUpload = await cloudinary.uploader.upload(imageFile.path)
        newCourse.courseThumbnail = imageUpload.secure_url
        await newCourse.save();

        res.json({success:true,message:"Course Added Successfully",course:newCourse});
    }
    catch(error)
    {
        res.status(500).json({success:false,message:"Internal Server Error"});
        console.log(error);
    }
}

// Get All Educator Courses
export const getEducatorCourses = async(req,res)=>
{
    try {
        const educator = req.auth.userId;
        const courses = await Course.find({educator})
        res.json({success:true,courses})
        
    } catch (error) {
        res.json({success:false,message:"Internal Server Error"});
        console.log(error);
    }
}

// Get Educator Dashboard Data (Total Earning, Enrolled Students, No. of Courses)
export const educatorDashboardData = async (req,res)=>
{
  try
  {
   const educator = req.auth.userId;
   const courses = await Course.find({educator}); 
   const totalCourses = courses.length;

   const courseIds = courses.map(course=>course._id);

  //  Calculate total Earnings from Purachase
  const purchases = await Purchase.find({courseId:{$in:courseIds},status:"completed"});

  const totalEarnings = purchases.reduce((sum,purchase)=>sum+purchase.amount,0);

  // Collect unique enrolled student ID's for their course titles
  const enrolledStudentsData = [];
  for(const course of courses)
  {
    const students = await User.find({
      _id:{$in:course.enrolledStudents}
    },'name imageUrl');
  
    students.forEach(student=>{
      enrolledStudentsData.push({
        courseTitle:course.courseTitle,
        student
      })
    })
  }

  res.json({success:true,dashboardData:{totalEarnings,enrolledStudentsData,totalCourses}});

  } catch (error) {
    res.json({success:false,message:"Internal Server Error"});
    console.log(error);
  }
}

// Get Enrolled Students Data with Purchase Data
export const getEnrolledStudentsData = async (req,res)=>
{
  try {
    const educator = req.auth.userId;
    const courses = await Course.find({educator}); 
    const courseIds = courses.map(course=>course._id);

    const puchases = await Purchase.find({
      courseId:{$in:courseIds},
      status:'completed'
    }).populate('userId','name imageUrl').populate('courseId',courseTitle)

    const enrolledStudents = purchases.map(purchase=>({
      student:purchase.userId,
      courseTitle:purchase.courseId.courseTitle,
      purchaseDate:purchase.createdAt
    }))

    res.json({success:true,enrolledStudents});
  } catch (error) {
    res.json({success:false,message:"Internal Server Error"});
    console.log(error); 
  }
}
