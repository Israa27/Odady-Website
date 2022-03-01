import axios from "axios"
import {BASE_URL} from '../Constants';
const RegisterURL=BASE_URL+'/signup';
const loginURL =BASE_URL+'/signin';
const logoutURL=BASE_URL+'user/logout';
const updateURL=BASE_URL;
const userProfileURL=BASE_URL;
const newAccessTokenURL=BASE_URL +'token';

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
            
        }

    }catch(error){
        console.log(error.message);
        reject(error)
    }
  })
}
export const Login=({email,password}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginURL,{
        email:email,
        password:password
      });
      
     
      resolve(res.data);

      if (res.status === 200 ) {
        const data= res.data.token.access;
        console.log(res.data.token.access)

        localStorage.setItem("token",JSON.stringify(data));
      
      }
    } catch (error) {
      reject(error);
    }
  });
}


export const userLogout=async() => {
  try {
    await axios.delete(logoutURL,{
      headers:{
        Authorization:JSON.parse(localStorage.getItem("token"))
      }
    })
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
            'Authorization' : token
          }
        });

        if (res.status === 201){
          resolve(res.data);
            
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
          Authorization: token,
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

export const getNewAccessToken=() => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshToken } = JSON.parse(localStorage.getItem("token"));

      if (!refreshToken) {
        reject("Token not found!");
      }

      const res = await axios.get(newAccessTokenURL, {
        headers: {
          Authorization: refreshToken,
        },
      });

      if (res.status === 200) {
        localStorage.setItem(
          "token",
          JSON.stringify({ refreshToken: res.data.token })
        );
      }

      resolve(true);
    } catch (error) {
      if (error.message === 403) {
        localStorage.removeItem("token");
      }

      reject(false);
    }
  });

}
