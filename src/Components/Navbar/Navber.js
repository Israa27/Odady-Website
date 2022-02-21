import React from 'react'
import { Container,Navbar,NavDropdown} from 'react-bootstrap';
import './navbar.css';
import logo from '../../Assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { getTotalPrice } from '../../redux/cartSlice';
import { getTotal } from '../../redux/wishlistSlice';
import { useSelector ,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { userLogout } from "../../Helpers/api/userLogin";
export default function Navber() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    userLogout();
    navigate('/');
  }
  const cart=useSelector((state)=> state.cart);
  const wishlist=useSelector((state)=> state.wishlist);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getTotalPrice())
      dispatch(getTotal());
  },[cart,wishlist,dispatch]);


    return (
    <Navbar  className="navbar" expand="lg" >
    <Container className="navbar-container">
      <Navbar.Brand href="#home">
            <div className='navbar-logo'>
              <img src={logo} alt="شعار عددي "/>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className='navbar-icons'>
                <button className='navbar-btns' onClick={()=>{navigate('/wishlist')}} ><span className='badge'>{wishlist.qty}</span> <i className="far fa-heart"></i><a className='link-nav'>قائمة الرغبات</a></button>
                <button  className='navbar-btns' onClick={()=>{navigate('/cart')}} ><span className='badge'>{cart.qty}</span> <i className="fas fa-shopping-cart"></i><a className='link-nav'>عربة التسوق</a></button>
                <NavDropdown  title={<i class="far fa-user"></i>} className='navbar-btns' id="basic-nav-dropdown">
                  <NavDropdown.Item className='items' onClick={()=>{navigate('/login')}}>تسجيل الدخول <i className="fas fa-sign-in-alt"></i></NavDropdown.Item>
                  <NavDropdown.Item className='items' onClick={()=>{navigate('/register')}}>انشاء حساب  <i className="fas fa-user-plus"></i></NavDropdown.Item>
                  <NavDropdown.Item className='items' onClick={logOut}>تسجيل خروج<i class="fas fa-sign-out-alt"></i></NavDropdown.Item>
                </NavDropdown>
            </div>
           
          
            <div className='navbar-search-input ' >
              <input  type='text'placeholder='.... ابحث عن شى ' />
              <button className='navbar-search-btn'><i className="fas fa-search"></i></button>
            </div>
            
          
        </Navbar.Collapse>
    
      </Container>
</Navbar>
        

 
    )
}

