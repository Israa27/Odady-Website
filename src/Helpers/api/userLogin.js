import axios from "axios"
import { Navigate, useNavigate } from "react-router";
import Swal from 'sweetalert2'
import {BASE_URL} from '../Constants';
const RegisterURL=BASE_URL+'/auth/signup';
const loginURL =BASE_URL+'/auth/signin';
const logoutURL=BASE_URL+'user/logout';
const updateURL=BASE_URL+'/auth';
const userProfileURL=BASE_URL+'/auth';
const updatePasswordURL = BASE_URL + "/auth/change-password";



const token = JSON.parse(localStorage.getItem("token"));
axios.interceptors.request.use(
  config=>{
    config.headers.Authorization= `Bearer ${token}`;
    return config
  }
)
export const userRegister=({
  firstname,
  lastname,
  email,
  phoneNumber,
  password,
  governorate,
  city,
  nearest,
 
}) => {
  return new Promise(async(resolve,reject)=>{
    try{
        const res= await axios.post(RegisterURL,{
          
            first_name:firstname,
            last_name:lastname,
            email:email,
            phone_number:phoneNumber,
            password1:password,
            Governorate:governorate,
            city:city,
            closest_point:nearest,
           
        
        });
        resolve(res.data);
        if (res.status === 201){
          resolve(res.data);
          Swal.fire({
            icon: 'success',
            title: 'تمت عملية بنجاح',
            text: ' تم انشاء حساب جديد '
          })
        }
       

    }catch(error){
        console.log(error.message);
        Swal.fire({
          icon: 'error',
          title: 'Oops... -_-',
          text: 'حدث خطأ ما !',
          footer: '<a href="/">هل تريد الرجوع الى صفحة الرئيسة?</a>'
        })
        reject(error)
    }
  })
}
export const Login=async({email,password}) => {
    try {
      const res = await axios.post(loginURL,{
        email:email,
        password:password
      });
      
      if (res.status === 200 ) {
        const data= res.data.token.access;
        
        Swal.fire({
          icon: 'success',
          title: 'تمت عملية بنجاح',
          text: ' تم تسجيل الدخول بنجاح ^_^ '
        }) ;
       
        localStorage.setItem("token",JSON.stringify(data))
      }
        return  res.data.token.access
      
      
    } catch (error) {
      Swal.fire({
          icon: 'error',
          title: 'Oops... -_-',
          text: 'حدث خطأ ما !',
          footer: '<a href="/">هل تريد الرجوع الى صفحة الرئيسة!</a>'
        })
     
    }
  
}


export const userLogout=async() => {
  try {
    await axios.delete(logoutURL,{
      headers:{
        Authorization:JSON.parse(localStorage.getItem("token"))
      }
    })
    Swal.fire(
      'تم التسجيل الخروج',
     
    )
    Navigate('/login')
  }
  catch(error){
    console.log(error)
  }
}


export const userUpdate=({
  firstname,
  lastname,
  phoneNumber,
  governorate,
  city,
  nearest,
 
}) => {
  return new Promise(async(resolve,reject)=>{
    try{
     
        
        if (!token) {
          reject("Token not found!");
        } 
        const res= await axios.put(updateURL,{
          
            first_name:firstname,
            last_name:lastname,
            phone_number:phoneNumber,
            Governorate:governorate,
            city:city,
            closest_point:nearest,
          },
          {headers:{ 
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods':'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Authorization' : `Bearer ${token}`
          }
        });

        if (res.status === 200){
          resolve(res.data);
          Swal.fire({
            icon: 'success',
            title: 'تمت عملية بنجاح',
            text: ' تم  تعديل بيانات  ^_^ '
          }) ;
            
        }
       

    }catch(error){
        console.log(error.message);
        reject(error)
    }
  })
}


export const getUser=() => {
  return new Promise(async (resolve, reject) => {
    try {

      if (!token) {
        reject("Token not found!");
      }

      const res = await axios.get(userProfileURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      resolve(res.data);
      localStorage.setItem("user",JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
      reject(error.message);
    }
  });

};


export const changePassword = (password1,password2,password3) => {
	return new Promise(async (resolve, reject) => {
		try {
			const  data  = await axios.post( updatePasswordURL, {
        old_password: password1,
        new_password1: password2,
        new_password2: password3
      },
      {headers:{ 
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods':'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Authorization' : `Bearer ${token}`
      }}
      );

		
      if(data.status === 200){
       
        resolve(data)
      }
		;
		} catch (error) {
			reject(error);
		}
	});
};