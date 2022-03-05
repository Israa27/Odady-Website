import React from 'react'
import { Carousel } from 'react-bootstrap';
import './slide.css';
import sliderimg1 from '../../../Assets/images/5.png';
import sliderimg2 from '../../../Assets/images/6.png';
import sliderimg3 from '../../../Assets/images/TOTAL.png';
import { useDispatch } from 'react-redux';
import {viweAllProducts} from '../../../redux/showAllSlice';
import { Link } from 'react-router-dom';
export default function SlideShow() {
  const dispatch=useDispatch();
 
    const showAllProducts =(e)=>{
      dispatch(viweAllProducts(e.target.name))
    
  }
    
    return (
        <div>
        <Carousel className='carousel'>
          <Carousel.Item>
            <Link  to='/products'>
            <img
              className="d-block w-100"
              src={sliderimg1}
              alt="ٌiron"
              name= "company=iron"
             
              onClick={showAllProducts }
            />
           </Link>
          </Carousel.Item>
          <Carousel.Item>
          <Link  to='/products '  >
            <img
            onClick={ showAllProducts }
              className="d-block w-100"
              src={sliderimg2}
              alt="شركة CROWN السويسرية"
              name= "company=شركة CROWN السويسرية"
              
              
            />
           </Link>
          </Carousel.Item>
          <Carousel.Item>
           <Link to='/products '>
            <img
              className="d-block w-100"
              src={sliderimg3}
              alt="Caterpillar"
              name='company=Caterpillar'
              onClick={showAllProducts }
             
            />
            </Link>
           
          </Carousel.Item>
      </Carousel>
        </div>
    )
}
