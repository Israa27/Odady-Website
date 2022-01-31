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
export default function ProductDetiles() {
  return <div>
      <Navbar />
      <SecondaryNav/>
      <section className='product-detiles' >
        <Container className='flex items-center justify-between'>
          <Detiles />
          <ProductImages />
        </Container>
      </section>
      <section className='tabs'>
        <TabInf />
      </section>
      <section>
        <RelatedProducts />
      </section>
      <Footer />
  </div>;
}
