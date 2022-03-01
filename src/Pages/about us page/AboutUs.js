import { Container } from 'react-bootstrap'
import React from 'react'
import img from '../../Assets/images/About us.png';
import './about.css'
export default function AboutUs() {
  return (
        <Container>
        <div className='about-content'>
            <div className='about-img'>
                <img src={img} alt=''/>
            </div>

            <div className='about-text'>
                <p>من نحن</p>
                <span>متجر يُقدم خدمات البيع عبر الانترنت ، تم تأسيسة في عام ٢٠٢١ بعد تفشي وباء كورونا
                     تلبيةً للصالح العالم وللحفاظ على سلامة الناس</span>
            </div>
            <div className='about-text'>
                <p>الغرض من المتجر</p>
                <span>الإرتقاء بخدمة العملاء لمستوى عالي وكما هو الحال في باقي
                     الدول المتقدمة وتقديم أفضل الخدمات</span>
            </div>
            <div className='about-text'>
                <p>هدفنا</p>
                <span>الإرتقاء بخدمة العملاء لمستوى عالي وكما هو الحالفي باقي الدو
                    ل المتقدمة وتقديم أفضل الخدمات</span>
            </div>
            </div>
        </Container>
    
  )
}
