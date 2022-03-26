import React, { useEffect } from 'react'
import '../add to cart page/cart items/cartItems.css';
import { useSelector,useDispatch } from 'react-redux';
import SecondaryNav from '../../Components/secondary navbar/SecondaryNav';
import img from '../../Assets/images/emptywishlist.jpg';
import './wishlist.css';
import {removeFromWishList,addToWishList,getWishListItems} from '../../redux/wishlistSlice';
import { addToCart } from '../../redux/cartSlice';
export default function Wishlist() {

  const wishlist=useSelector((state)=> state.wishlist.wishlistItems);
  const status=useSelector((state)=> state.wishlist.error);
  const error= status?.detail || ''
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getWishListItems())
  },[dispatch]);

 //add item 
  const addItem=(id)=>{
    dispatch(dispatch(addToCart(id)))
    
  }
  //remove item 
  const removeItem=(id)=>{
    dispatch(removeFromWishList(id))
   
    
  }
    return (
        <div>
        
        <SecondaryNav name='قائمة رغباتي'/>
        <div className="content-wishlist"> 
        <div className="wishlist-cart-items">
          { wishlist.length===0?(
            <div className='wishlist-cart-empty'> 
              <img src={img} alt="cart-empty"/>
              <h5>القائمة فارغة</h5 >
              </div>
          ):(<div>
         
          {wishlist.map((item)=>(
          
          <div key={item.product.id} className="wishlist-carts">
          <div className="item-del">
            <div className="img-item">
              <img src={item.product.images[0].image} alt={item.product.name} />
            </div>
            <div className="text">
              <p className='title'>{item.product.name}</p>
              <div className="btn-wishlist">
                  <button className='btn-delete' onClick={()=>removeItem(item.id)} > 
                    <i className="far fa-trash-alt" ></i>حذف المنتج </button>
                  <button className='btn-add' onClick={()=>addItem(item.product.id)}> <i className="fas fa-shopping-cart"></i>  اضافة الى سلة المشتريات</button>
              </div>
            </div>
          </div>
          <div className="qty-price">
           <span className="price">{item.product.price } دينار</span>
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
