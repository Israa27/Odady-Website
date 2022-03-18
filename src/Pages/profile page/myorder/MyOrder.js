import React from 'react'
import './myorder.css';
import { useSelector,useDispatch } from 'react-redux';
import { addToWishList,removeFromWishList} from '../../../redux/wishlistSlice';
import img from '../../../Assets/images/undefined.png';
export default function MyOrder() {
   const wishlist=useSelector((state)=> state.wishlist);
  const dispatch = useDispatch();
  return (
    <div>
      <div className='my-wishlist'>
        <h5>عدد الطلبات ({wishlist.wishListItems.length})</h5>
        <div className="content-wishlist"> 
       
        <div className="my-wishlist-cart-items">
          {wishlist.wishListItems.length===0 ?(
            <div className='wishlist-cart-empty'>
              <img src={img} alt="cart-empty"/>
              <h5>لا توجد طلبات   </h5 >
              </div>
          ):(<div>
         
          {wishlist.wishListItems.map((item)=>(
          
          <div key={item.id} className="wishlist-carts">
          <div className="item-del">
            <div className="img-item">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="text">
              <p className='title'>{item.title}</p>
              <div className="btn-wishlist">
                  <button className='btn-add' onClick={()=> dispatch(removeFromWishList(item))} > 
                    <i className="far fa-trash-alt"></i>حذف المنتج </button>
                  <button className='btn-add'> <i className="fas fa-heart"></i> اضافة الى رغباتي</button>
              </div>
            </div>
          </div>
          <div className="qty-price">
          <div class='qty'>
            <button className="qty-btn" onClick={()=> dispatch(addToWishList(item))} >+</button>

            <span className="qty-span">{item.qty}</span>
            <button className="qty-btn"   >-</button>
          </div>
           <span className="price">{item.price * item.qty} دينار</span>
          </div>
        </div>
          ))}
          </div>
          )}
        </div> 
        </div> 
       
        </div>
    </div>
  )
}
