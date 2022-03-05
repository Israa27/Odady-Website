import React from 'react'
import { Container } from 'react-bootstrap';
import { Link ,useLocation} from 'react-router-dom';
import './profile.css'
import Account from './account user/Account';
import MyOrder from './myorder/MyOrder';
import MywishList from './wishlist/MywishList'

export default function Profile() {
   const user= JSON.parse(localStorage.getItem("user"));
    const location = useLocation()
    const renderContent = (routeName) => {
      console.log(routeName)
      switch (routeName) {
        case '/account':
          return <Account />
        case '/myorder':
          return <MyOrder/>
        case '/mywishlist':
          return <MywishList />
       
    }};
  return (
   

  
    <Container className='profile-cart'>
       
       <div className='nav-right' >
           <div className='user'>
             <div>
               <img src=''/>
             </div>
               <h4>{user.first_name} {user.last_name}</h4>
               <span className='email'>{user.email}</span>
           </div>
           <div className='meun'>
               <ul>
               <li><Link to='/'><i className="fas fa-home"></i> الصفحة الرئيسة </Link></li><hr/>
                   <li><Link to='/account'><i className="fas fa-user-edit"></i> تعديل الحساب </Link></li><hr/>
                   <li><Link  to='/myorder'><i className="fas fa-shopping-cart"></i> طلباتي  </Link></li><hr/>
                   <li><Link  to='/mywishlist'> <i className="far fa-heart"></i> قائمة رغباتي </Link></li>
                   
               </ul>

           </div>
       </div>
 
       <div className='main'>
         
       {renderContent(location.pathname)}
          
       </div>
     
    </Container>
    
  )
}
