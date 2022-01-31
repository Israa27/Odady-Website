import React from 'react';
import Navbar from '../../Components/Navbar/Navber';
import Footer from '../../Components/Footer/Footer';
import ProductCard from '../../Components/Card/ProductCard';
import SecondaryNav from '../../Components/secondary navbar/SecondaryNav';
import { Container } from 'react-bootstrap';
import './product.css';
import {CartState} from '../../contexts/Cart/Context';

export default function Product() {
  const{
    state:{products},
}= CartState();
  return <div>
      <Navbar />
       <SecondaryNav name='المنتجات'/>
         <Container>
          <div className='filter-items'>
            <select>
              <option>الترتيب الافتراضي</option>
              <option>الترتيب حسب الشهرة</option>
              <option>ترتيب حسب معدل التقييم</option>
              <option>ترتيب حسب الأحدث</option>
              <option>ترتيب حسب: الأدنى سعراً للأعلى</option>
              <option>ترتيب حسب: الأعلى سعراً للأدنى</option>
            </select>
          </div>
         <div className='list-items'>
         {products.map((item)=>{
                
                return <ProductCard name={item.name} image={item.image} price={item.price} key={item.id} />

              })}
          </div>
        </Container>
  
      <Footer />
  </div>;
}
