import React ,{useState} from 'react'
import { useSelector } from 'react-redux'
import './filter.css'


   
export default function Filters({showAll,value,cate,sort,setValue,setCate,setSort}) {
  const company=useSelector((state)=> state.product.company)
  const category=useSelector((state)=> state.product.category)
  return (
    <div className='filter-card'>
        <button onClick={ showAll}>عرض كل المنتجات</button>
        <h5>فرز المنتجات</h5>
        <hr/>
        <div className='filter-card-item'>
          <span>حسب الشركة</span>
           {company.map((item,index)=>(
          <div className='radio' key={index}>
             <input type='radio' id={item.id} value={item.name}  onChange={(e)=>setValue(e.target.value)} checked={value ===item.name}/>
             <label htmlFor={item.id}>{item.name}</label>  
         </div>
         ))}
         
         <hr/>
        </div>
        <div className='filter-card-item'>
        <span>حسب الفئات</span>
         
        {category.map((item,index)=>(
          <div className='radio' key={index}>
             <input type='radio' id={item.id} value={item.name}  onChange={(e)=>setCate(e.target.value)} checked={cate ===item.name}/>
             <label htmlFor={item.id}>{item.name}</label>  
         </div>
         ))}
         <hr/>
        </div>
        <div className='filter-card-item'>
        <span>ترتيب المنتجات حسب</span>
        
        <div className='radio'>
            <input type='radio' id='radio8' value='rsc' onChange={(e)=>setSort(e.target.value)} checked={sort ==='rsc'}/>
            <label htmlFor='radio8'>من الاعلى سعرا الى اقل سعرا</label>
        </div> 
         <div className='radio'>
            <input type='radio' id='radio9' value='asc' onChange={(e)=>setSort(e.target.value)} checked={sort ==='asc'}/>
            <label htmlFor='radio9'>من اقل سعرا الى اعل سعر </label>
        </div>
        
     
      <hr/>
       </div>
        
        
        
    </div>
  )
}
