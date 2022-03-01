import React, { useState } from 'react'
import './categories.css';
import {Link,useLocation} from 'react-router-dom';
import img1 from '../../../Assets/images/1v.png';
import img2 from '../../../Assets/images/2.png';
import img3 from '../../../Assets/images/3.png';
import img4 from '../../../Assets/images/4.png';
import img5 from '../../../Assets/images/5v.png';
import img6 from '../../../Assets/images/6v.png';
import img7 from '../../../Assets/images/7v.png';
import { useDispatch, useSelector } from 'react-redux';
import { getSubCategory } from '../../../redux/catgoriesSlice';
export default function Categories() {
    const items=useSelector(state=> state.products.items);
    const dispatch=useDispatch();
    const[data,setData]=useState(items);
    const location=useLocation();
    const showAllProducts =(e)=>{
        //dispatch(viweAllProducts(e.target.value))
        console.log(e.target.value)
      
        
    }
    return (
       
        <div className='category-content'>
           <div className='category-grid'>
               <div className='category-card'>
                   <img src={img1} alt=''/>
                   <button >كوسرا</button>
               </div>

               <div className='category-card'>
                   <img src={img2} alt=''/>
                   <button onClick={showAllProducts}  value='f333' component={Link} to='/products'>كوسرا شحن</button>
               </div>

               <div className='category-card'>
                   <img src={img3} alt=''/>
                   <button onClick={showAllProducts} value='fff' component={Link} to='/product'>منشار تخريم</button>
               </div>
               <div className='category-card'>
                   <img src={img4} alt=''/>
                   <button onClick={showAllProducts}  value='f333' component={Link} to='/product'>مولدات</button>
               </div>
               <div className='category-card'>
                   <img src={img5} alt=''/>
                   <button onClick={showAllProducts}  value='f333' component={Link} to='/product'>دريل</button>
               </div>
               <div className='category-card'>
                   <img src={img6} alt=''/>
                   <button onClick={showAllProducts}   component={Link} to='/product'>ادوات لحام</button>
               </div>
               <div className='category-card'>
                   <img src={img7} alt=''/>
                   <button onClick={showAllProducts}  value='f333' component={Link} to='/product'>ماطورات</button>
               </div>
           </div>
        </div>
        
    )
}
