import React from 'react'
import { IoChevronDown } from 'react-icons/io5'
import { RiSearch2Line } from 'react-icons/ri'
import PhotoCard from './PhotoCard'

const PhotoData = () => {
  return (
    <div>
        <div className='w-full mt-[41px] flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between font-[500]'>
            <div className='w-full lg:w-[326px] ps-[18px] py-[11px] pe-[12px] text-[15px] border border-[#E0DEE8] rounded-[6px] flex justify-between items-center'>
                <input type="text" placeholder='Search by name'  className='focus:outline-none placeholder-[#AEB8B8]' />
                <RiSearch2Line className='text-[#AEB8B8] text-[18px]'/>
            </div>

            <div className='flex gap-[20px] overflow-x-auto'>
                <div className='relative'>
                    <select className='border border-[#E0DEE8] bg-[#F5F4FF] text-[#040616] p-[12px] text-[15px] w-[157px] rounded-[18px] focus:outline-none appearance-none'>
                    <option value="" > Album</option>
                    </select>
                    <IoChevronDown className='absolute right-3 top-[16px]'/>
                </div>
                <div className='relative'>
                    <select className='border border-[#E0DEE8] bg-[#F5F4FF] text-[#040616] p-[12px] text-[15px] w-[157px] rounded-[18px] focus:outline-none appearance-none'>
                    <option value="" > Even</option>
                    </select>
                    <IoChevronDown className='absolute right-3 top-[16px]'/>
                </div>

                <button className='bg-[#196C6C] text-white text-[15px] w-[157px] rounded-[18px] flex-shrink-0'> Add Photo</button>
            </div>
        </div>

        <div className="mt-[58px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[35px]">
  <PhotoCard />
  <PhotoCard />
  <PhotoCard />
  <PhotoCard />
  <PhotoCard />
  <PhotoCard />
</div>
    </div>
  )
}

export default PhotoData