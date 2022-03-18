import { Container } from 'react-bootstrap';
import { PostCoupon } from '../../../redux/order/orderSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './coipon.css';
export default function Coupon() {
  const dispatch = useDispatch();
  const[input,setInput]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(PostCoupon(input))
    
  }
  return <Container>
      <form className='form'>
          <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='ادخل رمز القسيمة ' />
          <button onClick={handleSubmit}>استخدام القسيمة</button>
      </form>
  </Container>;
}
