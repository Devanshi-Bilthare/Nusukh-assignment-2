import React, { useState } from 'react'
import {  IoChevronDown, IoNotificationsOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../features/user/UserSlice'

const NavBar = () => {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const [active,setActive] = useState(false)

    const handleLogout = () => {
        dispatch(logoutUser())
    }
  return (
    <div className='w-full h-[93px] border-b border-[#C5CECE] font-[600] flex items-center justify-between'>
        <h1 className='text-[13px] sm:text-[28px]'>Photo Management</h1>
        <div className='relative flex items-center sm:gap-[35px] gap-2'>
            <IoNotificationsOutline className='sm:text-[24px] text-[15px]' />
            <div className='sm:text-[15px] text-[12px] flex items-center sm:gap-[10px] lowercase'> <span>{user?.email.split('@')[0]}</span> <IoChevronDown onClick={() => setActive(!active)} /></div>

            {active && <button className='absolute right-0 top-6 shadow-xl px-4 py-2 bg-white font-[400]' onClick={handleLogout}>Logout</button>}
        </div>
    </div>
  )
}

export default NavBar