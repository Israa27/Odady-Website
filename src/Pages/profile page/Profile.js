import React ,{useState} from 'react'
import { Container } from 'react-bootstrap';
import { Link ,useLocation,useNavigate} from 'react-router-dom';
import './profile.css'
import Account from './account user/Account';
import MyOrder from './myorder/MyOrder';
import User from './information user/User';
import NotFound from '../../Pages/not found page/NotFound'
import { useSelector,useDispatch } from 'react-redux';
import { getOrders } from '../../redux/order/orderSlice';
import OrderItem from './myorder/OrderItem';
export default function Profile() {
  const dispatch = useDispatch();
  const error= useSelector((state)=>state.user);
  const navigate = useNavigate();
   const[isOpen,setIsOpen]=useState(false);
   const toggle=()=>{
     setIsOpen(!isOpen)
   }
  
    const location = useLocation()
    const renderContent = (routeName) => {
      console.log(routeName)
      switch (routeName) {
        case '/account':
          return <Account />
        case '/myorder':
          return <MyOrder/>
        default:
          return <User/>
       
    }};
  return (
    <div>
    { error.error==='Token not found!' ?(
        <NotFound />
    ):(
  
    <Container className='profile-cart'>
       
       <div className='nav-right' >
           <div className='meun'style={{width:isOpen? '200px':'50px'}}>
               <ul>
               <li><i onClick={toggle}  className="fas fa-align-justify"></i><Link to =''className={isOpen ?'show':'hade'}>  ملف الشخصي </Link></li>
               <li onClick={()=>navigate('/')} className={isOpen ?'show':'hade'}><i className="fas fa-home"  ></i> <Link to='/' className={isOpen ?'show':'hade'}> الصفحة الرئيسة </Link></li>
               <li onClick={()=>navigate('/user')} className={isOpen ?'show':'hade'}><i class="fas fa-user-alt"></i> <Link to='/user' className={isOpen ?'show':'hade'}>معلومات المستخدم</Link></li>
               <li onClick={()=>navigate('/account')} className={isOpen ?'show':'hade'}><i className="fas fa-edit"></i> <Link className={isOpen ?'show':'hade'} to='/account'> تعديل الحساب </Link></li>
               <li onClick={()=>{dispatch(getOrders());
                navigate('/myorder')}} className={isOpen ?'show':'hade'}><i className="fas fa-shopping-cart"></i> <Link to='/myorder' className={isOpen ?'show':'hade'} > طلباتي  </Link></li>
                 
                   
               </ul>

           </div>
       </div>
 
       <div className='main'>
        
       {renderContent(location.pathname)}
          
       </div>
     
    </Container>
    
  
  )}
  </div>
  )
}
