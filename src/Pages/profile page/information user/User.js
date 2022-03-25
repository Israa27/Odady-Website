import React from 'react'
import './user.css'
import { useSelector } from 'react-redux';

export default function User() {
    const user= useSelector((state)=>state.user.user);
    const cart=useSelector((state)=> state.cart.cartItems);
    const order=useSelector((state)=> state.order.orderInfo)
    const wishlist=useSelector((state)=> state.wishlist.wishlistItems); 
  return (
   

    <div className='info'>
        <div className='user-info'>
           <h4>{user.first_name +' '+ user.last_name}</h4>
           <span><strong>المحافضة :</strong> {user.Governorate} </span>
           <span><strong>المدينة :</strong> {user.city}</span>
           <span><strong>البريد الالكتروني :</strong> {user.email} </span>
           <span><strong> رقم الهاتف :</strong> {user.phone_number}</span>
           

        </div>
        <div className='user-all'>
        <div className='user-cart'>
            <h5>عدد المنتجات في السلة</h5>
            <div className='cart-icon'>
            <i className="fas fa-shopping-cart"></i>
            <span>{cart === undefined ?(0):(cart.length)}</span>
            </div>
        </div>
        <div className='user-wishlist'>
          <h5>عدد المنتجات في  قائمة الرغبات</h5>
          <div className='cart-icon'>
            <i className="fas fa-heart"></i>
            <span>{wishlist === undefined ?(0):(wishlist.length)}</span>
          </div>
         
        </div>
        
        </div>
        

    </div>

  )
}
