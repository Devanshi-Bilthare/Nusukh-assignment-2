import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa';

const SideBar = () => {
    const [active,setActive] = useState('Photos')
      const navItems = ['My Info.', 'Blogs', 'General Info.', 'Team', 'Photos'];

  return (
    <div className='w-[250px] h-full text-[15px] font-[600] hidden md:block'>
        <div className='border-b border-[#65BEBE] mt-[93px] mr-[25px] mb-[30px]'></div>

        <div className='bg-white'>
        {
            navItems.map(item => {
                return (
                <div key={item}>
                             <div className={`w-full h-[13px] ${active == item ? 'rounded-br-[100px]' : '' } bg-[#196C6C]`}></div>
         <div className='bg-[#196C6C]'>
            <div className={`px-[30px] py-[20px] ${active == item ? 'text-[#196C6C] bg-white' : 'text-white'} rounded-l-[50px] flex items-center justify-between`} onClick={() => setActive(item)}>
                <span>{item}</span>
                {(item === 'General Info.' || item === 'Team') && <FaChevronRight/>}
            </div>
         </div>
          <div className={`w-full h-[13px] ${active == item ? 'rounded-tr-[100px]' : '' } bg-[#196C6C]`}></div>
                </div>
            )})
        }


        </div>


    </div>
  )
}

export default SideBar