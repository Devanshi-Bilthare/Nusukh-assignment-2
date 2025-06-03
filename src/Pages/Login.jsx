import React from 'react'
import LoginForm from '../Components/LoginForm'
import LoginBanner from '../Components/LoginBanner'

const Login = () => {
  return (
    <div className='w-full flex h-screen overflow-hidden'>
        <LoginForm/>
        <LoginBanner/>
    </div>
  )
}

export default Login