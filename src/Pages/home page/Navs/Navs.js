import React, { useEffect, useState } from 'react'
import charging from '../../../Assets/images/charging.png'  ;
import tools from '../../../Assets/images/tools.png' ;
import electricity from '../../../Assets/images/electricity.png' ;
import welding from '../../../Assets/images/welding.png' ;
import './navs.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {categoryProducts, viweAllProducts} from '../../../redux/showAllSlice'
import { getCategory } from '../../../redux/products/productsSlice';
export default function Navs() {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const category=useSelector((state)=>state.product.category)
  const[toggleMenu,setToggleMenu]=useState(false);
  const[screenWidth,setScreenWidth]=useState((window.innerWidth))
  const images=[tools,electricity,charging,welding]
  const toggleNavs=()=>{
    setToggleMenu(!toggleMenu)
  }
  useEffect(()=>{
    dispatch(getCategory())
    const changeWidth=()=>{
      setScreenWidth(window.innerWidth)
  }
    window.addEventListener('resize',changeWidth)

    return ()=>{
      window.addEventListener('resize',changeWidth)
    }
  },[])

const fatchCategory=(id)=>{
  dispatch(categoryProducts(id))
  navigate('/products')
 
}

    return (
        <div className="item-nav">
          <div onClick={ toggleNavs} className='navs-collapse  '>
          <i className="fas fa-bars"></i>
              <span >الفئات
              </span>
              </div>
              {(toggleMenu || screenWidth > 600 ) &&(
             <div className='navs-content '>
               {category.map((item,index)=>(
                
                 <div className='navs' key={index}>
                   <span onClick={()=> fatchCategory(item.id) } id={item.id}>{item.name}</span>
                   <img src={images[index]} key={index} alt={item.name} />
                  
                 
                  </div>
                  
               ))}
              </div>
              )}
       </div>
    )
}
