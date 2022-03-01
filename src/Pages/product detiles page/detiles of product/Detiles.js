import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decreaseQty, removeFromCart,addToCart, getTotalPrice } from '../../../redux/cartSlice';
import { addToWishList } from '../../../redux/wishlistSlice'
import './detiles.css';
export default function Detiles() {
  const product=useSelector((state)=> state.productes);
  console.log(product)
  const dispatch = useDispatch();



  return<section>
        <div className='informatin-of-product'>
            <h5>product.title</h5>
            <p>السعر:<span className='price'>product.price دينار</span></p>
            <p>اسم الشركة :<span className='company'>اوتو جي</span></p>
            <p className='detile'> product.description</p>
        </div>
        <div className='control-btn'>
          <div className='btn-add-to-cart'>
            <button onClick={()=> dispatch(addToCart(product))}>اضف الى السلة</button>
            
            <div class='qty-wishlist'>
              <div className='dec-inc-btn'>
                <button className="qty-btn" onClick={()=> dispatch(addToCart(product))} ><i className="fas fa-caret-up"></i></button>
                <button className="qty-btn" onClick={()=> dispatch(decreaseQty(product))}  ><i className="fas fa-caret-down"></i></button>
             </div>
            <span className="qty-span">productqty</span>
          </div>
          </div>

          <div className='btn-add-to-wishlist'>
            <button onClick={()=> dispatch(addToWishList(product))}>اضف الى قائمة الرغبات</button>
            <select>
              <option>يوجد ضمان </option>
              <option>لا </option>
              <option>نعم </option>
            </select>
          </div>
        </div>
    </section>
  
}
