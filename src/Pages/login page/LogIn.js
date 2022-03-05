import React, {useEffect, useState} from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { Container,Form ,Button,InputGroup} from 'react-bootstrap';
import './login.css';
import { Login } from '../../Helpers/api/userLogin';
import {loginPending,loginSuccess,loginFail}  from '../../redux/loginSlice';
import { useSelector ,useDispatch} from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { getUserProfile } from '../../redux/user/userAction';
export default function LogIn() {

  const dispatch=useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);
	let { from } = location.state || { from: { pathname: "/" } };
  const schema = yup.object().shape({
    email: yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "البريد الكتروني غير صحيح ").required('هذا الحقل مطلوب'),
    password:yup.string(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,'ثمانية أحرف كحد أدنى ، حرف كبير واحد على الأقل ، حرف صغير واحد ورقم واحد').matches().min(8,'ثمانية احرف كحد اقصى').required('هذا الحقل مطلوب'),
 
    

});

	useEffect(() => {
		JSON.parse(localStorage.getItem("token")) && navigate(from);
	}, [navigate, isAuth]);
  

    return (
            <Container>
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                    email: '',
                    password:'',
                  
                }}
                onSubmit={async(values) => {
                  const email=values.email
                  const password=values.password
                  if (!email || !password){
                    return alert("يرجى ادخال البيانات ")
                  }
                  dispatch(loginPending());
                  try{
                    const isAuth= await Login({email,password});
                    if(isAuth.status === 'error'){
                      return dispatch(loginFail(isAuth.message));
              
                    }
                    dispatch(loginSuccess());
                    dispatch(getUserProfile());
                    navigate('/')
                  }
                  catch(error){
                    dispatch(loginFail(error.message));
              
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
                <Form noValidate className='login-form' onSubmit={handleSubmit}>
                <div className='login-content'>
                  <Form.Group  controlId="validationFormikUsername">
          
                    <InputGroup  className='login-input-form' hasValidation>
                      <InputGroup.Text className='login-input-icon' id="inputGroupPrepend">
                       <svg width="27" height="27" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M8 7.57895C8 11.7575 11.5893 15.1579 16 15.1579C20.4107 15.1579 24 11.7575 24 7.57895C24 3.40042 20.4107 0 16 0C11.5893 0 8 3.40042 8 7.57895ZM30.2222 32H32V30.3158C32 23.8164 26.416 18.5263 19.5556 18.5263H12.4444C5.58222 18.5263 0 23.8164 0 30.3158V32H30.2222Z" fill="#F7F6F6"/>
                       </svg>
                      </InputGroup.Text>

                      <Form.Control
                        type="email"
                        placeholder="اسم المستخدم"
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

                  <Form.Group   controlId="validationFormikUsername01">
                  
                    <InputGroup  className='login-input-form' hasValidation>
                      <InputGroup.Text className='login-input-icon' id="inputGroupPrepend">
                        <svg width="27" height="27" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M27.4445 15.8333V11.3156C27.4898 9.027 26.6268 6.81366 25.0442 5.15987C23.4616 3.50607 21.2884 2.5465 19 2.49112C16.7117 2.5465 14.5385 3.50607 12.9559 5.15987C11.3733 6.81366 10.5102 9.027 10.5556 11.3156V15.8333H7.38892V33.7778C7.38892 34.3377 7.61134 34.8747 8.00725 35.2706C8.40316 35.6665 8.94013 35.8889 9.50003 35.8889H28.5C29.0599 35.8889 29.5969 35.6665 29.9928 35.2706C30.3887 34.8747 30.6111 34.3377 30.6111 33.7778V15.8333H27.4445ZM20.0556 26.6317V29.5556H17.9445V26.5367C17.4306 26.2722 17.0225 25.8401 16.7881 25.3118C16.5536 24.7836 16.5068 24.191 16.6554 23.6325C16.804 23.074 17.1392 22.5832 17.6052 22.2413C18.0712 21.8995 18.6401 21.7273 19.2174 21.7533C19.7948 21.7792 20.3459 22.0019 20.7793 22.3842C21.2127 22.7665 21.5024 23.2855 21.6003 23.8551C21.6981 24.4247 21.5983 25.0106 21.3173 25.5156C21.0364 26.0207 20.5912 26.4145 20.0556 26.6317ZM25.3334 15.8333H12.6667V11.3156C12.6212 9.58681 13.2618 7.91033 14.4485 6.65241C15.6352 5.39449 17.2716 4.65742 19 4.60223C20.7285 4.65742 22.3649 5.39449 23.5516 6.65241C24.7383 7.91033 25.3789 9.58681 25.3334 11.3156V15.8333Z" fill="#F7F6F6"/>
                        </svg>
                      </InputGroup.Text>
                      
                      <Form.Control
                        type="password"
                        placeholder="كلمة المرور"
                        aria-describedby="inputGroupPrepend"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                       
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                   </InputGroup>
                  </Form.Group>
                   

                    <Link to='/resetpassword'>هل نسيت كلمة السر</Link>
                    <Button className='login-btn' type="submit" >تسجيل الدخول</Button>
                   
               
                 
                    
                   
                  </div>
                  
      
                   </Form>
                   )}
                 </Formik>
            
            </Container>
       
    )
}