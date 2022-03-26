import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import SpinnerLoading from '../../../Components/spinner/SpinnerLoading';
import { getOrderInfo } from '../../../redux/order/orderSlice';
export default function () {
  const order=useSelector((state)=> state.order.orderInfo);
  
  console.log(order)
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getOrderInfo())
  },[dispatch])
  return (
    <div>
        {order===undefined || order.length ===0 ?(
            <div>
                <SpinnerLoading/>
            </div>
        ):(
        <div className='product-info-content'>
         
           <div className='product-info'>
               <h6>اسم المنتج: {order.product.name}</h6>
               <span>الكمية: {order.item_qty}</span>
               <span>السعر: {order.product.price}</span>
               <span>اسم الشركة: {order.product.company.name}</span>
               
           </div>
            <div className='product-img-info'>
                <img src={order.product.images[0].image} alt={order.product.name}/>
            </div>
            
        </div>
        )}
    </div>
  )
}
