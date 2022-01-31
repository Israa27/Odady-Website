import React from 'react';
import './order.css';
export default function OrderForm() {
  return <div>
      <div className="order-total-amount">
          <h4>طلبك</h4>
          <div className="order-temporary-amount order-span1">
              <p>المنتج </p>
              <span >المجموع</span>
          </div>
           <hr/>
          <div className="order-temporary-amount">
              <p>بطارية دريل ومفك براغي ، ٢ ساعة  </p>
              <span className='order-span2'>3600 دينار</span>
          </div>
          <hr/>
          <div className="order-radio-btn">
              <p>الشحن</p>
              <div className='radio'>
                  <input type='radio'id='radio1' />
                  <label  for ='radio1'>داخل بغداد : 5000 دينار</label>
               </div>
               <div className='radio'>
                  <input type='radio' id='radio2' />
                  <label for ='radio2'> باقي المحافظات : 8000 دينار</label>
                </div>
                <div className='radio'>
                  <input type='radio' id='radio3' />
                  <label  for ='radio3'>الشحن المجاني</label>
                </div>
                <span className='order-span2'>سيتم تحديث الخيارات الشحن اثناء السداد</span>
                <hr/>    
              
          </div>
          <div className="order-temporary-amount ">
              <p>الاجمالي</p>
              <span className='span'>300000 دينار</span>
          </div>
          <div className="radio-btn">
              <div className='radio'>
                  <input type='radio'id='radio4' />
                  <label  for ='radio4'>الدفع نقدًا عند الاستلام </label>
               </div>
               <div className='radio'>
                  <input type='radio' id='radio5' />
                  <label for ='radio5'>الدفع عند التسليم مباشرة.</label>
                </div>
              
  
                <hr/>    
              
          </div>
          <div className="checkbox-btn">
              <div className='check-btn'>
                  <input type='checkbox' id='radio4' />
                  <label  for ='radio4'>أرغب في تلقي رسائل بريدإلكتروني حصرية مع خصومات ومعلومات عن المنتج  </label>
               </div>
               <div className='check-btn'>
                  <input type='checkbox' id='radio5' />
                  <label for ='radio5'>لقد قرأت ووافقت على </label>
                </div>
                <span className='order-span2'>سيتم استخدام بياناتك الشخصية لمعالجة طلبك ودعم تجربتك في هذا الموقع، ولأغراض أخرى تم توضيحها في سياسة الخصوصية لدينا</span>
              
  
               
              
          </div>


          <button className="btn-amount">تأكيد الطلب</button>
        </div>
  </div>
}
