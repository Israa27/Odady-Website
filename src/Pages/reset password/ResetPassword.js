import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import {orderPending,orderSuccess,orderFail} from '../../redux/order/orderSlice'
import './rest.css';
import { useDispatch } from 'react-redux';
import { updatePassword} from '../../redux/reset password/passwordAction';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form ,Button,InputGroup } from 'react-bootstrap';
import {changePassword } from '../../Helpers/api/userLogin';
export default function ResetPassword() {
 
 const dispatch=useDispatch();
 const navigate = useNavigate();
 //let location = useLocation();
 const schema = yup.object().shape({
    oldPassword:yup.string().matches(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,'كلمة المرور غير صالحة').min(8).required('هذا الحقل مطلوب'),
    password:yup.string().matches(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,'كلمة المرور غير صالحة').min(8).required('هذا الحقل مطلوب'),
    confirmPawssord:yup.string().oneOf([yup.ref('password'), null],'كلمة المرور غير متطابقة').min(8,'الحد الاقصى ثمانية احرف').required('هذا الحقل مطلوب'),
});

 
  return (
   <div className='reset-content'>
    
    <Formik
        validationSchema={schema}
        //onSubmit={console.log}
        initialValues={{
            oldPawssord:'',
            password:'',
            confirmPawssord:''
        }}
        onSubmit={async(values) => {
            const oldPassword=values.oldPawssord
            const password=values.password
            const confirmPassword=values.confirmPawssord
           
            dispatch(orderPending());
            try{
              const isAuth= await changePassword({oldPassword,password,confirmPassword})
              dispatch(updatePassword({oldPassword,password,confirmPassword}))
              if(isAuth.status === 'error'){
                return dispatch(orderPending(isAuth.message));
        
              }
              dispatch(orderSuccess());
              navigate('/login')
            }
            catch(error){
              dispatch(orderFail(error.message));
        
            }}
               
            
        
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
        <Form.Group  controlId="validationFormik01">
                    <Form.Label> كلمة السر القديمة</Form.Label>
                    <InputGroup hasValidation>
                       
                        <Form.Control
                        type="password"
                        aria-describedby="inputGroupPrepend"
                        name="oldPawssord"
                        value={values.oldPawssord}
                        onChange={handleChange}
                        isInvalid={!!errors.oldPawssord}
                        />
                        <Form.Control.Feedback type="invalid">
                        {errors.oldPawssord}
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>

                 <Form.Group  controlId="validationFormik03">
                    <Form.Label> كلمة المرور الجديدة</Form.Label>
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

            
         <Button className='reset-btn' type="submit" >اعادة تعيين كلمة السر</Button>

    </Form>
    
    )}
    </Formik>
 </div>
  )
}


  
  