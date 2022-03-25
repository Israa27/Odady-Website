import React ,{useState} from 'react'
import './filter.css'


   
export default function Filters({showAll,value,cate,sort,setValue,setCate,setSort}) {
  
  return (
    <div className='filter-card'>
        <button onClick={ showAll}>عرض كل المنتجات</button>
        <h5>فرز المنتجات</h5>
        <hr/>
        <div className='filter-card-item'>
          <span>حسب الشركة</span>
          
          <div className='radio'>
             <input type='radio' id='radio1' value='Total' onChange={(e)=>setValue(e.target.value)} checked={value ==='Total'}/>
             <label htmlFor='radio1'>شركة Total</label>  
         </div>
         <div className='radio'>
            <input type='radio' id='radio2' value='شركة INGCO الصينية' onChange={(e)=>setValue(e.target.value)} checked={value ==='شركة INGCO الصينية'}/>
            <label htmlFor='radio2'>شركة INGCO الصينية</label>
         </div>
         <div className='radio'>
            <input type='radio' id='radio3' value='شركة CROWN السويسرية' onChange={(e)=>setValue(e.target.value)} checked={value ==='شركة CROWN السويسرية'}/>
            <label htmlFor='radio3'>شركة CROWN السويسرية</label>
         </div>
         <hr/>
        </div>
        <div className='filter-card-item'>
        <span>حسب الفئات</span>
         
        <div className='radio'>
           <input type='radio' id='radio4' value='اجهزة كهربائية' onChange={(e)=>setCate(e.target.value)} checked={cate ==='اجهزة كهربائية'} />
            <label htmlFor='radio4'>اجهزة كهربائية </label>  
         </div>
         <div className='radio'>
            <input type='radio' id='radio5' value='عدد يدوية' onChange={(e)=>setCate(e.target.value)} checked={cate ==='عدد يدوية'}/>
            <label htmlFor='radio5'>عدد يدوية</label>
         </div>
         <div className='radio'>
            <input type='radio' id='radio6' value='ادوات لحام' onChange={(e)=>setCate(e.target.value)} checked={cate ==='ادوات لحام'}/>
            <label htmlFor='radio6'>ادوات لحام</label>
         </div>
         <div className='radio'>
            <input type='radio' id='radio7' value='اجهزة شحن' onChange={(e)=>setCate(e.target.value)} checked={cate ==='اجهزة شحن'}/>
            <label htmlFor='radio7'>اجهزة شحن</label>
         </div>
         <hr/>
        </div>
        <div className='filter-card-item'>
        <span>ترتيب المنتجات حسب</span>
        
        <div className='radio'>
            <input type='radio' id='radio8' value='asc' onChange={(e)=>setSort(e.target.value)} checked={sort ==='asc'}/>
            <label htmlFor='radio8'>من الاعلى سعرا الى اقل سعرا</label>
        </div> 
         <div className='radio'>
            <input type='radio' id='radio9' value='res' onChange={(e)=>setSort(e.target.value)} checked={sort ==='res'}/>
            <label htmlFor='radio9'>من اقل سعرا الى اعل سعر </label>
        </div>
        
     
      <hr/>
       </div>
        
        
        
    </div>
  )
}
