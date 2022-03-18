import React from 'react'
import './form.css';
import * as yup from 'yup';
import { Formik } from 'formik';
import {Form ,InputGroup} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postOrder } from '../../../Helpers/api/order';



export default function InformationUser() {
    const dispatch=useDispatch();
    const schema = yup.object().shape({
        firstname: yup.string().required('هذا الحقل مطلوب'),
        lastname: yup.string().required('هذا الحقل مطلوب'),
        email: yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "البريد الكتروني غير صحيح ").required('هذا الحقل مطلوب'),
        password:yup.string().min(8).required('هذا الحقل مطلوب'),
        phoneNumber:yup.number().required('هذا الحقل مطلوب'),
        governorate: yup.string().required('هذا الحقل مطلوب'),
        city: yup.string().required('هذا الحقل مطلوب'),
        nearest: yup.string().required('هذا الحقل مطلوب'),
        nate:yup.string()
        
        
    
    });


  return<div className='all-input'>
              
              <Formik
                validationSchema={schema}
                //onSubmit={console.log}
                initialValues={{
                    firstname: '',
                    lastname:'',
                    email:'',
                    password:'',
                    phoneNumber:'',
                    governorate :'',
                    city:'',
                    nearest:'',
                   
                }}
                onSubmit={async(values) => {
                    let firstname=values.firstname,
                        lastname=values.lastname,
                        email=values.email,
                        phoneNumber=values.phoneNumber,
                        password=values.password,
                        governorate=values.governorate,
                        city=values.city,
                        nearest=values.nearest;
                        
                     if(!values){return alert("يرجى ادخال البيانات ")}
                     
                     //dispatch(orderPending());
                     
                     try{
                       const isAuth= await postOrder(
                           { 
                             firstname,
                             lastname,
                             email,
                             phoneNumber,
                             password,
                             governorate,
                             city,
                             nearest,
                            
                         });
                       if(isAuth.status === 'error'){
                         //return dispatch(orderFail(isAuth.message));
                 
                       }
                       //dispatch(orderSuccess());
                       
                       
                     }
                     catch(error){
                      // dispatch(orderFail(error.message));
                 
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
                <Form noValidate  onSubmit={handleSubmit}>
                     <div className='name'>
                     <Form.Group className='input-label'  controlId="validationFormikUsername01">
                    <Form.Label>الاسم الاول</Form.Label>
                    <InputGroup hasValidation>
                       
                        <Form.Control
                        type="text"
                        aria-describedby="inputGroupPrepend"
                        name="firstname"
                        value={values.firstname}
                        onChange={handleChange}
                        isInvalid={!!errors.firstname}
                        />
                        <Form.Control.Feedback type="invalid">
                        {errors.firstname}
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>

                    <Form.Group className='input-label'  controlId="validationFormikUsername02">
                    <Form.Label>الاسم  الاخير</Form.Label>
                    <InputGroup hasValidation>
                       
                        <Form.Control
                        type="text"
                        aria-describedby="inputGroupPrepend"
                        name="lastname"
                        value={values.lastname}
                        onChange={handleChange}
                        isInvalid={!!errors.lastname}
                        />
                        <Form.Control.Feedback type="invalid">
                        {errors.lastname}
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                    </div >
                    <Form.Group className='input-label' controlId="validationFormik02">
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

                    <Form.Group className='input-label' controlId="validationFormik03">
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
                    

                    <Form.Group className='input-label' controlId="validationFormik04">
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

                    

                    <Form.Group className='input-label' controlId="validationFormik05">
                    <Form.Label>المحافظة</Form.Label>
                      <Form.Select aria-label="Default select example" 
                       name="governorate"
                       value={values.governorate}
                       onChange={handleChange}
                       isInvalid={!!errors.governorate}>
                        <option ></option>
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
                    <Form.Group className='input-label' controlId="validationFormik06">
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
                    <Form.Group className='input-label' controlId="validationFormik07">
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
              
               
                    <Form.Group className='input-label'  >
                    <Form.Label>ملاحظات</Form.Label>
                        <Form.Control 
                        as="textarea"
                        placeholder="اكتب ملاحظات حول الطلب"
                        style={{ height: '100px' }}
                        />
                    </Form.Group>
                   
        </Form>
      )}
    </Formik>
           
    </div>
  
}
