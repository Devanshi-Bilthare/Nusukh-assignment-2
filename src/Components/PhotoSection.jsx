import React from 'react'
import NavBar from './NavBar'
import PhotoData from './PhotoData'

const PhotoSection = () => {
  return (
    <div className='w-full md:w-[83%] bg-white rounded-[43px] sm:px-[44px] px-[15px] pb-[52px]'>
        <NavBar/>
        <PhotoData/>
    </div>
  )
}

export default PhotoSection