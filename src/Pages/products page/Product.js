import React, { useState ,useEffect}  from 'react';
import ProductCard from '../../Components/Card/ProductCard';
import SecondaryNav from '../../Components/secondary navbar/SecondaryNav';
import { Container } from 'react-bootstrap';
import SpinnerLoading from '../../Components/spinner/SpinnerLoading'
import './product.css';
import { useSelector } from 'react-redux';
import PaginationPage from './Pagination/PaginationPage';
export default function Product() {
    
    const products=useSelector((state)=> state.all.all_products);
    const status=useSelector((state)=> state.all);


    //sort 
    const[sort,setSort]=useState(products);
    const[fliterProducts,setFilterProducts]=useState([]);

    //pagination
    const[currentPage,setCurrentPage]=useState(1);
    const[itemPerPage,setItemPerPage]=useState(5);
    const pages=[];
    for(let i=1;i<=Math.ceil(products.length/itemPerPage);i++){
        pages.push(i);
    };
    const indexOfLastItem=currentPage*itemPerPage;
    const indexOfFisrtItem=indexOfLastItem-itemPerPage;
    const currentItems=fliterProducts.slice(indexOfFisrtItem,indexOfLastItem);
  //pagination


 useEffect(()=>{
  if (sort === "all"){
    setFilterProducts(products)
  }
  else if (sort === "asc") {
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
              <option value='all' >الترتيب الافتراضي</option>
              <option value='asc'>ترتيب حسب: الأدنى سعراً للأعلى</option>
              <option value='desc'>ترتيب حسب: الأعلى سعراً للأدنى</option>
            </select>
          </div>
         <div className='list-items'>
    
         {currentItems.map((item)=>{
                
                return <ProductCard product={item} id={item.id} name={item.name} image={item.ProductImage} price={item.price} key={item.id} />

              })}
          
          </div>
          
         <PaginationPage pages={pages}currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </Container>
  </>
    )}
  </div>;
}
