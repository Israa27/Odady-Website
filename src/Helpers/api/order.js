import axios from "axios"
import Swal from 'sweetalert2'
import {BASE_URL} from '../Constants';
const orderURL=BASE_URL+'/auth/signup';
const codeURL=BASE_URL+'/orders/use_coupon'

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


export const postCoupon=(code) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const res= await axios.post(`${codeURL}?coupon_code=${code}`,{
        });
            resolve(res.data);
            if (res.status === 201){
                Swal.fire({
                    icon: 'success',
                    title: 'تمت عملية بالنجاح',
                    text: 'تمت حذف المنتج ',
                    
                  })
                }
              
    
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops... -_-',
                text: 'الرمز غير صالح  !',
                footer: '<a href="/">هل تريد الرجوع الى صفحة الرئيسة?</a>'
              })
         
            
            console.log(error.message);
            reject(error)
        }
      })
  }
  