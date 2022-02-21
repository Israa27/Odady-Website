import React,{useEffect} from 'react'
import './mywishlist.css';
import { useSelector,useDispatch } from 'react-redux';
import img from '../../../Assets/images/undefined.png';
import { addToWishList,removeFromWishList,decreaseQty,getTotal} from '../../../redux/wishlistSlice';
export default function MywishList() {
  const wishlist=useSelector((state)=> state.wishlist);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getTotal())
  },[wishlist,dispatch]);
    return (
        <div>
       
        <div className="content-mywishlist"> 
        <div className="mywishlist-items">
          {wishlist.wishListItems.length===0 ?(
            <div className='mywishlist-cart-empty'>
              <img src={img} alt="cart-empty"/>
              <h5>لا يوجد منتجات</h5 >
              </div>
          ):(<div>
         
          {wishlist.wishListItems.map((item)=>(
          
          <div key={item.id} className="carts">
          <div className="item-del">
            <div className="img-item">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="text">
              <p className='title'>{item.title}</p>
              <div className="btn-cart">
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
            <button className="qty-btn" onClick={()=> dispatch(decreaseQty(item))}  >-</button>
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
      
    )
  
}
