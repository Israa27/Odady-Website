import axios from "axios"
import {BASE_URL} from '../Constants';
const orderURL=BASE_URL+'/auth/signup';


export const postOrder=dataForm => {
  return new Promise(async(resolve,reject)=>{
      try{
          const res= await axios.post(orderURL,dataForm);
          resolve(res.data);
          if (res.status === 201){
              let data = res.data;
              localStorage.setItem('userOrder', JSON.stringify(data))
              
          }
  
      }catch(error){
          console.log(error.message);
          reject(error)
      }
    })
}