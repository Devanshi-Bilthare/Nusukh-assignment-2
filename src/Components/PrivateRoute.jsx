import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    console.log(children)
    const user = useSelector(state => state.user.user)
  return (
    user?.token ? children : <Navigate to='/'/>
  )
}

export default PrivateRoute