import React, { useState,useEffect,useCallback} from 'react'
import Swal from 'sweetalert2'
import { Container,Navbar,NavDropdown} from 'react-bootstrap';
import './navbar.css';
import logo from '../../Assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { getCartItems} from '../../redux/cartSlice';
import { getWishListItems } from '../../redux/wishlistSlice';
import { useSelector ,useDispatch} from 'react-redux';
import { viweAllProducts } from '../../redux/showAllSlice';
import { userLogout } from "../../Helpers/api/userLogin";
import { logoutSuccess } from '../../redux/loginSlice';





export default function Navber() {
  const cart=useSelector((state)=> state.cart.cartItems);
  const wishlist=useSelector((state)=> state.wishlist.wishlistItems);
  const[keyword,setKeyWord]=useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // logout
  const logOut = () => {
    dispatch(logoutSuccess())

    localStorage.removeItem("token");
    Swal.fire(
      'تم التسجيل الخروج',
    )
    navigate('/login');
  }

  useEffect(() => {
   
    if(cart ){

      dispatch(getCartItems());
    }
    if(wishlist ){
      dispatch(getWishListItems())
    }
    
},[dispatch]);
 

  
 
  
  //search
 
  const hadleSearch =(e)=>{
    e.preventDefault();
    dispatch(viweAllProducts(`q=${keyword}`))
    navigate('/products')
    //setKeyWord('')
   
  }
  
  //show cart
  const handleShowCart=()=>{
    dispatch(getCartItems());
    navigate('/cart')
   
  }
  //show WishList
  const handleShowWishlist=()=>{
     dispatch(getWishListItems())
      navigate('/wishlist')
  
  }
    return (
    <Navbar  className="navbar" expand="xl" >
    <Container className="navbar-container">
      <Navbar.Brand href="#home">
            <div className='navbar-logo'>
              <img src={logo} alt="شعار عددي "/>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className='navbar-icons'> 
            <button className='navbar-btns' onClick={handleShowWishlist} >
              <span className='badge'>{wishlist === undefined ?(0):(wishlist.length)}</span> 
            <i className="far fa-heart"></i><a className='link-nav'>قائمة الرغبات</a>
            
            </button>
            <button  className='navbar-btns' onClick={ handleShowCart} ><span className='badge'>{cart === undefined ?(0):(cart.length)}</span> <i className="fas fa-shopping-cart"></i><a className='link-nav'>عربة التسوق</a></button>
             <NavDropdown  title={ <i className="far fa-user"></i> } className='navbar-btns' id="basic-nav-dropdown">
            <NavDropdown.Item className='items' onClick={()=>{navigate('/register')}}>انشاء حساب  <i className="fas fa-user-plus"></i></NavDropdown.Item>
            <NavDropdown.Item className='items' onClick={()=>{navigate('/profile_user')}}>معلومات المستخدم  <i className="fas fa-user-cog"></i></NavDropdown.Item>
            <NavDropdown.Item className='items' onClick={logOut}>تسجيل خروج<i className="fas fa-sign-out-alt"></i></NavDropdown.Item>
        </NavDropdown>
              
                
            </div>
           
          
            <form className='navbar-search-input ' onSubmit={hadleSearch} >
              <input  type='text'placeholder=' ابحث عن شى....' value={keyword} onChange={(e)=> setKeyWord(e.target.value)}/>
              <button type='submit' className='navbar-search-btn'><i className="fas fa-search"></i></button>
            </form>
            
          
        </Navbar.Collapse>
    
      </Container>
</Navbar>
        

 
    )
}

