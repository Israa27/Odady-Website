import React from 'react';
import  Navbar  from '../../Components/Navbar/Navber';
import  Footer  from '../../Components/Footer/Footer';
import Form from './right side/Form';
import OrderForm from './left side/OrderForm';
import './Checout.css';
export default function Checkout() {
  return <div>
    <Navbar />
    <section className='all-content' >
      <Form />
      <OrderForm />
      </section>
      <Footer />
  </div>;
}
