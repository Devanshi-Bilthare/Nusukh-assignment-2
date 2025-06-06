import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { LuEye } from 'react-icons/lu'
import { TbLockPassword } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/user/UserSlice'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [formData,setFormData] = useState({
    name:"",
    email:""
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const userData = {
      email:formData.email,
      token:'XUBNAJHTFHJCJ_BHF'
    }

    dispatch(setUser(userData))
    navigate('/admin')
  }
  return (
    <div className='w-full md:w-[44%] h-full py-[74px] px-[46px]'>
        <p className='text-[34px] font-[600]'>Welcome to Nusukh!</p>
        <form onSubmit={submitHandler} className='text-[14px]'>
         <div className='w-full shadow-lg rounded-[30px] mt-[75px] font-[600]'>
           <div className='flex flex-col border-b border-[#D7D7D7] py-[27px] px-[49px] text-[14px]'>
            <label htmlFor='email' className='text-[#8697B4] mb-[10px]'>Email</label>
            <input type="email" id='email' name='email' onChange={changeHandler} placeholder='example@gmail.com' className='focus:outline-none' />
          </div>
          <div className='flex flex-col py-[27px] px-[25px] relative'>
            <label htmlFor='password' className='text-[#8697B4] mb-[10px] flex gap-[8px]'><TbLockPassword size={16} /> Password</label>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder='•••••••'
              name='password'
              onChange={changeHandler}
              id='password' className='focus:outline-none px-[24px]'  />
            <span className='absolute text-[24px] top-14 right-[46px] ' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEyeOff/> : <FiEye/>}
            </span>
          </div>
         </div>

         <div className='mt-[17px] flex justify-between items-center'>
          <div>
            <input type="checkbox" id='rememberme' />
            <label htmlFor="rememberme" className='font-[400] ml-[11px] text-[#040616]' >Remember Me</label>
          </div>
          <p className='font-[500] text-[#196C6C]'>Forget Password?</p>
         </div>

         <button className='uppercase w-full rounded-[20px] text-white bg-[#196C6C] py-[20px] mt-[100px] md:mt-[100px] lg:mt-[150px]'>Log in</button>
        </form>
    </div>
  )
}

export default LoginForm