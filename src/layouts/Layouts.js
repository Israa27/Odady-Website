import React from 'react'
import { useLocation} from 'react-router-dom'
import Navbar from '../Components/Navbar/Navber'
import Footer from '../Components/Footer/Footer'
import Home from '../Pages/home page/Home'
import Cart from '../Pages/add to cart page/Cart'
import Wishlist from '../Pages/wishlist page/Wishlist'
import Product from '../Pages/products page/Product'
import ProductDetiles from '../Pages/product detiles page/ProductDetiles'
import Checkout from '../Pages/checkout page/Checkout'
import Contact from '../Pages/contact us page/Contact'
import Privacy from '../Pages/Privacy policy page/Privacy'
import TransferPolicy from '../Pages/Transfer and return policy page/TransferPolicy'
import AboutUs from '../Pages/about us page/AboutUs'
import SpinnerLoading from '../Components/spinner/SpinnerLoading'
import { useSelector } from 'react-redux';
import NotFound from '../Pages/not found page/NotFound'

export default function Layouts() {
  const location = useLocation()
  const renderContent = (routeName) => {
    console.log(routeName)
    switch (routeName) {
      case '/':
        return <Home />
      case '/cart':
        return <Cart/>
      case '/wishlist':
        return <Wishlist />
      case '/products':
        return <Product />
      case '/product_detiles':
        return <ProductDetiles/>
      case '/contact':
        return <Contact/>
      case '/privacy':
        return <Privacy/>
      case '/transfer':
        return <TransferPolicy/>
      case '/about':
        return <AboutUs/>
      default:
        return <Home />
     
  }};
  const error=useSelector(state=> state.product);

  return<div>
     {error.error=== 404 || error.status==="rejected" ?(
     
        <NotFound />
     
      )
    :(<div>
      <Navbar />
 
        {renderContent(location.pathname)}

        
      <Footer />
    
    </div>
    )}
    </div>

    }
