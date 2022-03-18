import React ,{useCallback, useEffect} from 'react'
import './card.css';
import Swal from 'sweetalert2'
import { Card} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToWishList ,getWishListItems} from '../../redux/wishlistSlice';
import {  useNavigate} from 'react-router-dom';
import { getProductDetails } from '../../redux/products/productsSlice';
import {addToCart, getCartItems } from '../../redux/cartSlice';

export default function ProductCard({id,product,name,image, price}) {
  const[state,setstate]=useState(false);
  const navigate = useNavigate();
  const dispatch=useDispatch();


  const hadleAddToCart=(id)=>{
      dispatch(addToCart(id));
      dispatch(getCartItems());
  }
  
  const hadleAddToWishList=(id)=>{
      dispatch(addToWishList(id));
      dispatch(getWishListItems())
      setstate(!state)
  };

  const hadleChangeImg=(product_id)=>{
    dispatch(getProductDetails(product_id));
    navigate('/product_detiles')
  }
 

  
    return (
       
          <Card className='card'>
            <button className='card-btn' onClick={()=>hadleAddToWishList(product.id) }>
             <i className= {state ? 'fas fa-heart':'far fa-heart'}></i>      
             </button>
           
             <Card.Img variant="top" onClick={()=>hadleChangeImg(id)} src={image} alt={name} />
            
            <Card.Body>
            <Card.Title className="card-span">{name} </Card.Title>
            <Card.Text className="card-span1">
                    {price} دينار
            </Card.Text>
             <button className='card-add-to-btn' onClick={()=>hadleAddToCart(product.id)}>اضف الى السلة</button>
            </Card.Body>
          </Card>
        

        

  
    )
}
