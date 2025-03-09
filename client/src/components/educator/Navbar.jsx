import React from 'react'
import {dummyEducatorData} from '../../assets/assets'
import {UserButton,useUser} from '@clerk/clerk-react'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const {user} = useUser();
  const educatorData = dummyEducatorData;

  return (
    <div className='flex justify-between items-center p-4 md:px-6 border-b border-gray-500 py-3'>
      <Link to={'/'}>
      <h1 className='text-3xl font-bold hover:text-gray-600'>EduSphere</h1>
      </Link>
      <div className='flex items-center gap-4'>
        <p>Hi! {user? user.fullName : 'Developers'}</p>
        {user ? <UserButton/>:<img src={assets.profile_img} alt="Profile" className='max-w-8' />}
      </div>
    </div>
  )
}

export default Navbar