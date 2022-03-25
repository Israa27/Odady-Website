import React from 'react'
import { useSelector } from 'react-redux';
export default function () {
    const getcart=useSelector((state)=> state.cart);
    const cart= getcart?.cartItems || []
    const totalPrice=cart.reduce((price,item)=>price+ item.item_qty * item.product.price,0) 
    const coupon=useSelector(state => state.order) 
    const discount= coupon.coupon[0] ?.discount_value || 0
  return (
    <div className='total'>
           <div className='subtotal'>
               <span className='total-price'>السعر</span>
                <span >{totalPrice} دينار </span>
           </div>
          
           <div className='discount'>
               <span className='total-price'>التخفيض</span>
                <span>{discount} دينار</span>
           </div>
           <hr/>
           <div className='total-amount'>
               <span className='total-price'>الاجمالي </span>
                <span>{totalPrice - discount} دينار</span>
           </div>
       </div>
  )
}
