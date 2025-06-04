import React, { useEffect, useState } from 'react'
import ProfilePic from '../assets/profile.png'
import { HiOutlineDotsVertical } from 'react-icons/hi'

const PhotoCard = ({userData,btnId}) => {
    const [isEven,setIsEven] = useState(false)
    const [isOdd,setIsOdd] = useState(false)
    const [isPrime,setIsPrime] = useState(false)

    const checkPrimeNumber= (num) => {
      if(num <= 1) return false
      for(let i =2;i <= Math.sqrt(num);i++){
        if(num % i == 0) return false
      }

      return true
    }


    useEffect(() => {
       setIsOdd(false)
        setIsEven(false)
        setIsPrime(false)
      if(userData.id % 2 == 0 && btnId == "EVEN"){
        setIsEven(true)
      } else if(userData.id % 2 !=  0 && btnId == "ODD"){
       setIsOdd(true)
      }else if(checkPrimeNumber(userData.id) && btnId == "PRIME"){
        setIsPrime(true)
      }
    },[userData,btnId])
  return (
    <div className={`relative xl:w-[16vw] md:w-[20vw] h-[277px] rounded-[50px] shadow-[0px_6px_20px_rgba(188,188,188,0.25)] text-center ${(isEven || isOdd || isPrime)? 'bg-[#F4E5BE]' : 'bg-white'}`}>
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