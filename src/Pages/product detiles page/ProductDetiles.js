import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navber';
import SecondaryNav from '../../Components/secondary navbar/SecondaryNav';
import Detiles from './detiles of product/Detiles';
import ProductImages from './images of product/ProductImages';
import './productDetiles.css';
import RelatedProducts from './Related Products/RelatedProducts';
import TabInf from './tabs information/TabInf';
import { useSelector } from 'react-redux';
export default function ProductDetiles() {
  const product=JSON.parse(localStorage.getItem("product"));

  return <div>
      
      <SecondaryNav name={product.name}/>
      <section className='product-detiles' >
        <Container className='flex items-center justify-between'>
          <Detiles />
          <ProductImages />
        </Container>
      </section>
      <section className='tabs'>
        <TabInf />
      </section>
      <section className='related-products'>
        <RelatedProducts />
      </section>
      
  </div>;
}
