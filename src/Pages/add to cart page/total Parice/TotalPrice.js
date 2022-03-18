import React,{useEffect, useState} from 'react'
import './total.css';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartItems } from '../../../redux/cartSlice';
//import {getTotalPrice } from '../../../redux/cartSlice';
export default function TotalPrice() {
  const navigate = useNavigate();
  const[value,setValue]=useState('');
  const getcart=useSelector((state)=> state.cart);
  const cart= getcart?.cartItems || []
  const totalPrice=cart.reduce((price,item)=>price+ item.item_qty * item.product.price,0) 
  const coupon=useSelector(state => state.order) 
  const discount= coupon.coupon[0] ?.discount_value || ''
  
    

    
  

  
  
  
  const dispatch = useDispatch();
  useEffect(()=>{
   
      dispatch(getCartItems())
   
    
    
  },[dispatch]);
 
  
    return (
        <div className="total-amount-price">
          <h5>اجمالي سلة المشتريات</h5>
          <div className="temporary-amount-price">
              <p>المجموع </p>
              <span className='span-price'>{totalPrice} دينار</span>
          </div>
          <hr/>
          <div className="price-radio-btn">
              <p>الشحن</p>
              <div className='radio'>
                  <input type='radio' id='radio1' value='5000' onChange={(e)=>setValue(e.target.value)} checked={value ==='5000'}/>
                  <label  htmlFor='radio1'>داخل بغداد : 5000 دينار</label>
               </div>
               <div className='radio'>
                  <input type='radio' id='radio2' value='8000' onChange={(e)=>setValue(e.target.value)} checked={value ==='8000'}/>
                  <label htmlFor='radio2'> باقي المحافظات : 8000 دينار</label>
                </div>
                <div className='radio'>
                  <input type='radio' id='radio3' value='0' onChange={(e)=>setValue(e.target.value)} checked={value === '0'}/>
                  <label  htmlFor='radio3'>الشحن المجاني</label>
                </div>
               
                  
                <hr/>
          </div>
          <div className="temporary-amount-price ">
              <p>الاجمالي</p>
              <span className='span-price'>{+value+ totalPrice-(discount === ''  ?(0):(discount))} دينار</span>
          </div>
          <button className= "btn-amount" onClick={()=>navigate('/checkout') }>اتمام الطلب</button>
        </div>
    )
}
