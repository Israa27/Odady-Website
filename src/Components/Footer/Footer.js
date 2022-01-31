import React from 'react'
import { Container } from 'react-bootstrap';
import './footer.css';
import Asia from '../../Assets/images/Asia-logo.png';
import zain from '../../Assets/images/zain-logo.png';
import cash from '../../Assets/images/cash-logo.png';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <div className='footer'>
         
              <div className='footer-items'>
              <div className='footer-links'>
                <h5>الصفحات </h5>
                <Link className="link" to='/'>الصفحة الرئيسة</Link>
                <Link className="link" to =''>حسابي</Link>
              </div>

              <div className='footer-links'>
                <h5>سياسية العمل</h5>
                <Link className="link" to ='/privacy'>سياسية الخصوصية</Link>
                <Link className="link" to ='/transfer'>سياسية النقل والاسترجاع</Link>
              </div>
              <div className='footer-links'>
                <h5>المزيد</h5>
                <Link className="link" to ='/'>معلومات عنا</Link >
                <Link className="link" to ='/contact'>اتصل بنا</Link>     
              </div>

              <div className='footer-links'>
                <h5>العربية</h5>
                <span>English</span>
              </div>
              <div className='footer-links'>
                <h5>وسائل الدفع</h5>
                <div className='cash'>
                    <div className='cash-box'>
                    <img src={Asia} img/>
                    </div>
                    <div className='cash-box'>
                    <img src={zain} img/>
                    </div>
                    <div className='cash-box'>
                    <img src={cash} img/>
                    </div>    
              </div>  
              </div>
              </div>
              <div className='footer-icons'>
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-whatsapp-square"></i>
              <i class="fab fa-instagram-square"></i>
              <i class="fab fa-youtube-square"></i>
              </div>
              <div className='footer-copy-write'>
                  <p>حقوق النشر © لعام 2021 محفوظة لموقع عُدَدي للتسوق الإلكتروني</p>
              </div>
         
        </div>
    )
}
