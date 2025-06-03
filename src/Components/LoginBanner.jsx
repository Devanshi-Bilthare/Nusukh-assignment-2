import React from 'react'
import Image1 from '../assets/img1.png'
import Image2 from '../assets/img2.png'
import Image3 from '../assets/img3.png'
import Image4 from '../assets/img4.png'
import Image5 from '../assets/img5.png'


const LoginBanner = () => {
  return (
   <div className='w-[56%] bg-[#196c6c] 2xl:px-[5vw] hidden md:block'>
     <div className='relative w-full h-full '>
      <img src={Image5} alt="image1" className='absolute top-[106px] left-[81px] w-[164px] h-[164px] rounded-full object-cover object-[80%_center]' />
      <img src={Image4} alt="image1" className='absolute top-[57px] left-[468px] w-[150px] h-[150px] rounded-full object-cover' />

      <img src={Image3} alt="image1" className='absolute top-[292px] left-[366px] w-[131px] h-[131px] rounded-full object-cover' />


      <img src={Image1} alt="image1" className='absolute top-[386px] left-[82px] w-[192px] h-[192px] rounded-full object-cover object-[20%_center]' />
      <img src={Image2} alt="image1" className='absolute top-[508px] left-[468px] w-[127px] h-[127px] rounded-full object-cover' />

    </div>
   </div>
  )
}

export default LoginBanner