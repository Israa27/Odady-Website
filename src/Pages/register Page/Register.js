import React, { useState } from 'react'
import './register.css';
import img from '../../Assets/images/Sign up-cuate.png';
import useAuth from '../../Hooks/UseAuth';
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const [username,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const[phoneNumber,setPhoneNumber]=useState('');
    const[governorate,setGovernorate]=useState('');
    const [region,setRegion]=useState('');
    const [nearest,setNearest]=useState('');
    const[checkbox,setCheckbox]=useState(false);
    const {register,error} = useAuth();
    const navigate = useNavigate()
    const auth =  (e)=>{
        e.preventDefault(); 
        register(username,email,password,phoneNumber,governorate,region,nearest);
        navigate('/')
      
         
      }
    return (
        <div>
            <div className='register-card'>
                <div className='register-img'>
                    <img src={img} alt='' />
                </div>
              
                <form method='POST' className='register-form' onSubmit={auth}>
                    <h5>إنشاء حساب جديد</h5>
                    <label >اسم المستخدم</label>
                    <input type='text' value={username} onChange={(e)=>setUserName(e.target.value)} required />

                    <label>عنوان البريد الالكتروني</label>
                    <input type='email'  value={email} onChange={(e)=>setEmail(e.target.value)} required />

                    <label>كلمة المرور</label>
                    <input type='password'  value={password} onChange={(e)=>setPassword(e.target.value)} required />

                    <label>رقم الهاتف</label>
                    <input type='number'  value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} required />

                    <label>المحافظة</label>
                    <select value={governorate} onChange={(e)=>setGovernorate(e.target.value)} required>
                        <option >بغداد</option>
                        <option >كركوك</option>
                        <option>الانبار</option>
                        <option >اربيل</option>
                        <option >دهوك</option>
                        <option >نينوى</option>
                        <option >بابل</option>
                        <option >الديوانية</option>
                        <option >النجف</option>
                        <option  >صلاح الدين</option>
                        <option >المثنى</option>
                        <option >ميسان</option>
                        <option >السليمانية</option>
                        <option >ذي قار</option>
                        <option >كربلاء</option>
                        <option>ديالى</option>
                        <option >واسط </option>
                        
                    </select>

                    <label>المنطقة</label>
                    <input type='text'  value={region} onChange={(e)=>setRegion(e.target.value)} required/>

                    <label>اقرب نقطة دالة</label>
                    <input type='text'  value={nearest} onChange={(e)=>setNearest(e.target.value)} required />
                    <div className='register-checkbox'>
                        <label>اوافق على الشروط والاحكام</label>
                        <input type='checkbox'  value={checkbox} onClick={(e)=>setCheckbox(true)}required/>
                    </div>
                    <button className='register-btn' >إنشاء حساب</button>
        
                    
                </form>
            </div>
        </div>
    )
}
