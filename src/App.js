import React from 'react';
import './App.css';

import Register from './Pages/register Page/Register';
import { Route, Routes, useLocation } from 'react-router-dom';
import Profile from './Pages/profile page/Profile';
import ForgetPassword from './Pages/forget password/ForgetPassword';
import ResetPassword from './Pages/reset password/ResetPassword';
import LogIn from './Pages/login page/LogIn';
import Layouts from './layouts/Layouts'
import { PrivateRoute } from './private route/PrivateRoute';


function App() {
  
  const location=useLocation()
  return<div className="App">
    
   
      <Routes >
          <Route exact path="/" element={<Layouts/> }/>
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/login" element={<LogIn />}/>
          <Route exact path="/products" element={<Layouts />}/>
          <Route exact path="/product_detiles" element={<Layouts />}/>
          
        
          <Route exact path="/cart" element={<Layouts />}/>
          <Route exact path="/checkout" element={<Layouts/>}/>
          <Route exact path="/contact" element={<Layouts />}/>
          <Route exact path="/wishlist" element={<Layouts />}/>
         
          <Route exact path="/privacy" element={<Layouts />}/>
          <Route exact path="/transfer" element={<Layouts />}/>
          <Route exact path="/profile_user" element={<Profile />}/>
            <Route exact path="/account" element={<Profile />}/>
            <Route exact path="/myorder" element={<Profile />}/>
            <Route exact path="/mywishlist" element={<Profile />}/>
          <Route exact path="/forgetpassword" element={<ForgetPassword/>}/>
          <Route exact path="/resetpassword" element={<ResetPassword/>}/>
          <Route exact path="/about" element={<Layouts />}/>
   
      </Routes>
      </div>
      
            
    
       
   
    
  
   
 

}

export default App;
