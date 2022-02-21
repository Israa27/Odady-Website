import React, { useState } from 'react'
import './categories.css';
import {Link} from 'react-router-dom';
import img1 from '../../../Assets/images/1v.png';
import img2 from '../../../Assets/images/2.png';
import img3 from '../../../Assets/images/3.png';
import img4 from '../../../Assets/images/4.png';
import img5 from '../../../Assets/images/5v.png';
import img6 from '../../../Assets/images/6v.png';
import img7 from '../../../Assets/images/7v.png';
import { useSelector } from 'react-redux';
export default function Categories() {
    const items=useSelector(state=> state.products.items);
    const[data,setData]=useState(items);
    const filterCategory=(products)=>{
        const result=items.filter((crrentData)=>{
            return crrentData.category===products
        });
        setData(result)
        console.log(data)
    }
    return (
       
        <div className='category-content'>
           <div className='category-grid'>
               <div className='category-card'>
                   <img src={img1}/>
                   <button >كوسرا</button>
               </div>

               <div className='category-card'>
                   <img src={img2}/>
                   <button onClick={()=>filterCategory("electronics")} component={Link} to='/products'>كوسرا شحن</button>
               </div>

               <div className='category-card'>
                   <img src={img3}/>
                   <button component={Link} to='/product'>منشار تخريم</button>
               </div>
               <div className='category-card'>
                   <img src={img4}/>
                   <button component={Link} to='/product'>مولدات</button>
               </div>
               <div className='category-card'>
                   <img src={img5}/>
                   <button component={Link} to='/product'>دريل</button>
               </div>
               <div className='category-card'>
                   <img src={img6}/>
                   <button component={Link} to='/product'>ادوات لحام</button>
               </div>
               <div className='category-card'>
                   <img src={img7}/>
                   <button component={Link} to='/product'>ماطورات</button>
               </div>
           </div>
        </div>
        
    )
}
