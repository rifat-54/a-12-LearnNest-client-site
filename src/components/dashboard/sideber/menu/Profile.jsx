import React from 'react';
import UseAuth from '../../../../hook/UseAuth';
import useRole from '../../../../hook/useRole';

const Profile = () => {
    const {user}=UseAuth()
    const[role,isLoading]=useRole()
    return (
        <div className='flex justify-center items-center h-screen'>
          
          <div className='bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5'>
            {/* <img
              alt='cover photo'
              src={coverImg}
              className='w-full mb-4 rounded-t-lg h-56'
            /> */}
            <div className='flex flex-col items-center justify-center p-4 -mt-16'>
              <a href='#' className='relative block'>
                <img
                  alt='profile'
                  src={user.photoURL}
                  className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                />
              </a>
    
              <p className='p-2 px-4 text-xs  bg-[#6DC5D1] text-white rounded-full'>
                {role} 
              </p>
              <p className='mt-2 text-xl font-medium text-gray-800 '>
                {/* User Id: {user.uid} */}
                user id: 110123
              </p>
              <div className='w-full p-2 mt-4 rounded-lg'>
                <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                  <p className='flex flex-col'>
                    Name
                    <span className='font-bold text-black '>
                      {user?.displayName}
                    </span>
                  </p>
                  <p className='flex flex-col'>
                    Email
                    <span className='font-bold text-black '>{user?.email}</span>
                  </p>
    
                  <div>
                    <button className='bg-[#6DC5D1] text-white px-10 py-1 rounded-lg  cursor-pointer hover:bg-lime-800 block mb-1'>
                      Update Profile
                    </button>
                    <button className='bg-[#6DC5D1] text-white px-7 py-1 rounded-lg  cursor-pointer hover:bg-lime-800'>
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
};

export default Profile;