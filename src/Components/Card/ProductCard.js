import React, { useEffect } from 'react'
import './card.css';
import { Card} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { useState } from 'react';
import { addToWishList } from '../../redux/wishlistSlice';
import { Link, useNavigate,useParams} from 'react-router-dom';
import { getProductDetails } from '../../redux/products/productsSlice';

export default function ProductCard({id,product,name,image, price}) {

  const[state,setstate]=useState(false);
  const [item,setItem]=useState({});
  const navigate = useNavigate();
  const dispatch=useDispatch();
  
  const hadleAddToCart=(product)=>{
    dispatch(addToCart(product));
   

  

  }
  
  const hadleChange=(product)=>{
    dispatch(addToWishList(product));
    setstate(true)
  };
  const hadleChangeImg=(product_id)=>{
    dispatch(getProductDetails(product_id));
    console.log(product_id)
  }
 

  
    return (
       
          <Card className='card'>
            <button className='card-btn' onClick={()=> dispatch(hadleChange(product))}>{state ? <i className="fas fa-heart"></i>:<i className="far fa-heart"></i>
            }
            </button>
            <Link to={`/product_detiles/${id}`}>
             <Card.Img variant="top"onClick={()=>hadleChangeImg(id) } src={image} alt={name} />
            </Link>
            <Card.Body>
            <Card.Title className="card-span">{name} </Card.Title>
            <Card.Text className="card-span1">
                    {price} دينار
            </Card.Text>
             <button className='card-add-to-btn' onClick={()=>hadleAddToCart(product)}>اضف الى السلة</button>
            </Card.Body>
          </Card>
        

        

  
    )
}
