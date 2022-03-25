import React from 'react'
import './account.css';
import * as yup from 'yup';
import { Formik } from 'formik';
import { userUpdate} from '../../../Helpers/api/userLogin';
import { useDispatch } from 'react-redux';
import {updateAccountPending,updateAccountSuccess,updateAccountFail} from '../../../redux/updateAccountSlice'
import {Form ,InputGroup,Button} from 'react-bootstrap';
export default function Account() {

  const dispatch =useDispatch();
  const schema = yup.object().shape({
    firstname: yup.string().required('هذا الحقل مطلوب'),
    lastname: yup.string().required('هذا الحقل مطلوب'),
    phoneNumber:yup.number().required('هذا الحقل مطلوب'),
    governorate: yup.string().required('هذا الحقل مطلوب'),
    city: yup.string().required('هذا الحقل مطلوب'),
    nearest: yup.string().required('هذا الحقل مطلوب'),
  
    
    

});
  return<div className='account'>
  <div className='account-form'>
              
              <Formik
                validationSchema={schema}
               
                initialValues={{
                    firstname: '',
                    lastname: '',
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
                     
                     dispatch(updateAccountPending());
                     
                     try{
                       const isAuth= await userUpdate(
                           { 
                             firstname,
                             lastname,
                             phoneNumber,
                             governorate,
                             city,
                             nearest,
                            
                         });
                       if(isAuth.status === 'error'){
                         return dispatch(updateAccountFail(isAuth.message));
                 
                       }
                       dispatch(updateAccountSuccess());
                       
                       
                     }
                     catch(error){
                       dispatch(updateAccountFail(error.message));
                 
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
                     <div className='accunt-name'>
                     <Form.Group className='accunt-label'  controlId="validationFormikUsername01">
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

                    <Form.Group className='accunt-label'  controlId="validationFormikUsername02">
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
                    
                    <div className='accunt-name'>
                    <Form.Group className='accunt-label' controlId="validationFormik04">
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

                    

                    <Form.Group className='accunt-label' controlId="validationFormik05">
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
                    </div>
                    <div className='accunt-name'>
                    <Form.Group className='accunt-label' controlId="validationFormik06">
                    <Form.Label>المنطقة</Form.Label>
                    <Form.Control
                        type="text"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        isInvalid={!!errors.city}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.city}
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='accunt-label' controlId="validationFormik07">
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
                    </div>
                    <Button className='register-btn' type="submit" >تعديل البيانات </Button>

  
                    
                    
        </Form>
      )}
    </Formik>
           
    
    </div>
 </div>
}
