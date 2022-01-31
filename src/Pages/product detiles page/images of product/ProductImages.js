import React, { useState } from 'react';
import './productImages.css';
import img from '../../../Assets/images/cardimg.png';
import img2 from '../../../Assets/images/12.png';
import img3 from '../../../Assets/images/13.png';
import img4 from '../../../Assets/images/14.png';

export default function ProductImages() {
  const images=[img,img2,img3,img4 ];
  const [index,setIndex]=useState(0);
  const handelIamge= item=>{
    setIndex(item)
  }
  
  return(
  <div className='grid-img'>
      <div className='other-img'>
     {images.map((img,index)=>(
      <div className='show-img'>    
        <img key={index} src={img} alt='' 
         onClick={()=> handelIamge(index)}/>
      </div>
      ))}
          
         

           
        
      
      </div>
      
      <div className='main-img'>
      
        <img src={images[index]} alt='' />
    
      </div>
     
  </div>
  )
}
