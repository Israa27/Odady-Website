import React  from 'react'
import ProductCard from '../../../Components/Card/ProductCard';
import img from '../../../Assets/images/empty_product.png';
import './products.css';
import { useSelector } from 'react-redux';
import SpinnerLoading from '../../../Components/spinner/SpinnerLoading';

export default function ({currentProducts,filters}) {
 const loading=useSelector((state)=>state.all.isLoading)
 return (<div className='product-content'>
   {loading===true?(
     <div className='loading'>
     <SpinnerLoading/>
     </div>
   ):(
    <div className='list-items'>
       {filters.length===0 || filters.length===[]?(
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
  
 )}
 </div>
 )
}
