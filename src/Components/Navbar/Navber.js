import React from 'react'
import { Container,Navbar,NavDropdown} from 'react-bootstrap';
import './navbar.css';
import logo from '../../Assets/images/logo.png';
import { CartState } from '../../contexts/Cart/Context';
import { useNavigate } from 'react-router-dom';
export default function Navber({props}) {
  const navigate = useNavigate()
  const{
    state:{cart},
    dispatch,
  }=CartState();


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
                <button className='navbar-btns' onClick={()=>{navigate('/cart')}} ><span className='badge'>{cart.length}</span> <i class="far fa-heart"></i><a className='link-nav'>قائمة الرغبات</a></button>
                <button  className='navbar-btns' onClick={()=>{navigate('/cart')}} ><span className='badge'>{cart.length}</span> <i class="fas fa-shopping-cart"></i><a className='link-nav'>عربة التسوق</a></button>
                <NavDropdown  title={<i class="far fa-user"></i>} className='navbar-btns' id="basic-nav-dropdown">
                  <NavDropdown.Item className='items' onClick={()=>{navigate('/login')}}>تسجيل الدخول <i className="fas fa-sign-in-alt"></i></NavDropdown.Item>
                  <NavDropdown.Item className='items' onClick={()=>{navigate('/register')}}>انشاء حساب  <i className="fas fa-user-plus"></i></NavDropdown.Item>
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

