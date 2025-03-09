import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {

  const { isEducator } = useContext(AppContext);

  const menuItems = [
    { name: 'Dashboard', icon: assets.home_icon, path: '/educator' },  // Removed trailing slash
    { name: 'Add Course', icon: assets.add_icon, path: '/educator/add-course' },
    { name: 'My Courses', icon: assets.my_course_icon, path: '/educator/my-courses' },
    { name: 'Student Enrolled', icon: assets.person_tick_icon, path: '/educator/student-enrolled' }
  ]

  return isEducator && (
    <div className='md:w-64 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col'>
      {
        menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={item.name}
            end={item.path === '/educator'}  // Match exactly for the root path
            className={({ isActive }) => `flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-10 gap-3 border-r-[6px] 
              ${isActive ? 'bg-i ndigo-50 border-indigo-500/90' : 'hover:bg-gray-100/90 hover:border-gray-100/90'}`}
          >
            <img src={item.icon} alt="" className='w-6 h-6' />
            <p className='md:block hidden text-center'>{item.name}</p>
          </NavLink>
        ))
      }
    </div>
  )
}

export default Sidebar
