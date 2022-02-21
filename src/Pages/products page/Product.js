import React, { useState ,useEffect}  from 'react';
import Navbar from '../../Components/Navbar/Navber';
import Footer from '../../Components/Footer/Footer';
import ProductCard from '../../Components/Card/ProductCard';
import SecondaryNav from '../../Components/secondary navbar/SecondaryNav';
import { Container } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import './product.css';
import { useSelector } from 'react-redux';
import PaginationPage from './Pagination/PaginationPage';
export default function Product() {
    const products=useSelector((state)=> state.products.items);
    const cart=useSelector(state=> state.cart.cartItems);
   
    const[sort,setSort]=useState("الترتيب الافتراضي");
    const[fliterProducts,setFilterProducts]=useState([]);

    const[currentPage,setCurrentPage]=useState(1);
    const[itemPerPage,setItemPerPage]=useState(5);
    const pages=[];
    for(let i=1;i<=Math.ceil(products.length/itemPerPage);i++){
        pages.push(i);
    };
    const indexOfLastItem=currentPage*itemPerPage;
    const indexOfFisrtItem=indexOfLastItem-itemPerPage;
   const currentItems=fliterProducts.slice(indexOfFisrtItem,indexOfLastItem);

 useEffect(()=>{
  if (sort === "all"){
    setFilterProducts(products)
  }
  else if (sort === "asc") {
    const lowestPriceGoods = products
      .map((product) => product)
      .sort((a, b) => a.price - b.price);;
    setFilterProducts(lowestPriceGoods);
   
  }
 else{
  const lowestPriceGoods = products
      .map((product) => product)
      .sort((a, b) => b.price - a.price);;
    setFilterProducts(lowestPriceGoods);
    
  }
 },[sort])
  return <div>
      <Navbar />
       <SecondaryNav name='المنتجات'/>
         <Container>
          <div className='filter-items'>
            <select onChange={(e)=>setSort(e.target.value)}>
              <option value='all' >الترتيب الافتراضي</option>
              <option value='newest'>ترتيب حسب الأحدث</option>
              <option value='asc'>ترتيب حسب: الأدنى سعراً للأعلى</option>
              <option value='desc'>ترتيب حسب: الأعلى سعراً للأدنى</option>
            </select>
          </div>
         <div className='list-items'>
         {currentItems.map((item)=>{
                
                return <ProductCard product={item} name={item.title} image={item.image} price={item.price} key={item.id} />

              })}
          </div>
          
         <PaginationPage pages={pages}currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </Container>
  
      <Footer />
  </div>;
}
