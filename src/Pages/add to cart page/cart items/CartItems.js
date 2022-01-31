import React from 'react'
import img from '../../../Assets/images/cardimg.png';
import { CartState } from '../../../contexts/Cart/Context';
import './cartItems.css';
export default function CartItems() {
  const{
    state:{cart},
    dispatch,
  }=CartState();

    return (
        <div className="cart-items">
          {cart.map((cartitem)=>(
          
          <div key={cartitem.id} className="carts">
          <div className="item-del">
            <div className="img-item">
              <img src={cartitem.image} alt='' />
            </div>
            <div className="text">
              <p className='title'>دريل تخريم كهربائي ١٠ ملم ٥٥٠ واط ، طوبة اوتوماتيك</p>
              <div className="btn-cart">
                  <button className='btn-add' onClick={()=>{dispatch({
                        type:"REMOVE-FROM-CART",
                        payload:cartitem
                      })}} > 
                    <i className="far fa-trash-alt"></i>حذف المنتج </button>
                  <button className='btn-add'> <i className="fas fa-heart"></i> اضافة الى رغباتي</button>
              </div>
            </div>
          </div>
          <div className="qty-price">
          <div class='qty'>
            <button className="qty-btn"
                        onClick={()=>{dispatch({
                        type:"ADD-TO-CART",
                        payload:cartitem
                      })}} >+</button>

            <span className="qty-span">{cartitem.qty}</span>
            <button className="qty-btn" 
            onClick={()=>{dispatch({
                        type:"REMOVE-FROM-CART",
                        payload:cartitem
                      })}}>-</button>
          </div>
           <span className="price">{cartitem.price} دينار</span>
          </div>
        </div>
          ))}
        </div> 
      
    )
}
