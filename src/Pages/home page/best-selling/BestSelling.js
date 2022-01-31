import React from 'react'
import { Container } from 'react-bootstrap';
import ProductCard from '../../../Components/Card/ProductCard';
import './bastSelling.css';
export default function BestSelling({props}) {
 
    return (
      
        <section className='best-selling'>
          <Container>
            <div className=' header'>
             
              <h5>المنتجات الاكثر مبيعا</h5>
              <button>  عرض المزيد <i className="fas fa-chevron-left"></i></button>
              
            </div>
        
        
           <div className='products'>
              {props.slice(0, 4).map((item)=>{
                
                return <ProductCard name={item.name} image={item.image} price={item.price} key={item.id} />

              })}
             

              
             
              
      
           </div>
           </Container>
           </section>
       
    )
}
