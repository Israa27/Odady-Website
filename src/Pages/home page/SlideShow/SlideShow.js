import React from 'react'
import { Carousel } from 'react-bootstrap';
import './slide.css';
import sliderimg1 from '../../../Assets/images/5.png';
import sliderimg2 from '../../../Assets/images/6.png';
import sliderimg3 from '../../../Assets/images/TOTAL.png';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {viweAllProducts} from '../../../redux/showAllSlice';
import { Link } from 'react-router-dom';
export default function SlideShow() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
 
    const showAllProducts =(e)=>{
      dispatch(viweAllProducts(e.target.alt))
      navigate('/products') 
    
  }
    
    return (
        <div>
        <Carousel className='carousel'>
          <Carousel.Item>
            <Link  to=' '>
            <img
              className="d-block w-100"
              src={sliderimg1}
              alt="ٌIngco"
             
              onClick={showAllProducts }
            />
           </Link>
          </Carousel.Item>
          <Carousel.Item>
          <Link  to=' '  >
            <img
            onClick={showAllProducts }
              className="d-block w-100"
              src={sliderimg2}
              alt="Crown"
              
              
              
            />
           </Link>
          </Carousel.Item>
          <Carousel.Item>
           <Link to=' '>
            <img
              className="d-block w-100"
              src={sliderimg3}
              alt="Total"
              
              onClick={showAllProducts }
             
            />
            </Link>
           
          </Carousel.Item>
      </Carousel>
        </div>
    )
}
