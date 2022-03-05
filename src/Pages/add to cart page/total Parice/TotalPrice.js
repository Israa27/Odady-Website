import React,{useEffect, useState} from 'react'
import './total.css';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getTotalPrice } from '../../../redux/cartSlice';
export default function TotalPrice() {
  const navigate = useNavigate();
  const cart=useSelector((state)=> state.cart);
  
  
  console.log(cart)
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getTotalPrice())
  },[cart,dispatch]);
  const[btn,setBtn]=useState(false);
  const[value,setValue]=useState('');
  
    return (
        <div className="total-amount-price">
          <h5>اجمالي سلة المشتريات</h5>
          <div className="temporary-amount-price">
              <p>المجموع </p>
              <span className='span-price'>{cart.totalPrice.toFixed(0)} دينار</span>
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
              <span className='span-price'>{(+value+ cart.totalPrice).toFixed(0)} دينار</span>
          </div>
          <button className= "btn-amount" onClick={()=>navigate('/checkout') }>اتمام الطلب</button>
        </div>
    )
}
