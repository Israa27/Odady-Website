import React, { useEffect } from 'react'
import './myorder.css';
import img from '../../../Assets/images/order_empty.png'
import { useSelector,useDispatch } from 'react-redux';

import { getOrderInfo, getOrders } from '../../../redux/order/orderSlice';
import OrderItem from './OrderItem';
export default function MyOrder() {
  const order=useSelector((state)=>state.order)
  const dispatch = useDispatch();
  const getItem=(id)=>{
    dispatch(getOrderInfo(id))
  }
 
  
  return<div className='order-content'>
    {order.length===0 || order.error === 404?(
      <div className='order-empty'>
        <img src={img} alt=''/>
      </div>
    ):(
    <div className='order-items'>
    <div className='yourorder'>
      <h5>طلبات</h5>
       {order.orderlist.map((item,index)=>(
         <div  key={index} className='order'>
           <h6>تم الطلب في تاريخ: {new Date(item.created).toLocaleString()} </h6>
           <div className='listorder'>
             <h6> عدد المنتجات({item.items.length})</h6>
             {item.items.map((prod,index)=>(
               <span key={index} id={prod} className='orderitem' onClick={()=>getItem(prod) }>تفاصيل منتج {index}</span>
             ))}
           </div>
         </div>
       ))}
    </div>
    <div className='main'>
       <OrderItem />
    </div>
    </div>
    )}
  </div>
}
