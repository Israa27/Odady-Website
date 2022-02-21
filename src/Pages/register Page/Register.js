import React, { useState } from 'react'
import './register.css';
import img from '../../Assets/images/Sign up-cuate.png';
import { useNavigate } from 'react-router-dom';
import {registerPending,registerSuccess,registerFail}  from '../../redux/registerSlice';
import { userRegister } from '../../Helpers/api/userLogin';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form ,Button,InputGroup } from 'react-bootstrap';
export default function Register() {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const schema = yup.object().shape({
        username: yup.string().required('هذا الحقل مطلوب'),
        email: yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "البريد الكتروني غير صحيح ").required('هذا الحقل مطلوب'),
        password:yup.string().matches(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,'كلمة المرور غير صالحة').min(8).required('هذا الحقل مطلوب'),
        phoneNumber:yup.number().required('هذا الحقل مطلوب'),
        governorate: yup.string().required('هذا الحقل مطلوب'),
        region: yup.string().required('هذا الحقل مطلوب'),
        nearest: yup.string().required('هذا الحقل مطلوب'),
        checkbox: yup.bool().required('هذا الحقل مطلوب').oneOf([true]),
        
    
    });


    return (
        <div>
            <div className='register-card'>
                <div className='register-img'>
                    <img src={img} alt='' />
                </div>
              
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                    username: '',
                    email:'',
                    password:'',
                    phoneNumber:'',
                    governorate :'',
                    region:'',
                    nearest:'',
                    checkbox: false,
                }}
                onSubmit={async(values) => {
                       let username=values.username,
                           email=values.email,
                           phoneNumber=values.phoneNumber,
                           password=values.password,
                           governorate=values.governorate,
                           nearest=values.nearest,
                           checkbox=values.checkbox;
                        if (!values){
                          return alert("يرجى ادخال البيانات ")
                        }
                        dispatch(registerPending());
                        try{
                          const isAuth= await userRegister(
                              { 
                                username,
                                email,
                                phoneNumber,
                                password,
                                governorate,
                                nearest,
                                checkbox
                            });
                          if(isAuth.status === 'error'){
                            return dispatch(registerFail(isAuth.message));
                    
                          }
                          dispatch(registerSuccess());
                          
                          
                        }
                        catch(error){
                          dispatch(registerFail(error.message));
                    
                        }
                      
                   
                }}
                >
            {({
               
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <Form noValidate className='register-form' onSubmit={handleSubmit}>
                    <Form.Group  controlId="validationFormikUsername">
                    <Form.Label>اسم المستخدم</Form.Label>
                    <InputGroup hasValidation>
                       
                        <Form.Control
                        type="text"
                        aria-describedby="inputGroupPrepend"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                        />
                        <Form.Control.Feedback type="invalid">
                        {errors.username}
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>

                    <Form.Group  controlId="validationFormik02">
                    <Form.Label>عنوان البريد الالكتروني</Form.Label>
                    <InputGroup hasValidation>
                       
                        <Form.Control
                        type="email"
                        aria-describedby="inputGroupPrepend"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                        {errors.email}
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>

                    <Form.Group  controlId="validationFormik03">
                    <Form.Label>كلمة المرور</Form.Label>
                    <InputGroup hasValidation>
                       
                        <Form.Control
                        type="password"
                        aria-describedby="inputGroupPrepend"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                        {errors.password}
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                    

                    <Form.Group  controlId="validationFormik04">
                    <Form.Label>رقم الهاتف</Form.Label>
                    <InputGroup hasValidation>
                       
                        <Form.Control
                        type="number"
                        aria-describedby="inputGroupPrepend"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        isInvalid={!!errors.phoneNumber}
                        />
                        <Form.Control.Feedback type="invalid">
                        {errors.phoneNumber}
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>                   

                    

                    <Form.Group controlId="validationFormik05">
                    <Form.Label>المحافظة</Form.Label>
                      <Form.Select aria-label="Default select example" 
                       name="governorate"
                       value={values.governorate}
                       onChange={handleChange}
                       isInvalid={!!errors.governorate}>
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
                     </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.governorate}
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group  controlId="validationFormik06">
                    <Form.Label>المنطقة</Form.Label>
                    <Form.Control
                        type="text"
                        name="region"
                        value={values.region}
                        onChange={handleChange}
                        isInvalid={!!errors.region}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.region}
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group  controlId="validationFormik07">
                    <Form.Label>اقرب نقطة دالة</Form.Label>
                    <Form.Control
                        type="text"
                        name="nearest"
                        value={values.nearest}
                        onChange={handleChange}
                        isInvalid={!!errors.nearest}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.nearest}
                    </Form.Control.Feedback>
                    </Form.Group>
              
                <Form.Group >
                    <Form.Check
                    className='register-checkbox'
                    required
                    name="checkbox"
                    label="اوافق على الشروط والاحكام"
                    onChange={handleChange}
                    isInvalid={!!errors.checkbox}
                    
                    feedbackType="invalid"
                    id="validationFormik0"
                    />
          </Form.Group>
          <Button className='register-btn' type="submit" >إنشاء حساب</Button>
        </Form>
      )}
    </Formik>
            </div>
        </div>
    )
}
