import React, { useState ,useEffect}  from 'react';
import ProductCard from '../../Components/Card/ProductCard';
import SecondaryNav from '../../Components/secondary navbar/SecondaryNav';
import { Container } from 'react-bootstrap';
import SpinnerLoading from '../../Components/spinner/SpinnerLoading'
import './product.css';
import PaginationPage from './Pagination/PaginationPage';
import {  useSelector } from 'react-redux';
export default function Product() {
    
    const products=JSON.parse(localStorage.getItem("allProducts"));
    const status=useSelector((state)=> state.all);


    //sort 
    const[sort,setSort]=useState([]);
    const[fliterProducts,setFilterProducts]=useState([]);

    //pagination
    const[currentPage,setCurrentPage]=useState(1);
    const itemPerPage=5;
    const pages=[];
    for(let i=1;i<=Math.ceil(products.length/itemPerPage);i++){
        pages.push(i);
    };
    const indexOfLastItem=currentPage*itemPerPage;
    const indexOfFisrtItem=indexOfLastItem-itemPerPage;
    const filterItems=fliterProducts.slice(indexOfFisrtItem,indexOfLastItem);
  //pagination


 useEffect(()=>{
  if (sort === "asc") {
    const lowestPrice = products
      .map((product) => product)
      .sort((a, b) => a.price - b.price);;
    setFilterProducts(lowestPrice);
   
  }
 else{
  const lowestPrice = products
      .map((product) => product)
      .sort((a, b) => b.price - a.price);;
    setFilterProducts(lowestPrice);
    
  }
 },[sort])


  return <div>
    { status === 'pending' ?(
       
       <SpinnerLoading/>
    ):(
      <>
       <SecondaryNav name='المنتجات'/>
         <Container>
          <div className='filter-items'>
            <select onChange={(e)=>setSort(e.target.value)}>
              <option  >الترتيب الافتراضي</option>
              <option value='asc'>ترتيب حسب: الأدنى سعراً للأعلى</option>
              <option value='desc'>ترتيب حسب: الأعلى سعراً للأدنى</option>
            </select>
          </div>
          <div className='list-items'>
    
          {filterItems.slice(0,4).map((item)=>{
              
              return <ProductCard product={item} id={item.id} name={item.name} image={item.images[0].image } price={item.price} key={item.id} />
            })}
          
          </div>
          
         <PaginationPage pages={pages}currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </Container>
  </>
    )}
  </div>;
}
