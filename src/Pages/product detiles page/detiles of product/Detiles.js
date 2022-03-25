import React, { useEffect} from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import {useDispatch, useSelector } from 'react-redux';
import { addToCart,getCartItems} from '../../../redux/cartSlice';
import { addToWishList,getWishListItems } from '../../../redux/wishlistSlice'
import {getProductDetails} from '../../../redux/products/productsSlice'
import './detiles.css';
export default function Detiles() {
  const product=useSelector((state)=> state.product.product_deitals); 
  const dispatch = useDispatch();
  const error=useSelector((state)=> state.wishlist.error)
  const cartError=useSelector((state)=> state.cart.error)
  const navigate = useNavigate();
  const hadleAddToCart=(id)=>{
    if ( cartError===500){
      Swal.fire({
        icon: 'error',
        title: 'عذرا لا يمكن اضافة منتج قبل تسجيل الدخول',
        text: 'يرجى تسجيل الدخول  ',

        
        }).then(function() {
        window.location = "/login";
      })
    }else{

      dispatch(addToCart(id));
      dispatch(getCartItems());
    }
  }
  
  const hadleAddToWishList=(id)=>{
    if (error===500){
      Swal.fire({
        icon: 'error',
        title: 'عذرا لا يمكن اضافة منتج قبل تسجيل الدخول',
        text: 'يرجى تسجيل الدخول  ',

        
        }).then(function() {
        window.location = "/login";
      })
    }
    else{
      dispatch(addToWishList(id));
      dispatch(getWishListItems())
    }
      
  };
  useEffect(async () => {
    if(product){
      dispatch(getProductDetails())
    }
  }, [product,dispatch]);

  return<section>
    
      
        <div className='informatin-of-product'>
            <h5>{product.name}</h5>
            <p>السعر:<span className='price'>{product.price} دينار</span></p>
            <p>اسم الشركة :<span className='company'>{product.company.name}</span></p>
            <p className='detile'> {product.description}</p>
        </div>
        <div className='control-btn'>
          <div className='btn-add-to-cart'>
            <button onClick={()=>hadleAddToCart(product.id)}>اضف الى السلة</button>
            
            
          </div>

          <div className='btn-add-to-wishlist'>
            <button onClick={()=>hadleAddToWishList(product.id)}>اضف الى قائمة الرغبات</button>
            <select>
              <option>يوجد ضمان </option>
              <option>لا </option>
              <option>نعم </option>
            </select>
          </div>
        </div>
     
     
       
        
        
    </section>
  
}
