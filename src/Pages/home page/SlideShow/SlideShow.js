import React from 'react'
import { Carousel } from 'react-bootstrap';
import './slide.css';
import sliderimg1 from '../../../Assets/images/5.png';
import sliderimg2 from '../../../Assets/images/6.png';
import sliderimg3 from '../../../Assets/images/TOTAL.png';
export default function SlideShow() {
    return (
        <div>
        <Carousel className='carousel'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderimg1}
              alt="First slide"
            />
           
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderimg2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderimg3}
              alt="Third slide"
            />
          </Carousel.Item>
      </Carousel>
        </div>
    )
}
