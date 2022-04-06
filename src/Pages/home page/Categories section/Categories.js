import React, { useEffect, useRef, useState } from 'react'
import './categories.css';
import { motion } from 'framer-motion';
import { useDispatch ,useSelector} from 'react-redux';
import { getTypeProducts } from '../../../redux/showAllSlice';
import { useNavigate } from 'react-router';

export default function Categories() {
     const items=useSelector(state=> state.product.type);
     const dispatch=useDispatch();
     const navigate=useNavigate()
     const[width,setWidth]=useState(0);
     const carousal=useRef();
    useEffect(()=>{
      console.log(carousal.current.scrollWidth)
      setWidth(carousal.current.scrollWidth-carousal.current.offsetWidth)
    },[])
    const showAllProducts =(e)=>{
        dispatch(getTypeProducts(e.target.value))
        navigate('./products')
      
        
    }
    return<div className='category-content'>
    <motion.div ref={carousal} className='carousal' whileTap={{cursor:"grabbing"}}>
        <motion.div drag='x'dragConstraints={{right:0,left:-width}} className='inner-carousal'>
            {items.map((item,index)=>(
        
             <motion.div  key={index} className='carousal-item'>
                <img src={item.image} alt={item.namw}/>
               <button onClick={showAllProducts} value= {item.name}>{item.name}</button>
             </motion.div>
           ))}
        </motion.div>
</motion.div>
</div> 
    
}