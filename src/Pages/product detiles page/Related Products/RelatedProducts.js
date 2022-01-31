import React from 'react'
import { Container } from 'react-bootstrap';
import ProductCard from '../../../Components/Card/ProductCard';
export default function RelatedProducts() {
    return (
        <section >
          <Container >
          <div className=' header'>
            <h5>منتجات ذات صلة</h5>
          </div>
      
      
         <div className='products'>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         </div>
         </Container>
         </section>
        
    )
}