import React from 'react'
import SideBar from '../Components/SideBar'
import PhotoSection from '../Components/PhotoSection'

const AdminPage = () => {
  return (
    <div className='w-full min-h-screen bg-[#196C6C] sm:p-[24px] p-[10px] flex'>
        <SideBar/>
        <PhotoSection/>
    </div>
  )
}

export default AdminPage