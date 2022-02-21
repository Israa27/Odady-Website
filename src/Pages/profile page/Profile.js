import React from 'react'
import { Container } from 'react-bootstrap';
import { Link ,useLocation} from 'react-router-dom';
import './profile.css'
import Account from './account user/Account';
import MyOrder from './myorder/MyOrder';
import MywishList from './wishlist/MywishList'
export default function Profile() {
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
               <h4>Name User</h4>
           </div>
           <div className='meun'>
               <ul>
               <li><Link to='/'><i className="fas fa-user-plus"></i> الصفحة الرئيسة </Link></li><hr/>
                   <li><Link to='/account'><i className="fas fa-user-plus"></i> حسابي </Link></li><hr/>
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
