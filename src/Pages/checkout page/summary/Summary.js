import React,{useState} from 'react'
import './summary.css'
import { useNavigate } from 'react-router';
import Coupon from '../coupon input/Coupon'
import { useDispatch,useSelector } from 'react-redux';
import Total from './Total';
import Delivery from './Delivery';
export default function Summary() {
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const[value,setValue]=useState('');
    const getcart=useSelector((state)=> state.cart);
    const cart= getcart?.cartItems || []
    const totalPrice=cart.reduce((price,item)=>price+ item.item_qty * item.product.price,0) 
    const coupon=useSelector(state => state.order) 
    const discount= coupon.coupon[0] ?.discount_value || 0
    console.log(cart)
  return (
    <div className='summary'>
       <h4>طلبك</h4>
       <div className='list-products'>
         {cart.map((item,index)=>(
             <div key={index} className='single-item'>
                  <img src={item.product.images[0].image} alt={item.product.name} />
                 <span className='product-name'>{item.product.name}</span>
                 <span className='product-price'>{item.product.price * item.item_qty} دينار</span>
             </div>
         ))}

       </div>
       <Coupon/>
       <Total />
       <Delivery />
       
    </div>
  )
}
