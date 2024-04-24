import React from 'react'
import { BrowserRouter,Routes,Route
 } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Edit from '../pages/Edit'
 export function ConfigRoutes() {
   return (
     <BrowserRouter>
     <Routes>

     <Route path="/" element={<Login />} />
     <Route path="/edit" element={<Edit />} />
     <Route path="/home" element={<Home />} />
     </Routes>
     </BrowserRouter>
   )
 }
 
 export default ConfigRoutes