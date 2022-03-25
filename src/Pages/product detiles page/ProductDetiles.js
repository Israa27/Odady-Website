import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SecondaryNav from '../../Components/secondary navbar/SecondaryNav';
import Detiles from './detiles of product/Detiles';
import ProductImages from './images of product/ProductImages';
import './productDetiles.css';
import RelatedProducts from './Related Products/RelatedProducts';
import TabInf from './tabs information/TabInf';
import {useDispatch, useSelector } from 'react-redux';
import {getProductDetails} from '../../redux/products/productsSlice'
import SpinnerLoading from '../../Components/spinner/SpinnerLoading'
export default function ProductDetiles() {
  const dispatch = useDispatch();
  const product=useSelector((state)=> state.product.product_deitals);
  useEffect (() => {
    dispatch(getProductDetails());
  }, [product,dispatch]);
  return <div>
      
      <SecondaryNav name={product?.name || 'تفاصيل المنتج'}/>
      <section className='product-detiles' >
        <Container >
          {product.length === 0?(
          <div>
            <SpinnerLoading/>
          </div>)
          :(
          <div className='flex items-center justify-between'>
          <Detiles />
          <ProductImages />
         </div>
          )}
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
