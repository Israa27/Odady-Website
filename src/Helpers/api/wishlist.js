import axios from "axios"
import {BASE_URL} from '../Constants';
import Swal from 'sweetalert2'
const addItem=BASE_URL+'/wish list/add-to-wishes'
const getWishlist =BASE_URL+'/wish list/wishes list';
const token = JSON.parse(localStorage.getItem("token"));
axios.interceptors.request.use(
  config=>{
    config.headers.Authorization= `Bearer ${token}`;
    return config
  }
)

export const  createWishlist=(id)=> {
  return new Promise(async(resolve,reject)=>{
      try{
          const res= await axios.post(addItem,{
                product_id: id,
                
            },
      
        );
          resolve(res.data);
          if (res.status === 200){
              
           resolve(res.data);
          }
          localStorage.setItem('wishlist',JSON.stringify('wishlist'))
      }catch(error){
        Swal.fire({
            icon: 'error',
            title: 'Oops... -_-',
            text: 'حدث خطأ ما !',
            footer: '<a href="/">هل تريد الرجوع الى صفحة الرئيسة?</a>'
          });
          reject(error)
      }
    })
}

export const  getItems=()=> {
  return new Promise(async(resolve,reject)=>{
      try{
          const res= await axios.get(getWishlist,{
             
          }
        );
          resolve(res.data);
          if (res.status === 200){
           
             resolve(res.data);
          }
          localStorage.setItem('wishlist',JSON.stringify(res.data))
      }catch(error){
        Swal.fire({
            icon: 'error',
            title: 'Oops... -_-',
            text: 'حدث خطأ ما !',
            footer: '<a href="/">هل تريد الرجوع الى صفحة الرئيسة?</a>'
          });
          reject(error)
      }
    })
}
export const  removeItem=(id)=> {
  return new Promise(async(resolve,reject)=>{
      try{
          const res= await axios.delete(`${BASE_URL}/wish list/wish/${id}`,{
             
          }
        );
          resolve(res.data);
          if (res.status === 200){
            resolve(res.data);
            Swal.fire({
                icon: 'success',
                title: 'تمت عملية بالنجاح',
                text: 'تمت حذف المنتج ',
                
              })
            
          }
          localStorage.setItem('wishlist',JSON.stringify(res.data))
  
      }catch(error){
        Swal.fire({
            icon: 'error',
            title: 'Oops... -_-',
            text: 'حدث خطأ ما !',
            footer: '<a href="/">هل تريد الرجوع الى صفحة الرئيسة?</a>'
          });
          reject(error)
      }
    })
}