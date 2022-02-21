import './App.css';
import { Suspense,lazy,Fragment} from 'react';

import Checkout from './Pages/checkout page/Checkout';
import Contact from './Pages/contact us page/Contact';
import LogIn from './Pages/login page/LogIn';
import Register from './Pages/register Page/Register';
import Home from './Pages/home page/Home';
import Privacy from './Pages/Privacy policy page/Privacy';
//import TransferPolicy from './Pages/Transfer and return policy page/TransferPolicy';
import Product from './Pages/products page/Product';
import TransferPolicy from './Pages/Transfer and return policy page/TransferPolicy';
import ProductDetiles from './Pages/product detiles page/ProductDetiles';
import { Route, Routes } from 'react-router';
import Wishlist from './Pages/wishlist page/Wishlist';
import { PrivateRoute } from './private route/PrivateRoute';
import Profile from './Pages/profile page/Profile';
import SpinnerLoading from './Components/spinner/SpinnerLoading';
import ForgetPassword from './Pages/forget password/ForgetPassword';
import ResetPassword from './Pages/reset password/ResetPassword';
const Cart = lazy(() => import("./Pages/add to cart page/Cart"));




function App() {
  return (
    
    <div className="App">
    <Suspense fallback={<SpinnerLoading />}> 
      <Routes>
        
          <Route exact path="/" element={ <PrivateRoute><Home /></PrivateRoute>}/>
        
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/login" element={<LogIn />}/>
          <Route exact path="/products" element={<Product />}/>
          <Route exact path="/product_detiles" element={<ProductDetiles />}/>
          <Route exact path="/checkout" element={<Checkout />}/>
          <Route exact path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>}/>
          <Route exact path="/privacy" element={<Privacy />}/>
          <Route exact path="/transfer" element={<TransferPolicy />}/>
          <Route exact path="/profile_user" element={<Profile/>}/>
            <Route exact path="/account" element={<Profile/>}/>
            <Route exact path="/myorder" element={<Profile/>}/>
            <Route exact path="/mywishlist" element={<Profile/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/forgetpassword" element={<ForgetPassword/>}/>
          <Route exact path="/resetpassword" element={<ResetPassword/>}/>
   
      </Routes>
      </Suspense>
            
    
       
    </div>
   
    
  
   
 
  );
}

export default App;
