import React from 'react';
import './form.css';
export default function Form() {
  return <div className='all-input'>
      <h6>تفاصيل الفاتورة</h6>
      <div className='name'>
      <div className='input-label '>
              <label>الاسم الاول</label>
              <input type='text' />
            </div>
            <div className='input-label '>
              <label>الاسم الاخير </label>
              <input type='text' />
            </div>
      </div>
       <div className='other-information'>
           <div className='input-label'>
              <label>البريد الالكتروني</label>
              <input type='email' />
            </div>
            <div className='input-label'>
              <label>رقم الهاتف</label>
              <input type='number' />
            </div>
            <div className='input-label'>
            <label>المحافظة</label>
                    <select>
                        <option></option>
                        <option>بغداد</option>
                        <option>كركوك</option>
                        <option>الانبار</option>
                        <option>اربيل</option>
                        <option>دهوك</option>
                        <option>نينوى</option>
                        <option>بابل</option>
                        <option>الديوانية</option>
                        <option>النجف</option>
                        <option>صلاح الدين</option>
                        <option>المثنى</option>
                        <option>ميسان</option>
                        <option>السليمانية</option>
                        <option>ذي قار</option>
                        <option>كربلاء</option>
                        <option>ديالى</option>
                        <option>واسط</option>
                        
                    </select>

            </div>
            <div className='input-label'>
              <label>المنطقة</label>
              <input type='text' />
            </div>
            <div className='input-label'>
              <label>اقرب نقطة دالة </label>
              <input type='text' />
            </div>
            <div className='input-label'>
              <label>ملاحظات الطلب</label>
              <textarea cols='12' rows='5' placeholder='ملاحظات حول الطلب'></textarea>
            </div>
          
          
       </div>
  </div>;
}
