import React from 'react';
import  Navbar  from '../../Components/Navbar/Navber';
import  Footer  from '../../Components/Footer/Footer';

import OrderForm from './left side/OrderForm';
import './Checout.css';
import InformationUser from './right side/InformationUser';
export default function Checkout() {
  return <div>
    <Navbar />
    <section className='all-content' >
      <InformationUser/>
      <OrderForm />
      </section>
      <Footer />
  </div>;
}
