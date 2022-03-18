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
  //fatch all products
  console.log(products)
  
  const[value,setValue]=useState(''); //company
  const[cate,setCate]=useState(''); //category
  const[sort,setSort]=useState(''); //sort
  const[filters,setFilters]=useState(products);
  const[currentPage,setCurrentPage]=useState(1);
  const[productsPerPage]=useState(5);
  //filter by company name
  const dispatch = useDispatch();
  const handleFilter=(val)=>{
     setValue(val);
     console.log(val)
     const company=products.filter((companyItem)=>{
       return companyItem.company.name===val
       
     })
     setFilters( company)
    }

     //filter by category name
     const handleFilter2=(val)=>{
      setCate(val);
      
      const category=products.filter((categoryItem)=>{
        return categoryItem.category.name===val
        
      })
      
      setFilters(category)

    };
    
  
         
    
  
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
          handleFilter={handleFilter}
          handleFilter2={handleFilter2}
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
