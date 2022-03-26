import React, { useCallback, useEffect, useRef} from 'react'
import './cartItems.css';
import img from '../../../Assets/images/undefined.png';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart, removeFromCart,reduceQty } from '../../../redux/cartSlice';
import { addToWishList } from '../../../redux/wishlistSlice';
import { getCartItems } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router';

export default function CartItems() {
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const getcart=useSelector((state)=> state.cart);
  const cart= getcart?.cartItems || ''
  const status=useSelector(state => state.cart)
 function useUpdateEffect(callback, dependencies) {
    const firstRenderRef = useRef(true)
  
    // Since ref persists value between renders (and itself doesn't trigger a render when value is changed), we can simply just set ref to a failing condition on our 1st render so that component only is re-rendered when dependencies change and not also "onMount"
    useEffect(() => {
      if (firstRenderRef.current) {
        firstRenderRef.current = false
        return
      }
      return callback()
    }, dependencies)
  }
  useUpdateEffect(()=>{

        
        dispatch(getCartItems())
 
   
  },[dispatch]);
  const handleIncreaseQty=(id)=>{
      dispatch(addToCart(id))
      dispatch(getCartItems())
     
     
     
     
    
  }
 const handleReduceQty =(id,qty)=>{
   if(qty===1){
    dispatch(removeFromCart(id))
    dispatch(getCartItems())
   }
   else{

    dispatch(reduceQty(id))
    dispatch(getCartItems())
   }
     
 }
 const handleRemove=(id)=>{
  dispatch(removeFromCart(id))
    dispatch(getCartItems())
 }
    return (
        <div className="card-items">
      
          {cart.length===0 || getcart.error===404?(
            <div className='card-empty'>
              <img src={img} alt="card-empty"/>
              <h5>السلة الفارغة قم بأضافة منتجات الى سلة  </h5 >
              </div>
          ):(<div>
         
          {cart.map((item)=>(
          
          <div key={item.product.id} className="cart">
          <div className="cart-item-del">
            <div className="cart-img-item">
              <img src={item.product.images[0].image } alt={item.product.name} />
            </div>
            <div className="cart-text">
              <p className='title'>{item.product.name}</p>
              <div className="btn-cart">
                  <button className='btn-add'  onClick={()=> handleRemove(item.id)}> 
                    <i className="far fa-trash-alt" ></i>حذف المنتج </button>
                  <button className='btn-add' onClick={()=> dispatch(addToWishList(item.product.id))}> <i className="fas fa-heart"></i> اضافة الى رغباتي</button>
              </div>
            </div>
          </div>
          <div className="cart-qty-price">
          <div class='cart-qty'>
            <button className="qty-btn" onClick={()=>handleIncreaseQty(item.product.id)} >+</button>

            <span className="qty-span">{item.item_qty}</span>
            <button className="qty-btn"  onClick={()=>handleReduceQty(item.id,item.item_qty)} >-</button>
          </div>
           <span className="cart-price">{item.product.price* item.item_qty} دينار</span>
          </div>
        </div>
          ))}
          </div>
          )}
        </div> 
        
      
  
    
    )}
