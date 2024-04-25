import React from 'react'
import { BrowserRouter,Routes,Route
 } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Edit from '../pages/Edit'
import Signup from '../pages/Signup'
import StudentDetails from '../pages/StudentDetails'
 export function ConfigRoutes() {
   return (
     <BrowserRouter>
    
     <Routes>

     <Route path="/" element={<Login />} />
     <Route path="/edit" element={<Edit />} />
     <Route path="/home" element={<Home />} />
     <Route path="/signup" element={<Signup />} />
     <Route path='/student-details' element={<StudentDetails />} />
     </Routes>
     </BrowserRouter>
   )
 }
 
 export default ConfigRoutes