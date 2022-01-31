import { Container } from 'react-bootstrap';
import React from 'react';
import './coipon.css';
export default function Coupon() {
  return <Container>
      <form className='form'>
          <input type='text' placeholder='ادخل رمز القسيمة ' />
          <button>استخدام القسيمة</button>
      </form>
  </Container>;
}
