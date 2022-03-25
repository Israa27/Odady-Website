import React, { Suspense } from 'react';
import './App.css';
import routes from './routes';
import { Route, Routes, useLocation } from 'react-router-dom';
import SpinnerLoading from './Components/spinner/SpinnerLoading';


function App() {
  
  const location=useLocation()
  return<div className="App">
   <Suspense fallback={<SpinnerLoading/>}>
      
      <Routes >
         {routes.map((name,key)=>{return(
           <Route 
           key={key}
           exact={name.exact}
           path={name.path}
           element={<name.element/>}
           />
           
         )})}
      </Routes>
      </Suspense>
      </div>
      
            
    
       
   
    
  
   
 

}

export default App;
