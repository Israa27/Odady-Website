import React from 'react'
import './total.css';
export default function TotalPrice() {
    return (
        <div className="total-amount-price">
          <h4>اجمالي سلة المشتريات</h4>
          <div className="temporary-amount-price">
              <p>المجموع </p>
              <span className='span-price'>300000 دينار</span>
          </div>
          <hr/>
          <div className="price-radio-btn">
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
                  <label  for ='radio'>الشحن المجاني</label>
                </div>
                <span className='price-span2'>سيتم تحديث الخيارات الشحن اثناء السداد</span>
                  
                <hr/>
          </div>
          <div className="temporary-amount-price ">
              <p>الاجمالي</p>
              <span className='span-price'>300000 دينار</span>
          </div>
          <button className="btn-amount">اتمام الطلب</button>
        </div>
    )
}
