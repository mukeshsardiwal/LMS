import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {

  const {navigate,isEducator} = useContext(AppContext);
  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-3 sm:px-10 md:lg:px-14 border-b border-gray-500 p-1 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      
       <h1  onClick={()=>navigate('/')} className=" font-bold pt-2 text-2xl w-19 h-12 lg:2-32 hover:text-gray-600  scale-110 cursor-pointer ">EduSphere</h1>
      

      {/* Desktop View */}
      <div className="hidden md:flex items-center gap-5 text-gray-500 ">
        <div className=" flex items-center gap-5">
          {user && (
            <>
              <button onClick={()=>navigate('/educator')} className=" hover:text-blue-600  hover:scale-95">
                {isEducator ?'Educator Dashboard':'Become Educator'}
              </button>              |
              <Link to="/my-enrollments">
                {" "}
                <span className=" hover:text-blue-600">
                  My Enrollments
                </span>{" "}
              </Link>
            </>
          )}
        </div>

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-sx">
          {user && (
            <>
              <button onClick={()=>navigate('/educator')} className=" hover:text-blue-600  hover:scale-95">
                {isEducator ?'Educator Dashboard':'Become Educator'}
              </button>
              |
              <Link to="/my-enrollments">
                <span className=" hover:text-blue-600  transition-all duration-200">
                  My Enrollments
                </span>
              </Link>
            </>
          )}
        </div>
        {
          user ? <UserButton/> :
        <button onClick={()=>openSignIn()}>
          <img
            src={assets.user_icon}
            className="h-4 ml-2"
            alt="User Profile Icon"
            />
        </button>
          }
      </div>
    </div>
  );
};

export default Navbar;
