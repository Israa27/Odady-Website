import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fatchProduct } from '../../../redux/singleProductSlice';
import { addToCart } from '../../../redux/cartSlice';
import { addToWishList } from '../../../redux/wishlistSlice'
import './detiles.css';
export default function Detiles() {
  const product=useSelector((state)=> state.product_id.item);
  console.log(product)
  const dispatch = useDispatch();

  const hadleChange=(product)=>{
    dispatch(addToWishList(product));
    
  }

  return<section>
        <div className='informatin-of-product'>
            <h5>{product.title}</h5>
            <p>السعر:<span className='price'>{product.price} دينار</span></p>
            <p>اسم الشركة :<span className='company'>اوتو جي</span></p>
            <p className='detile'> {product.description}</p>
        </div>
        <div className='control-btn'>
          <div className='btn-add-to-cart'>
            <button onClick={()=> dispatch(addToCart(product))}>اضف الى السلة</button>
            <input type='number' />
          </div>
          <div className='btn-add-to-wishlist'>
            <button onClick={()=>hadleChange(product)}>اضف الى قائمة الرغبات</button>
            <select>
              <option>يوجد ضمان </option>
              <option>لا </option>
              <option>نعم </option>
            </select>
          </div>
        </div>
    </section>
  
}
