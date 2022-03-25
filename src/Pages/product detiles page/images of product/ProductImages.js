import React, { useEffect, useState } from 'react';
import './productImages.css';

import {getProductDetails} from '../../../redux/products/productsSlice'
import { useSelector,useDispatch } from 'react-redux';

export default function ProductImages() {
  const images=useSelector((state)=> state.product.product_deitals.images);
  const [index,setIndex]=useState(0);
  const dispatch = useDispatch();
  const handelIamge= item=>{
    setIndex(item)
  }
  
  useEffect(async () => {
    if(images){

      dispatch(getProductDetails())
    }
  }, [images,dispatch]);

  return(
  <div className='grid-img'>
      <div className='other-img'>
     {images.map((img,index)=>(
      <div className='show-img'>    
        <img key={index} src={images[index].image} alt='' 
         onClick={()=> handelIamge(index)}/>
      </div>
      ))}
          
         

           
        
      
      </div>
      
      <div className='main-img'>
      
        <img src={images[index].image} alt='' />
    
      </div>
     
  </div>
  )
}
