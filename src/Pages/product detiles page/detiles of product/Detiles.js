import React from 'react';
import {useDispatch } from 'react-redux';
import { decreaseQty,addToCart} from '../../../redux/cartSlice';
import { addToWishList } from '../../../redux/wishlistSlice'
import './detiles.css';
export default function Detiles() {
  const product=JSON.parse(localStorage.getItem("product"));
  
  const dispatch = useDispatch();



  return<section>
        <div className='informatin-of-product'>
            <h5>{product.name}</h5>
            <p>السعر:<span className='price'>{product.price} دينار</span></p>
            <p>اسم الشركة :<span className='company'>{product.company.name}</span></p>
            <p className='detile'> {product.description}</p>
        </div>
        <div className='control-btn'>
          <div className='btn-add-to-cart'>
            <button onClick={()=> dispatch(addToCart(product.id))}>اضف الى السلة</button>
            
            
          </div>

          <div className='btn-add-to-wishlist'>
            <button onClick={()=> dispatch(addToWishList(product.id))}>اضف الى قائمة الرغبات</button>
            <select>
              <option>يوجد ضمان </option>
              <option>لا </option>
              <option>نعم </option>
            </select>
          </div>
        </div>
    </section>
  
}
