import React from 'react';
import {useNavigate } from 'react-router-dom';
import './forget.css';
//import { useDispatch } from 'react-redux';
//import {sendPasswordReset} from '../../redux/reset password/passwordAction';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form ,Button,InputGroup } from 'react-bootstrap';
export default function ForgetPassword() {


 
 
  //const dispatch=useDispatch();
  const navigate = useNavigate();
  
  const schema = yup.object().shape({
    email: yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "البريد الكتروني غير صحيح ").required('هذا الحقل مطلوب'),
});

 
  return (
   <div class='forget-content'>
    
    <Formik
        validationSchema={schema}
        //onSubmit={console.log}
        initialValues={{
            email:'',
        }}
        onSubmit={async(values) => {
            navigate('/resetpassword')
        } 
    }
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
    <Form noValidate className='forget-form' onSubmit={handleSubmit}>
    <Form.Group  controlId="validationFormik02">
                <InputGroup hasValidation>
                       
                <Form.Control
                    type="email"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    onChange={handleChange }
                    isInvalid={!!errors.email}
                    placeholder='name@gmail.com'
                />
                <Form.Control.Feedback type="invalid">
                    {errors.email}
                </Form.Control.Feedback>
               </InputGroup>
            </Form.Group>
         <Button className='forget-btn' type="submit" >ارسال</Button>

    </Form>
    
    )}
    </Formik>
 </div>
  )
}


  
  

  
