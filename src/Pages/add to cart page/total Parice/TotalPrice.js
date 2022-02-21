import React,{useEffect, useState} from 'react'
import './total.css';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTotalPrice } from '../../../redux/cartSlice';
export default function TotalPrice() {
  const navigate = useNavigate();
  const cart=useSelector((state)=> state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getTotalPrice())
  },[cart,dispatch]);

  const[value,setValue]=useState('');
  
    return (
        <div className="total-amount-price">
          <h4>اجمالي سلة المشتريات</h4>
          <div className="temporary-amount-price">
              <p>المجموع </p>
              <span className='span-price'>{cart.totalPrice} دينار</span>
          </div>
          <hr/>
          <div className="price-radio-btn">
              <p>الشحن</p>
              <div className='radio'>
                  <input type='radio' id='radio1' value='5' onChange={(e)=>setValue(e.target.value)} checked={value ==='5'}/>
                  <label  for ='radio1'>داخل بغداد : 5000 دينار</label>
               </div>
               <div className='radio'>
                  <input type='radio' id='radio2' value='8' onChange={(e)=>setValue(e.target.value)} checked={value ==='8'}/>
                  <label for ='radio2'> باقي المحافظات : 8000 دينار</label>
                </div>
                <div className='radio'>
                  <input type='radio' id='radio3' value='0' onChange={(e)=>setValue(e.target.value)} checked={value === '0'}/>
                  <label  for ='radio3'>الشحن المجاني</label>
                </div>
                <span className='price-span2'>سيتم تحديث الخيارات الشحن اثناء السداد</span>
                  
                <hr/>
          </div>
          <div className="temporary-amount-price ">
              <p>الاجمالي</p>
              <span className='span-price'>{cart.totalPrice + (+value)} دينار</span>
          </div>
          <button className="btn-amount"onClick={()=>navigate('/checkout') }>اتمام الطلب</button>
        </div>
    )
}
