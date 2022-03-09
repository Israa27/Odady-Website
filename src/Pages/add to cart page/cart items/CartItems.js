import React, { useEffect } from 'react'
import './cartItems.css';
import img from '../../../Assets/images/undefined.png';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/cartSlice';
import { addToWishList } from '../../../redux/wishlistSlice';
import { getCartItems } from '../../../redux/cartSlice';
export default function CartItems() {
  const dispatch = useDispatch();
  
  const cart=useSelector(state => state.cart.cartItems)
  //dispatch(getCartItems())
  useEffect(()=>{
    //dispatch(getCartItems())
   
   
  },[ cart,dispatch]);
  const incresQty=(id,e)=>{
      
      dispatch(addToCart(id))
    
      //dispatch(getCartItems())
  }
  
    return (
        <div className="card-items">
          {cart===undefined ?(
            <div className='card-empty'>
              <img src={img} alt="card-empty"/>
              <h5>السلة الفارغة قم بأضافة منتجات الى سلة  </h5 >
              </div>
          ):(<div>
         
          {cart.map((item)=>(
          
          <div key={item.product.id} className="cart">
          <div className="item-del">
            <div className="img-item">
              <img src={item.product.name} alt={item.product.name} />
            </div>
            <div className="text">
              <p className='title'>{item.product.name}</p>
              <div className="btn-cart">
                  <button className='btn-add'  onClick={()=>dispatch(removeFromCart(item.id))}> 
                    <i className="far fa-trash-alt" ></i>حذف المنتج </button>
                  <button className='btn-add' onClick={()=> dispatch(addToWishList(item.product.id))}> <i className="fas fa-heart"></i> اضافة الى رغباتي</button>
              </div>
            </div>
          </div>
          <div className="qty-price">
          <div class='qty'>
            <button className="qty-btn" onClick={()=>incresQty(item.product.id)} >+</button>

            <span className="qty-span">{item.item_qty}</span>
            <button className="qty-btn"   >-</button>
          </div>
           <span className="price">{item.product.price* item.item_qty} دينار</span>
          </div>
        </div>
          ))}
          </div>
          )}
        </div> 
        
      
    )
}
