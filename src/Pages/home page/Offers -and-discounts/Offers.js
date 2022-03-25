import React, { useCallback, useEffect } from 'react'
import './offers.css';
import ProductCard from '../../../Components/Card/ProductCard';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPromotionProducts } from '../../../redux/showAllSlice';
import { useNavigate } from 'react-router';
export default function Offers() {
    const items=useSelector((state)=> state.product.popular_products);
    const promotion=useSelector((state)=> state.product.promotion)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleSubmit=(id)=>{
       dispatch(getPromotionProducts(id))
       navigate('/products')
       
     
    }
  
    return (
        <section className='offers'>
        <Container className='flex-column'>
          <div className='header'>
              <h5>عروض وخصومات</h5>
          </div>
          <div className='offer-content'>
                  {promotion.map((item,index)=>(
                      <div key={index} className='offer'>
                          <img src={item.image} alt={item.name} id={item.id} />
                          <button onClick={()=>handleSubmit(item.id)}>تسوق الان</button>

                      </div>
                  ))}
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
