import React from 'react'
import { Container } from 'react-bootstrap';
import ProductCard from '../../../Components/Card/ProductCard';
import './relatedProducts.css';
import { useSelector } from 'react-redux';
export default function RelatedProducts() {
  const {items,status}=useSelector(state=> state.products);
    return (
        <section className='related-products'>
          <Container >
          <div className=' header'>
            <h5>منتجات ذات صلة</h5>
          </div>
      
      
         <div className='products'>
         {items.slice(0, 4).map((item)=>{
              
              return <ProductCard id={item.id} product={item} name={item.title} image={item.image} price={item.price} key={item.id} />

            })}
         </div>
         </Container>
         </section>
        
    )
}