import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import search_icon from './search_icon.svg'
import cross_icon from './cross_icon.svg'
import upload_area from './upload_area.svg'
import sketch from './sktech.svg'
import microsoft_logo from './microsoft_logo.svg'
import walmart_logo from './walmart_logo.svg'
import accenture_logo from './accenture_logo.svg'
import adobe_logo from './adobe_logo.svg'
import paypal_logo from './paypal_logo.svg'
import course_1_thumbnail from './course_1.png'
import course_2_thumbnail from './course_2.png'
import course_3_thumbnail from './course_3.png'
import course_4_thumbnail from './course_4.png'
import star from './rating_star.svg'
import star_blank from './star_dull_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import arrow_icon from './arrow_icon.svg'
import down_arrow_icon from './down_arrow_icon.svg'
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_clock_icon from './time_clock_icon.svg'
import user_icon from './user_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import my_course_icon from './my_course_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import file_upload_icon from './file_upload_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import patients_icon from './patients_icon.svg'
import play_icon from './play_icon.svg'
import blue_tick_icon from './blue_tick_icon.svg'
import course_4 from './course_4.png'
import profile_img from './profile_img.png'
import profile_img2 from './profile_img2.png'
import profile_img3 from './profile_img3.png'
import lesson_icon from './lesson_icon.svg'
import sentilone_icon from './sentilone_icon.png'
import appsecures_icon from './appsecures_icon.jpg'
import blinkit_icon from './blinkit_icon.png'


export const assets = {
    blinkit_icon,
    appsecures_icon,
    sentilone_icon,
    logo,
    search_icon,
    sketch,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    adobe_logo,
    paypal_logo,
    course_1_thumbnail,
    course_2_thumbnail,
    course_3_thumbnail,
    course_4_thumbnail,
    star,
    star_blank,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    arrow_icon,
    dropdown_icon,
    cross_icon,
    upload_area,
    logo_dark,
    down_arrow_icon,
    time_left_clock_icon,
    time_clock_icon,
    user_icon,
    home_icon,
    add_icon,
    my_course_icon,
    person_tick_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    course_4,
    file_upload_icon,
    appointments_icon,
    earning_icon,
    patients_icon,
    profile_img,
    profile_img2,
    profile_img3,
    play_icon,
    blue_tick_icon,
    lesson_icon
}

export const dummyEducatorData = {
    "_id": "675ac1512100b91a6d9b8b24",
    "name": "GreatStack",
    "email": "user.greatstack@gmail.com",
    "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
    "createdAt": "2024-12-12T10:56:17.930Z",
    "updatedAt": "2024-12-12T10:56:17.930Z",
    "__v": 0
}

export const dummyTestimonial = [
    {
        name: 'Donald Jackman',
        role: 'SWE 1 @ Amazon',
        image: assets.profile_img_1,
        rating: 5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'Richard Nelson',
        role: 'SWE 2 @ Samsung',
        image: assets.profile_img_2,
        rating: 4,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating: 4.5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
];

export const dummyDashboardData = {
    "totalEarnings": 707.38,
    "enrolledStudentsData": [
        {
            "courseTitle": "Introduction to JavaScript",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Siya Bansal",
                "imageUrl": "data:image/jpeg;base64,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"
            }
        },
        {
            "courseTitle": "Advanced Python Programming",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Rajan Saini",
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXEiSLLaJG40PBsWaxwKnsqV_yqUMySWKi5MmPCH29NpU3va_B-iYKeCP97MYhhkNvXb4&usqp=CAU"
            }
        },
        {
            "courseTitle": "Web Development Bootcamp",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Kamal Khasa",
                "imageUrl": "https://i.pinimg.com/736x/e8/ed/ae/e8edae91d785ced705e03c52e3a1d65b.jpg"
            }
        },
        {
            "courseTitle": "Data Science with Python",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Mehak Choudhary",
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUHIs0XdoDyaZsIideYPfEYJzgsgnIzDZGA&s"
            }
        },
        {
            "courseTitle": "Cybersecurity Basics",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Mukesh Sardiwal",
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTb-Uce7XZ85mQz91_xqCVIb28vLtMaJZyg&s"
            }
        }
    ],
    "totalCourses": 8
}

export const dummyStudentEnrolled = [
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "Kamal Khasa",
            "imageUrl": "https://i.pinimg.com/736x/e8/ed/ae/e8edae91d785ced705e03c52e3a1d65b.jpg"
                },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:39:55.509Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "Manish Saini",
            "imageUrl": "https://static.vecteezy.com/system/resources/previews/050/063/865/non_2x/zebra-grazes-in-the-meadow-wild-animal-in-nature-photo.jpg"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:59:49.964Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "Kartikey Sharma",
            "imageUrl": "data:image/jpeg;base64,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"
        },
        "courseTitle": "Advanced Python Programming",
        "purchaseDate": "2024-12-20T11:03:42.931Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "Pallavi Verma",
            "imageUrl": "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?cs=srgb&dl=pexels-pixabay-326900.jpg&fm=jpg"
        },
        "courseTitle": "Web Development Bootcamp",
        "purchaseDate": "2024-12-20T11:04:48.798Z"
    }
]

export const dummyCourses = [
    {
        "_id": "605c72efb3f1c2b1f8e4e1a1",
        "courseTitle": "Introduction to JavaScript",
        "courseDescription": "<h2>Learn the Basics of JavaScript</h2><p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
        "coursePrice": 49.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Getting Started with JavaScript",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is JavaScript?",
                        "lectureDuration": 16,
                        "lectureUrl": "https://youtu.be/CBWnBi-awSA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Setting Up Your Environment",
                        "lectureDuration": 19,
                        "lectureUrl": "https://youtu.be/4l87c2aeB4I",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Variables and Data Types",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Understanding Variables",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/pZQeBJsGoDQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Data Types in JavaScript",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773e37360cb0ab974342314"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/CBWnBi-awSA/maxresdefault.jpg"
    },
    {
        "_id": "675ac1512100b91a6d9b8b24",
        "courseTitle": "Advanced Python Programming",
        "courseDescription": "<h2>Deep Dive into Python Programming</h2><p>This course is designed for those who have a basic understanding of Python and want to take their skills to the next level. You will explore advanced topics such as decorators, generators, and context managers.</p><p>By the end of this course, you will be able to write efficient and clean Python code, and understand how to leverage Python's powerful features for real-world applications.</p><ul><li>Master advanced data structures</li><li>Implement object-oriented programming concepts</li><li>Work with libraries and frameworks</li></ul>",
        "coursePrice": 79.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Advanced Data Structures",
                "chapterContent": [
                    {
                        "lectureId": " lecture1",
                        "lectureTitle": "Lists and Tuples",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Dictionaries and Sets",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Object-Oriented Programming",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Classes and Objects",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Inheritance and Polymorphism",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6776369244daad0f313d81a9"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:47:54.446Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/HdLIMoQkXFA/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ae",
        "courseTitle": "Cybersecurity Basics",
        "courseDescription": "<h2>Protect Systems and Networks</h2><p>Cybersecurity is critical in today's digital age. This course introduces the fundamentals of cybersecurity, including threat analysis, ethical hacking, and secure programming practices.</p><p>By the end of this course, you will understand how to identify vulnerabilities and implement security measures effectively.</p><ul><li>Understand security protocols</li><li>Learn about encryption techniques</li><li>Conduct basic penetration testing</li></ul>",
        "coursePrice": 69.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Cybersecurity",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Cybersecurity?",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/samplelink5",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Types of Cyber Threats",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Basic Security Practices",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Password Management",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Network Security Essentials",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-27T11:30:00.000Z",
        "updatedAt": "2024-12-31T04:14:49.773Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/jZFaMEqEqEQ/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1a7",
        "courseTitle": "Web Development Bootcamp",
        "courseDescription": "<h2>Become a Full-Stack Web Developer</h2><p>This comprehensive bootcamp covers everything you need to know to become a full-stack web developer. From HTML and CSS to JavaScript and backend technologies, this course is designed to take you from beginner to job-ready.</p><p>Throughout the course, you will work on real-world projects, build a portfolio, and gain the skills necessary to succeed in the tech industry.</p><ul><li>Learn front-end and back-end development</li><li>Build responsive and dynamic web applications</li><li>Understand databases and server-side programming</li></ul>",
        "coursePrice": 99.99,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "HTML & CSS Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to HTML",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Styling with CSS",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "JavaScript Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "JavaScript Basics",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "DOM Manipulation",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:31:27.290Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/lpx2zFkapIk/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ac",
        "courseTitle": "Cloud Computing Essentials",
        "courseDescription": "<h2>Master Cloud Fundamentals</h2><p>Learn the foundations of cloud computing and explore popular cloud platforms like AWS, Azure, and Google Cloud. This course is ideal for IT professionals and developers looking to transition to cloud-based solutions.</p><p>By the end of this course, you will understand cloud services, deployment models, and best practices for using cloud resources efficiently.</p><ul><li>Understand cloud architecture</li><li>Learn to work with AWS, Azure, and GCP</li><li>Explore serverless computing and storage solutions</li></ul>",
        "coursePrice": 69.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Cloud Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Cloud Computing?",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Cloud Service Models",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Exploring Cloud Platforms",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "AWS Basics",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Introduction to Google Cloud",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:32:55.357Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/0yboGn8errU/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ad",
        "courseTitle": "Data Science with Python",
        "courseDescription": "<h2>Start Your Data Science Journey</h2><p>Data Science is one of the most in-demand fields in the world. This course teaches you the essentials of data analysis, visualization, and machine learning using Python. Learn libraries like Pandas, NumPy, Matplotlib, and Scikit-learn.</p><p>By the end of this course, you will be equipped to work on real-world data projects and gain insights from data.</p><ul><li>Data cleaning and preprocessing</li><li>Exploratory Data Analysis (EDA)</li><li>Build predictive models</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Python for Data Science",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Python Basics",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Working with NumPy",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Data Visualization",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Introduction to Matplotlib",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink3",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Advanced Visualizations with Seaborn",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773acf160cb0ab974342248"
            }
        ],
        "createdAt": "2024-12-27T10:00:00.000Z",
        "updatedAt": "2024-12-31T09:57:48.992Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/E4znbZgUWzA/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1aa",
        "courseTitle": "Data Science and Machine Learning",
        "courseDescription": "<h2>Unlock the Power of Data</h2><p>This course provides a comprehensive introduction to data science and machine learning. You will learn how to analyze data, build predictive models, and apply machine learning algorithms to real-world problems.</p><p>By the end of this course, you will have a solid understanding of data manipulation, visualization, and machine learning techniques, enabling you to make data-driven decisions.</p><ul><li>Understand data analysis and visualization</li><li>Learn machine learning algorithms and their applications</li><li>Work with popular data science libraries like Pandas and Scikit-Learn</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 30,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Data Science",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Data Science?",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Data Collection and Cleaning",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Machine Learning Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Supervised vs Unsupervised Learning",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Building Your First Model",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:53:59.753Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/631lFJdQvoo/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ab",
        "courseTitle": "Introduction to Cybersecurity",
        "courseDescription": "<h2>Protect the Digital World</h2><p>This course covers the essentials of cybersecurity, including understanding threats, vulnerabilities, and how to secure systems against cyber-attacks. Ideal for beginners, this course will prepare you for a career in cybersecurity.</p><p>By the end of this course, you will be able to identify and mitigate risks, implement security best practices, and understand the fundamentals of encryption and network security.</p><ul><li>Understand common cybersecurity threats</li><li>Learn about encryption and secure communication</li><li>Explore tools for penetration testing</li></ul>",
        "coursePrice": 59.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Cybersecurity Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Cybersecurity",
                        "lectureDuration": 700,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Understanding Cyber Threats",
                        "lectureDuration": 750,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Network Security Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Securing Networks",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Firewalls and VPNs",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:56:13.208Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/WbV3zRgpw_E/maxresdefault.jpg"
    }
]