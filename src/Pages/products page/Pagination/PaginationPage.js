import React, { useState } from 'react'
import './pagination.css';

export default function PaginationPage({pages,currentPage,setCurrentPage}) {
    const pageNumberLimit= 5;
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(1);
    const handleClick =(event)=>{
        setCurrentPage(Number(event.target.id))
    };
    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);
    
        if (currentPage + 1 > maxPageNumberLimit) {
          setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
      };
    
      const handlePrevbtn = () => {
        setCurrentPage(currentPage - 1);
    
        if ((currentPage - 1) % pageNumberLimit === 0) {
          setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
      };
  return <div className='pagination-item'>
      <button onClick={handleNextbtn}><i className="fas fa-angle-double-right"></i></button>
      {pages.map(number=>{
          return<li className={currentPage === number ?'active' : null} key={number}id={number} onClick={handleClick}>{number}</li>
          
      })

      }
       <button onClick={handlePrevbtn}><i className="fas fa-angle-double-left"></i></button>
  </div>
    

}
