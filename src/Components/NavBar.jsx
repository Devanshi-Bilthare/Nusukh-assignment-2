import React from 'react'
import {  IoChevronDown, IoNotificationsOutline } from 'react-icons/io5'

const NavBar = () => {
  return (
    <div className='w-full h-[93px] border-b border-[#C5CECE] font-[600] flex items-center justify-between'>
        <h1 className='text-[13px] sm:text-[28px]'>Photo Management</h1>
        <div className='flex items-center sm:gap-[35px] gap-2'>
            <IoNotificationsOutline className='sm:text-[24px] text-[15px]' />
            <div className='sm:text-[15px] text-[12px] flex items-center sm:gap-[10px]'> <span>Nirav Parmar</span> <IoChevronDown/></div>

        </div>
    </div>
  )
}

export default NavBar