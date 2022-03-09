import React,{useEffect, useState} from 'react';
import './order.css';
import { useSelector,useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
//import { getTotalPrice } from '../../../redux/cartSlice';

export default function OrderForm() {
  //const navigate = useNavigate();
  const[value,setValue]=useState('');
  const[check,setCheck]=useState('');

  const cart=useSelector((state)=> state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
     // dispatch(getTotalPrice())
  },[cart,dispatch]);

//const hadleSubmit=()=>{
  
//}

  return <div>
      <div className="order-total-amount">
          <h4>طلبك</h4>
          <div className="order-temporary-amount order-span1">
              <p>المنتج </p>
              <span >المجموع</span>
          </div>
           <hr/>
          <div className="order">
          {cart.cartItems.map((item)=>{ 
                return<div className="product">
                <p>{item.name} </p>
                <span className='order-span2'>{item.price * item.qty} دينار</span>
                </div>
          })}
              
             
          </div>
          <hr/>
          <div className="order-radio-btn">
              <p>الشحن</p>
              <div className='radio'>
                  <input type='radio'id='radio1'  value='5000' onChange={(e)=>setValue(e.target.value)} checked={value === '5000'} required/>
                  <label  htmlFor ='radio1'>داخل بغداد : 5000 دينار</label>
               </div>
               <div className='radio'>
                  <input type='radio' id='radio2'  value='8000' onChange={(e)=>setValue(e.target.value)} checked={value === '8000'} required/>
                  <label htmlFor ='radio2'> باقي المحافظات : 8000 دينار</label>
                </div>
                <div className='radio'>
                  <input type='radio' id='radio3' value='0' onChange={(e)=>setValue(e.target.value)} checked={value === '0'} required/>
                  <label  htmlFor ='radio3'>الشحن المجاني</label>
                </div>
                
                <hr/>    
              
          </div>
          <div className="order-temporary-amount ">
              <p>الاجمالي</p>
              <span className='span'>{ (+value)+cart.totalPrice } دينار</span>
          </div>
          <div className="radio-btn">
              <div className='radio'>
                  <input type='radio'id='radio4' value='chash' onChange={(e)=>setCheck(e.target.value)} checked={check === 'chash'}  required />
                  <label  htmlFor ='radio4'>الدفع نقدًا عند الاستلام </label>
               </div>
               <div className='radio'>
                  <input type='radio' id='radio5' value='chash2' onChange={(e)=>setCheck(e.target.value)} checked={check === 'chash2'} />
                  <label htmlFor ='radio5'>الدفع عند التسليم مباشرة.</label>
                </div>
              
  
                <hr/>    
              
          </div>
          <div className="checkbox-btn">
              <div className='check-btn'>
                  <input type='checkbox' id='radio4' />
                  <label  htmlFor='radio4'>أرغب في تلقي رسائل بريدإلكتروني حصرية مع خصومات ومعلومات عن المنتج  </label>
               </div>
               <div className='check-btn'>
                  <input type='checkbox' id='radio5' />
                  <label htmlFor='radio5'>لقد قرأت ووافقت على </label>
                </div>
                <span className='order-span2'>سيتم استخدام بياناتك الشخصية لمعالجة طلبك ودعم تجربتك في هذا الموقع، ولأغراض أخرى تم توضيحها في سياسة الخصوصية لدينا</span>
              
  
               
              
          </div>


          <button type ='subimt' className="order-btn-amount">تأكيد الطلب</button>
        </div>
  </div>
}
