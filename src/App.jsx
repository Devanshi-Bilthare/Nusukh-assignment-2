import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import AdminPage from './Pages/AdminPage'
import PrivateRoute from './Components/PrivateRoute'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/admin' element={<PrivateRoute><AdminPage/></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App