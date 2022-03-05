import React, { useEffect } from 'react'

import '../add to cart page/cart items/cartItems.css';
import { useSelector,useDispatch } from 'react-redux';
import SecondaryNav from '../../Components/secondary navbar/SecondaryNav';
import img from '../../Assets/images/undefined.png';

import './wishlist.css';
import { getItems,removeFromWishList,decreaseQty,getTotalPrise} from '../../redux/wishlistSlice';
export default function Wishlist() {
  const wishlist=useSelector((state)=> state.wishlist);
 
  const dispatch = useDispatch();
  useEffect(()=>{
    
  },[dispatch]);

  const removeItem=(item)=>{
    dispatch(removeFromWishList(item))
    //removeItem(item)
  }
    return (
        <div>
        
        <SecondaryNav name='قائمة رغباتي'/>
        <div className="content-wishlist"> 
        <div className="wishlist-cart-items">
          {wishlist.wishListItems.length===0 ?(
            <div className='wishlist-cart-empty'>
              <img src={img} alt="cart-empty"/>
              <h5>السلة الفارغة قم بأضافة منتجات الى سلة  </h5 >
              </div>
          ):(<div>
         
          {wishlist.wishListItems.map((item)=>(
          
          <div key={item.id} className="wishlist-carts">
          <div className="item-del">
            <div className="img-item">
              <img src={item.images} alt={item.name} />
            </div>
            <div className="text">
              <p className='title'>{item.name}</p>
              <div className="btn-wishlist">
                  <button className='btn-add' onClick={()=>removeItem(item)} > 
                    <i className="far fa-trash-alt"></i>حذف المنتج </button>
                  <button className='btn-add'> <i className="fas fa-heart"></i> اضافة الى رغباتي</button>
              </div>
            </div>
          </div>
          <div className="qty-price">
          
          
           <span className="price">{item.price } دينار</span>
          </div>
        </div>
          ))}
          </div>
          )}
        </div> 
        </div> 
       
        </div>
      
    )
}
