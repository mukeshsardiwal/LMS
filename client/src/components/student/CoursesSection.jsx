import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';

const CoursesSection = () => {

  const {allCourses} = useContext(AppContext);

  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Discover our top-rated courses across various categories. From coding and design to business <br />and wellness, our courses are crafted to deliver rsults.</p>
      
      <div className='grid sm:grid-cols-auto px-4 md:px-0 md:grid-cols-4 my-16 gap-4'>
        {allCourses.slice(0,4).map((course,index)=><CourseCard key={index} course={course} />)}
      </div>

      <button className=' mt-2 text-gray-500 border hover:scale-105 border-gray-500/30 px-10 py-3 eounded'><Link  to={'/course-list'} onClick={()=>scrollTo(0,0)}>Show all courses</Link></button>
    </div>
  )
}

export default CoursesSection