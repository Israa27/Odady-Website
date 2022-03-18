import React ,{useState} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import './rest.css';
import { useDispatch } from 'react-redux';
import { updatePassword} from '../../redux/reset password/passwordAction';
//import  {passwordResetPending, passwordResetSuccess, updatePasswordSuccess, passwordResetFail} from '../../redux/reset password/passwordSlice'
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form ,Button,InputGroup } from 'react-bootstrap';
import {changePassword } from '../../Helpers/api/userLogin';
export default function ResetPassword() {
  const[showPasssword,setShowPassword]=useState(false);
  const[showPasssword2,setShowPassword2]=useState(false);
  const[showPasssword3,setShowPassword3]=useState(false);
 const dispatch=useDispatch();
 const navigate = useNavigate();
 //let location = useLocation();
 const schema = yup.object().shape({
    oldPassword:yup.string().min(8,'الحد الاقصى ثمانية احرف').required('هذا الحقل مطلوب'),
    password:yup.string().matches(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,'كلمة المرور غير صالحة').min(8,'الحد الاقصى ثمانية احرف').required('هذا الحقل مطلوب'),
    confirmPawssord:yup.string().oneOf([yup.ref('password'), null],'كلمة المرور غير متطابقة').min(8,'الحد الاقصى ثمانية احرف').required('هذا الحقل مطلوب'),
});

 

  return (
   <div className='reset-content'>
    
    <Formik
        validationSchema={schema}
        //onSubmit={console.log}
        initialValues={{
            oldPassword:'',
            password:'',
            confirmPawssord:''
        }}
        onSubmit={async(values) => {
            const oldPassword=values.oldPassword
            const password=values.password
            const confirmPassword=values.confirmPawssord
           
        
            try{
             
              dispatch(updatePassword(oldPassword,password,confirmPassword))
              
              //navigate('/login')
            }
            catch(error){
              //dispatch(orderFail(error.message));
        
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
                    <InputGroup className='password' hasValidation>
                       
                        <Form.Control
                        type={showPasssword ? "text": "password"}
                        aria-describedby="inputGroupPrepend"
                        name="oldPassword"
                        value={values.oldPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.oldPassword}
                        />
                        <i onClick={()=> setShowPassword(!showPasssword)} className={showPasssword ?  "fas fa-eye":"fas fa-eye-slash"}></i>
                        <Form.Control.Feedback type="invalid">
                        {errors.oldPassword}
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>

                 <Form.Group  controlId="validationFormik03">
                    <Form.Label> كلمة المرور الجديدة</Form.Label>
                    <InputGroup className='password' hasValidation>         
                        <Form.Control
                        type={showPasssword2 ? "text": "password"}
                        aria-describedby="inputGroupPrepend"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                        />
                        <i onClick={()=> setShowPassword2(!showPasssword2)} className={showPasssword2 ?  "fas fa-eye":"fas fa-eye-slash"}></i>
                        <Form.Control.Feedback type="invalid">
                        {errors.password}
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>

                    <Form.Group  controlId="validationFormik04">
                    <Form.Label> تأكيد كلمة المرور</Form.Label>
                    <InputGroup className='password' hasValidation>
                       
                        <Form.Control
                        type={showPasssword3 ? "text": "password"}
                        aria-describedby="inputGroupPrepend"
                        name="confirmPawssord"
                        value={values.confirmPawssord}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPawssord}
                        />
                        <i onClick={()=>setShowPassword3(!showPasssword3)} className={showPasssword3 ?  "fas fa-eye":"fas fa-eye-slash"}></i>
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


  
  