import React ,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { CheckOut } from '../../../redux/order/orderSlice';
export default function () {
    const dispatch=useDispatch()
    const[value,setValue]=useState('');
    console.log(String(value))
    const handleSubmit=()=>{
        dispatch(CheckOut(JSON.parse(value)))
    }
  return<div className='delivery'>
       <hr/>
       <p>الشحن</p>  
    <div className="price-radio">
        <div className='radio'>
            <input type='radio' id='radio1' value='true' onChange={(e)=>setValue(e.target.value)} checked={value ==='true'}/>
             <label  htmlFor='radio1'>داخل بغداد : 5000 دينار</label>
        </div>

        <div className='radio'>
            <input type='radio' id='radio2' value='false' onChange={(e)=>setValue(e.target.value)} checked={value ==='false'}/>
            <label htmlFor='radio2'> باقي المحافظات : 8000 دينار</label>
        </div>           
    </div>

     <button className='btn-delivery' onClick={()=>handleSubmit()}>ارسال</button>
  </div>
}
