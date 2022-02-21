import React, {useEffect, useState} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import './rest.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updatePassword} from '../../redux/reset password/passwordAction';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form ,Button,InputGroup } from 'react-bootstrap';
export default function ResetPassword() {
 const[email,setEmail]=useState('');
 const dispatch=useDispatch();
 const navigate = useNavigate();
 let location = useLocation();
 const schema = yup.object().shape({
    password:yup.string().matches(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,'كلمة المرور غير صالحة').min(8).required('هذا الحقل مطلوب'),
    confirmPawssord:yup.string().oneOf([yup.ref('password'), null],'كلمة المرور غير متطابقة').min(8).required('هذا الحقل مطلوب'),
});

 
  return (
   <div class='reset-content'>
    
    <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
            password:'',
            confirmPawssord:''
        }}
        onSubmit={async(values) => {
            const password=values.password
            const confirmPassword=values.confirmPawssord
            if(password === confirmPassword) {
                console.log(password)
                dispatch(updatePassword({password}))
                navigate('/login')
            }
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
    <Form noValidate className='reset-form' onSubmit={handleSubmit}>
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

                    <Form.Group  controlId="validationFormik01">
                    <Form.Label> تأكيد كلمة المرور</Form.Label>
                    <InputGroup hasValidation>
                       
                        <Form.Control
                        type="password"
                        aria-describedby="inputGroupPrepend"
                        name="confirmPawssord"
                        value={values.confirmPawssord}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPawssord}
                        />
                        <Form.Control.Feedback type="invalid">
                        {errors.confirmPawssord}
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>

            
         <Button className='reset-btn' type="submit" >إنشاء حساب</Button>

    </Form>
    
    )}
    </Formik>
 </div>
  )
}


  
  