import React from 'react'
import ProfilePic from '../assets/profile.png'
import { HiOutlineDotsVertical } from 'react-icons/hi'

const PhotoCard = ({userData,btnId}) => {
  return (
    <div style={{backgroundColor:btnId}} className={`relative xl:w-[16vw] md:w-[20vw] h-[277px] rounded-[50px] shadow-[0px_6px_20px_rgba(188,188,188,0.25)] text-center`}>
        <div className='absolute top-[30px] right-[20px] text-[#8697B4] text-[24px]'>
            <HiOutlineDotsVertical/>
        </div>
        <div className='w-[105px] h-[105px] bg-[#BED3F4] rounded-full mt-[29px] m-auto flex items-end justify-center overflow-hidden'>
            <img src={ProfilePic} alt="Profile Pic" className='w-[66px]' />
        </div>
        <p className='text-[17px] font-[600] mt-[22px]'>{userData?.name}</p>
        <button className='text-[10px] text-[#196C6C] w-[105px] bg-[#CEFFFF] h-[25px] rounded-[16px] mt-[6px]'>{userData?.username}</button>
        <p className='text-[13px] text-[#8697B4] mt-[19px]'>{userData?.email}</p>
    </div>
  )
}

export default PhotoCard