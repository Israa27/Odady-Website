
import './App.css';


import Cart from './Pages/add to cart page/Cart';
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


import {AuthProvider} from './contexts/AuthContext';



function App() {
  return (
    
    <div className="App">
      <AuthProvider>
    <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/login" element={<LogIn />}/>
        <Route exact path="/products" element={<Product />}/>
        <Route exact path="/checkout" element={<Checkout />}/>
        <Route exact path="/cart" element={<Cart />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/privacy" element={<Privacy />}/>
        <Route exact path="/transfer" element={<TransferPolicy />}/>
        <Route exact path="/product" element={<ProductDetiles />}/>
    </Routes>
    </AuthProvider>
    </div>
   
 
  );
}

export default App;
