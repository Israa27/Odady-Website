import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import ProductCard from '../../../Components/Card/ProductCard';
import '../best-selling/bastSelling.css';
import { BASE_URL } from '../../../Helpers/Constants';
import { useSelector,useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router';
import { viweAllProducts } from '../../../redux/showAllSlice';

export default function NewlyProducts() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const items=useSelector((state)=> state.product.popular_products);
 

  const showAllProducts =(e)=>{
       dispatch(viweAllProducts(e.target.value))
       navigate('/products') 
  }
  
   
  return (
      <section className='best-selling'>
        <Container >
        <div className=' header'>
         
          <h5>المنتجات المضافة حديثا</h5>
          <button onClick={ showAllProducts } value='popular=true' >  عرض المزيد <i className="fas fa-chevron-left"></i></button>
          
        </div>
    
    
       <div className='products'>

       {items.slice(0,4).map((item)=>{
              
              return <ProductCard product={item} id={item.id} name={item.name} image={item.images[0].image } price={item.price} key={item.id} />
            })}
            
         </div>
         </Container>
         </section>
        
    )
}
