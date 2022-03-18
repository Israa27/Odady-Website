import React, { useEffect, useState } from 'react'
import charging from '../../../Assets/images/charging.png'  ;
import tools from '../../../Assets/images/tools.png' ;
import electricity from '../../../Assets/images/electricity.png' ;
import welding from '../../../Assets/images/welding.png' ;
import './navs.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {viweAllProducts} from '../../../redux/showAllSlice'
export default function Navs() {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const[toggleMenu,setToggleMenu]=useState(false);
  const[screenWidth,setScreenWidth]=useState((window.innerWidth))
  const toggleNavs=()=>{
    setToggleMenu(!toggleMenu)
  }
  useEffect(()=>{
    const changeWidth=()=>{
      setScreenWidth(window.innerWidth)
  }
    window.addEventListener('resize',changeWidth)

    return ()=>{
      window.addEventListener('resize',changeWidth)
    }
  },[])

const fatchCategory=(e)=>{
  dispatch(viweAllProducts(`category=${e.target.innerText}`))
  navigate('/products')
  console.log(e.target.innerText)
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
              <div className='navs frist'>
                <a onClick={fatchCategory} href='#'>اجهزة كهربائية </a>
                <img src={electricity} alt=''/>
              </div>
              
              <div className='navs'>
                <a onClick={fatchCategory} href='#'>ادوات لحام</a>
                <img src={welding}  alt=''/>
              </div>
              <div className='navs'><a onClick={fatchCategory} href='#'>اجهزة شحن</a>
              <img src={charging}/></div>
              <div className='navs'><a onClick={fatchCategory} href='#'>عدد يدوية</a>
              <img src={tools}  alt=''/></div>
              </div>
              )}
       </div>
    )
}
