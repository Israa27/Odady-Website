import React from 'react'
import './offers.css';
import img1 from '../../../Assets/images/img2.jpg';
import img2 from '../../../Assets/images/img1.jpg';
import ProductCard from '../../../Components/Card/ProductCard';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
export default function Offers() {
    const {items,status}=useSelector(state=> state.products);
    return (
        <section className='offers'>
        <Container>
          <div className='header'>
              <h5>عروض وخصومات</h5>
          </div>
          <div className='offer-content'>
              <div className='offer'>
                  <div className='offer-text'>
                  <p>عروض
                     خاصة</p>
                  <button>تسوق الان</button>
                  </div>
                  <img src={img1} alt='' />
              </div>
              <div className='offer'>
                  <img src={img2} alt='' />
                  <div className='offer-text last'>
                    <p>خضم <span>يصل الى </span>
                        30%
                    </p>
                    <button>تسوق الان</button>
                </div>
              </div>
          </div>
          <div className='products'>
          {items.slice(0, 4).map((item)=>{
              
              return <ProductCard products={item} id={item.id} name={item.title} image={item.image} price={item.price} key={item.id} />

            })}
          </div>
          </Container>
        </section>
        
    )
}
