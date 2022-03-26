import React ,{useEffect} from 'react'
import { Carousel } from 'react-bootstrap';
import './slide.css';
import sliderimg1 from '../../../Assets/images/5.png';
import sliderimg2 from '../../../Assets/images/6.png';
import sliderimg3 from '../../../Assets/images/TOTAL.png';
import { useDispatch, useSelector } from 'react-redux';
import {compnayProducts, viweAllProducts} from '../../../redux/showAllSlice';
import { useNavigate } from 'react-router-dom';
export default function SlideShow() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const company=useSelector((state)=>state.product.company)
    const showAllProducts =(id)=>{
      dispatch(compnayProducts(id))
      navigate('/products')
    
  }
    
    return (
        <div>
        <Carousel className='carousel'>
          {company.map((item,index)=>(
           <Carousel.Item key={index}>
           
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.name}
              id={item.id}
              onClick={()=> showAllProducts(item.id) }
            />
             </Carousel.Item>
          ))}
         </Carousel>
        </div>
    )
}
