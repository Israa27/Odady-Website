import React from 'react';
import './detiles.css';
export default function Detiles() {
  return<section>
        <div className='informatin-of-product'>
            <h5>دريل تخريم كهربائي ١٠ ملم ٥٥٠ واط ، طوبة اوتوماتيك</h5>
            <p>السعر:<span className='price'>30000 دينار</span></p>
            <p>اسم الشركة :<span className='company'>اوتو جي</span></p>
            <p className='detile'>دريل تخريم كهربائي قطر ١٠ ملم ، ٥٥٠ واط ، طوبة اوتوماتيك – شركة كراون</p>
        </div>
        <div className='control-btn'>
          <div className='btn-add-to-cart'>
            <button>اضف الى السلة</button>
            <input type='number' />
          </div>
          <div className='btn-add-to-wishlist'>
            <button>اضف الى قائمة الرغبات</button>
            <select>
              <option>يوجد ضمان </option>
              <option>لا </option>
              <option>نعم </option>
            </select>
          </div>
        </div>
    </section>
  
}
