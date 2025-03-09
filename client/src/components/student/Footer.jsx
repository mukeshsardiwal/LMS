import React from 'react'
import { useNavigate } from 'react-router-dom'  // Import useNavigate hook

const Footer = () => {
  const navigate = useNavigate()  // Initialize navigate function

  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-start gap-10 py-10 border-b border-white/30'>
        {/* EduSphere Column */}
        <div className='flex flex-col w-full md:w-1/3'>
          <h1 
            onClick={() => { navigate('/') }}  // Use navigate to redirect to homepage
            >
              <span className='cursor-pointer hover:scale-110 text-white font-bold text-4xl'>

            EduSphere
              </span>
          </h1>
          <p className='mt-6 text-left text-sm text-white/80'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, ab incidunt! Sunt minima animi modi. Dolores provident facilis optio? Mollitia asperiores tenetur eius atque illum quasi laborum delectus maxime minima?
          </p>
        </div>

        {/* Company Column */}
        <div className='flex flex-col w-full md:w-1/3'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex flex-col space-y-2 text-sm hover: text-white/80'>
            <li className='hover:text-white' ><a href="#" >Home</a></li>
            <li className='hover:text-white'><a href="#" >About us</a></li>
            <li className='hover:text-white'><a href="#" >Contact us</a></li>
            <li className='hover:text-white'><a href="#" >Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className='hidden md:flex flex-col w-full md:w-1/3'>
          <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
          <p className='text-sm text-white/80'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='flex items-center gap-2 pt-4'>
            <input
              type="email"
              placeholder='Enter your email'
              className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'
            />
            <button className='bg-blue-600 w-24 h-9 rounded text-white'>Subscribe</button>
          </div>
        </div>
      </div>

      <p className='py-4 text-center text-xs md:text-sm text-white/60'>
        Copyright 2025 © EduSphere. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
