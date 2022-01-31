import { Container } from 'react-bootstrap';
import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navber';
import './contact.css';
export default function Contact() {
  return <div>
      <Navbar />
      <Container>
      <h3 className='contact-name'>معلومات الاتصال</h3>
          <div className='contact-div'>
              <div className='contact-card'>
                  <span className='contact'><i class="far fa-envelope"></i></span>
                  <h5>البريد العمل	</h5>
                  <p>إذا كنت ترغب في الانضمام إلى فريقنا فإننا ننشر جميع وظائفنا المتاحة على صفحة Facebook ويمكنك مراسلتنا على سيرتك الذاتية من خلال</p>
                  <span>التالي : info@mytools-iq.com</span>
              </div>
              <div className='contact-card  '>
                  <span className='contact'><i class="fab fa-telegram-plane"></i></span>
                  <h5>البريد الإلكتروني</h5>
                  <p>يمكنكم مراسلتنا على بريدنا الإلكتروني</p>
                  <span>التالي : info@mytools-iq.com</span>
              </div>
              <div className='contact-card'>
                  <span className='contact'><i class="fas fa-phone-alt"></i></span>
                  <h5>أرقام الهواتف</h5>
                  <p>يمكنكم الأتصال على الرقم المُخصص</p>
                  <span>07814631456	</span>
              </div>

          </div>
          
          <div className='contact-icon'>
          <h3 >تابعونا على</h3>
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-whatsapp-square"></i>
              <i class="fab fa-instagram-square"></i>
              <i class="fab fa-youtube-square"></i>
              </div>
      </Container>
      <Footer />
  </div>;
}
