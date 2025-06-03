import React, { useEffect, useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import { RiArrowDropLeftLine, RiArrowDropRightLine, RiSearch2Line } from 'react-icons/ri'
import PhotoCard from './PhotoCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../features/user/UserSlice'

const PhotoData = () => {
    const dispatch = useDispatch()
    const allUsers = useSelector(state => state.user?.allUsers)
    const [currentPage,setCurrentPage] = useState(1)
    const entriesPerPage = 8

    useEffect(() => {
        dispatch(getUserData())
    },[])

    const indexOfLastEntry = currentPage * entriesPerPage
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage
    const currentEntries = allUsers?.slice(indexOfFirstEntry,indexOfLastEntry)

    const totalPages = Math.ceil((allUsers?.length || 0)/entriesPerPage)

    const increasePageCount = () => {
        setCurrentPage(prev => Math.max(prev+1,totalPages))
    }

    const decreasePageCount = () => {
        setCurrentPage(prev => Math.max(prev-1,1))
    }

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
            {
                currentEntries?.map(data => {
                   return <PhotoCard userData={data} key={data.id}/>
                })
            }
        </div>

        <div className='text-[14px] font-[400] text-[#040616] mt-[66px] flex items-center justify-between'>
            <p className=''>Showing {currentEntries?.length} of {allUsers?.length} entries</p>
            <div className='flex gap-[7px]'>
                <button onClick={decreasePageCount} disabled={currentPage === 1} className='w-[35px] h-[35px] rounded-full border border-[#E9ECEF] text-[#8898AA] text-[30px] flex items-center justify-center' >
                    <RiArrowDropLeftLine/>
                </button>
                 <p className='w-[35px] h-[35px] rounded-full text-[white] flex items-center justify-center bg-[#196C6C]'>
                    {currentPage}
                </p>
                <button onClick={increasePageCount} disabled={currentPage === totalPages} className='w-[35px] h-[35px] rounded-full border border-[#E9ECEF] text-[#8898AA] text-[30px] flex items-center justify-center'>
                    <RiArrowDropRightLine/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default PhotoData