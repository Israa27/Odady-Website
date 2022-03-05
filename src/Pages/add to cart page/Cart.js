import React from 'react'
import './cart.css';
import CartItems from './cart items/CartItems';
import TotalPrice from './total Parice/TotalPrice';
import Coupon from './coupon input/Coupon';
import SecondaryNav from '../../Components/secondary navbar/SecondaryNav';
export default function Cart() {
    return (
        <div>
   
       
        <SecondaryNav name='سلة المشتريات'/>
        <div className="contents">  
         <CartItems />  
         <TotalPrice />
         </div>
         <Coupon />
        

        
        
</div>
       
    )
}
