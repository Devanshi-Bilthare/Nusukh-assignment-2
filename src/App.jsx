import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import AdminPage from './Pages/AdminPage'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/admin' element={<AdminPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App