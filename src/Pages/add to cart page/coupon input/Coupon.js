import { Container } from 'react-bootstrap';
import { postCoupon } from '../../../Helpers/api/order';
import React, { useState } from 'react';
import './coipon.css';
export default function Coupon() {
  const[input,setInput]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    postCoupon(input)
  }
  return <Container>
      <form className='form'>
          <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='ادخل رمز القسيمة ' />
          <button onClick={handleSubmit}>استخدام القسيمة</button>
      </form>
  </Container>;
}
