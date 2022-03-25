import React, { useState ,useEffect, useCallback}  from 'react';
import SecondaryNav from '../../Components/secondary navbar/SecondaryNav';
import './product.css';
import Products from './products section/Products';
import Filters from './filtertion/Filters';
import {  useSelector ,useDispatch} from 'react-redux';
import { viweAllProducts } from '../../redux/showAllSlice';
import PaginationPage from './Pagination/PaginationPage';
export default function Product() {

  const products=useSelector((state)=> state.all.all_products); 
  
console.log(products)
  //fatch all products
  const[value,setValue]=useState(''); //company
  const[cate,setCate]=useState(''); //category
  const[sort,setSort]=useState(''); //sort
 
  const[filters,setFilters]=useState([]);
  
  const[currentPage,setCurrentPage]=useState(1);
  const[productsPerPage]=useState(5);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    setTimeout(
      () => setFilters(products),
      1000
    );
    
  
  },[products])
  useEffect(()=>{
    if(value){
      //filter by company name
      const company=products.filter((companyItem)=>{
        return companyItem.company.name===value
        
      })
      setFilters( company)
     
    }
    
  
  },[setFilters,value])
    useEffect(()=>{
      
      if(cate){
        const category=products.filter((categoryItem)=>{
          return categoryItem.category.name===cate
          
        })
        
        setFilters(category)
      }
    },[setFilters,cate])
    
  
         
    
  
      //sort products
     useEffect(()=>{
      if (sort === "asc") {
        const lowestPrice = products
          .map((product) => product)
          .sort((a, b) => a.price - b.price);;
        setFilters(lowestPrice);
       
      }
     else{
      const lowestPrice = products
          .map((product) => product)
          .sort((a, b) => b.price - a.price);;
        setFilters(lowestPrice);
        
      }
     
     
     },[setFilters,sort])
     
    //pagination 
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filters.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filters.length / productsPerPage);

  //show all products
  const showAll=()=>{
     dispatch(viweAllProducts())
  }

  return <div>
       <SecondaryNav name='المنتجات'/>
         <div className='flex-content'>
          <Filters 
          value={value}
          cate={cate}
          sort={sort}
          showAll={showAll}
          setValue={setValue}
         setCate={setCate}
          setSort={setSort}
          />
          <Products 
          currentProducts={currentProducts}
          filters={filters}
          />
      
        </div>
        <PaginationPage 
        setCurrentPage={setCurrentPage} 
        pages = {totalPages}
        />
  </div>;
}
