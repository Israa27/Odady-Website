import React from 'react'
import charging from '../../../Assets/images/charging.png'  ;
import tools from '../../../Assets/images/tools.png' ;
import electricity from '../../../Assets/images/electricity.png' ;
import welding from '../../../Assets/images/welding.png' ;
import './navs.css';
export default function Navs() {
    return (
        <div className="item-nav">
              <div className='navs'>
                <a href='#'>اجهزة كهربائية </a>
                <img src={electricity}/>
              </div>
              
              <div className='navs'>
                <a href='#'>ادوات لحام</a>
                <img src={welding}/>
              </div>
              <div className='navs'><a href='#'>اجهزة شحن</a>
              <img src={charging}/></div>
              <div className='navs'><a href='#'>عدد يدوية</a>
              <img src={tools}/></div>
       </div>
    )
}
