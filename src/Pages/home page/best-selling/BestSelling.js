import React from 'react'
import { Container } from 'react-bootstrap';
import ProductCard from '../../../Components/Card/ProductCard';
import './bastSelling.css';
import { useSelector,useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router';
import { viweAllProducts } from '../../../redux/showAllSlice';

export default function BestSelling() {
  const items=useSelector((state)=> state.product.best_seller_products);
 
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const showAllProducts =(e)=>{
    dispatch(viweAllProducts(e.target.value))
    console.log(e.target.value)
    navigate('/products') 
  
    
}
  
  return (
    
      <section className='best-selling'>
        <Container>
          <div className=' header'>
           
            <h5>المنتجات الاكثر مبيعا</h5>
            <button onClick={ showAllProducts} value="best_seller=true" >  عرض المزيد <i className="fas fa-chevron-left"></i></button>
            
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
