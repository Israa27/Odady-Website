import React  from 'react'
import ProductCard from '../../../Components/Card/ProductCard';
import img from '../../../Assets/images/empty_product.png';
import './products.css';

export default function ({currentProducts,filters}) {
 
 return (
    <div className='list-items'>
       {filters.length===0 ?(
            <div className='product-empty'>
              <img src={img} alt="card-empty"/>
              <h5>لا يوجد منتجات </h5 >
              </div>
          ):(
          <div className='products-list'>
          
    
          {currentProducts.map((item)=>{
              
              return <ProductCard product={item} id={item.id} name={item.name} image={item.images[0].image } price={item.price} key={item.id} />
            })}
        
          </div>
       )}
          


          </div>
  )
}
