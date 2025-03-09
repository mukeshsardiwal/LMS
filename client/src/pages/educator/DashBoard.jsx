import React, { useState, useContext, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/student/Loading';
import { Link } from 'react-router-dom';

const DashBoard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    try {
      // Assuming you're using dummy data here
      setDashboardData(dummyDashboardData);
    } catch (error) {
      console.error('Failed to fetch dashboard data', error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className="min-h-screen flex flex-col items-start justify-start gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0">
        <div className='space-y-5  flex flex-col gap-3 md:flex-row md:gap-4'>
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.patients_icon} alt="patients_icon" className='w-10 h-10' />
            <div>
              <p className='text-2xl font-medium text-gray-600'>{dashboardData.enrolledStudentsData.length}</p> {/* Assuming enrolledStudentsData is an array */}
              <p className='text-base text-gray-500'>Total Enrollments</p>
            </div>
          </div>
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.appointments_icon} alt="appointment_icon" className='w-10 h-10' />
            <div>
              <p className='text-2xl font-medium text-gray-600'>{dashboardData.totalCourses}</p> {/* Fixed typo */}
              <p className='text-base text-gray-500'>Total Courses</p>
            </div>
          </div>
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.earning_icon} alt="earning_icon" className='w-10 h-10' />
            <div>
              <p className='text-2xl font-medium text-gray-600'>{currency}{dashboardData.totalEarnings}</p>
              <p className='text-base text-gray-500'>Total Earnings</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-medium text-gray-600'>Latest Enrollments</h2>
          <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md big-white border border-gray-200/20'>
          <table className='overflow-hidden table-fixed md:table-auto w-full'> 
            <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
            <tr>
              <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
              <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>Student Name </th>
              <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>Course Title </th>
            </tr>
            </thead>
          <tbody className='text-sm text-gray-500'>
            {dashboardData.enrolledStudentsData.map((item, index) => (
              <tr key={index} className='border-b border-gray-500/20'>
                <td className='px-4 py-3 text-center hidden sm:table-cell'>{index + 1}</td>
                <td className='md:px-4 px-2 py-3 flex items-center space-x-x3'><img src={item.student.imageUrl} alt="Profiel" className='w-9 h-9 rounded-full' /><span className='truncate'>{item.student.name}</span></td>
                <td className='px-4 py-4 whitespace-nowrap text-center'>{item.courseTitle}</td>
              </tr>
            ))}
          </tbody>

          </table>
        </div>
        </div>
    </div>
  ) : <Loading />;
};

export default DashBoard;
