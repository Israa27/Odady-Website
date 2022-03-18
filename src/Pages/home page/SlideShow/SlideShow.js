import React ,{useEffect} from 'react'
import { Carousel } from 'react-bootstrap';
import './slide.css';
import sliderimg1 from '../../../Assets/images/5.png';
import sliderimg2 from '../../../Assets/images/6.png';
import sliderimg3 from '../../../Assets/images/TOTAL.png';
import { useDispatch } from 'react-redux';
import {viweAllProducts} from '../../../redux/showAllSlice';
import { useNavigate } from 'react-router-dom';
export default function SlideShow() {
  const navigate = useNavigate();
  const dispatch=useDispatch();

    const showAllProducts =(e)=>{
      dispatch(viweAllProducts(`company=${e.target.name}`))
      navigate('/products')
    
  }
    
    return (
        <div>
        <Carousel className='carousel'>
          <Carousel.Item>
           
            <img
              className="d-block w-100"
              src={sliderimg1}
              alt="ٌ
              شركة INGCO الصينية"
              name= "شركة INGCO الصينية"
             
              onClick={showAllProducts }
            />
          
          </Carousel.Item>
          <Carousel.Item>
          
            <img
            onClick={ showAllProducts }
              className="d-block w-100"
              src={sliderimg2}
              alt="شركة CROWN السويسرية"
              name= "شركة CROWN السويسرية"
              
              
            />
           
          </Carousel.Item>
          <Carousel.Item>
           
            <img
              className="d-block w-100"
              src={sliderimg3}
              alt="Caterpillar"
              name=' Caterpillar'
              onClick={showAllProducts }
             
            />
           
           
          </Carousel.Item>
      </Carousel>
        </div>
    )
}
