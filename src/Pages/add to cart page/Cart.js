import React from 'react'
import './cart.css';
import CartItems from './cart items/CartItems';
import TotalPrice from './total Parice/TotalPrice';
import SecondaryNav from '../../Components/secondary navbar/SecondaryNav';
export default function Cart() {
    return (
        <div>
   
       
        <SecondaryNav name='سلة المشتريات'/>
        <div className="contents">  
         <CartItems />  
         <TotalPrice />
         </div>
       
        

        
        
</div>
       
    )
}
