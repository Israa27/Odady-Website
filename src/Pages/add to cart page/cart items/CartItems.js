import React, { useEffect, useState } from 'react'
import './cartItems.css';
import img from '../../../Assets/images/undefined.png';
import { useSelector,useDispatch } from 'react-redux';
import { decreaseQty, removeFromCart,addToCart,getTotalPrice } from '../../../redux/cartSlice';
import { addToWishList } from '../../../redux/wishlistSlice';
export default function CartItems() {
  const cart=useSelector(state => state.cart);

 
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getTotalPrice())
  },[cart,dispatch]);
  
    return (
        <div className="card-items">
          {cart.cartItems.length===0 ?(
            <div className='card-empty'>
              <img src={img} alt="card-empty"/>
              <h5>السلة الفارغة قم بأضافة منتجات الى سلة  </h5 >
              </div>
          ):(<div>
         
          {cart.cartItems.map((item)=>(
          
          <div key={item.id} className="cart">
          <div className="item-del">
            <div className="img-item">
              <img src={item.name} alt={item.name} />
            </div>
            <div className="text">
              <p className='title'>{item.name}</p>
              <div className="btn-cart">
                  <button className='btn-add' onClick={()=> dispatch(removeFromCart(item))} > 
                    <i className="far fa-trash-alt"></i>حذف المنتج </button>
                  <button className='btn-add' onClick={()=> dispatch(addToWishList(item))}> <i className="fas fa-heart"></i> اضافة الى رغباتي</button>
              </div>
            </div>
          </div>
          <div className="qty-price">
          <div class='qty'>
            <button className="qty-btn" onClick={()=> dispatch(addToCart(item))} >+</button>

            <span className="qty-span">{item.qty}</span>
            <button className="qty-btn" onClick={()=> dispatch(decreaseQty(item))}  >-</button>
          </div>
           <span className="price">{item.price* item.qty} دينار</span>
          </div>
        </div>
          ))}
          </div>
          )}
        </div> 
        
      
    )
}
