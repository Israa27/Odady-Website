import React ,{useEffect} from 'react'
import { Container } from 'react-bootstrap';
import ProductCard from '../../../Components/Card/ProductCard';
import './relatedProducts.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedProducts } from '../../../redux/showAllSlice';
import { useNavigate } from 'react-router';
export default function RelatedProducts() {
  const dispatch= useDispatch();
  const  navigate=useNavigate()
  const items=useSelector(state=>state.all.all_products);
  const handleShow=()=>{
    dispatch(getRelatedProducts())
    navigate('/products')
  }
  useEffect(async () => {
    if(items){
     
    }
  }, [items,dispatch]);
    return (
        <section className='related-products'>
          <Container >
          <div className=' header'>
            <h5 onClick={()=>handleShow()}>منتجات ذات صلة</h5>
          </div>
      
      
         <div className='products'>
         {items.slice(0, 4).map((item)=>{
              
              return <ProductCard id={item.id} product={item} name={item.name} image={item.images[0].image} price={item.price} key={item.id} />

            })}
         </div>
         </Container>
         </section>
        
    )
}