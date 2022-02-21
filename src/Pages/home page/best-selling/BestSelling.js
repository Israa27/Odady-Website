import React from 'react'
import { Container } from 'react-bootstrap';
import ProductCard from '../../../Components/Card/ProductCard';
import './bastSelling.css';
import { useSelector } from 'react-redux';
export default function BestSelling() {
  const {items,status}=useSelector(state=> state.products);
  console.log(items.products)
  return (
    
      <section className='best-selling'>
        <Container>
          <div className=' header'>
           
            <h5>المنتجات الاكثر مبيعا</h5>
            <button>  عرض المزيد <i className="fas fa-chevron-left"></i></button>
            
          </div>
      
       
         <div className='products'>
         {items.slice(0, 4).map((item)=>{
              
              return <ProductCard product={item} id={item.id} name={item.title} image={item.image} price={item.price} key={item.id} />

            })}
            
         

              
             
              
      
           </div>
        
           </Container>
           </section>
       
    )
}
