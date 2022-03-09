import axios from "axios"
import { useDispatch } from "react-redux";
import { addToWishList } from "../../redux/wishlistSlice";
import {BASE_URL} from '../Constants';
import Swal from 'sweetalert2'
import { addItem } from "../../redux/cartActionSlice";
const createCartURL=BASE_URL+'/orders/add-to-cart'
const viweCart=BASE_URL+'/orders/cart'


const token = JSON.parse(localStorage.getItem("token"));
axios.interceptors.request.use(
  config=>{
    config.headers.Authorization= `Bearer ${token}`;
    return config
  }
)

export const  createCart=(id)=> {

  return new Promise(async(resolve,reject)=>{
  
      try{
       
          const res= await axios.post(createCartURL,{
                product_id: id,
               
            },
        
        );
        const dispatch=useDispatch();
        dispatch(addItem(id))
          resolve(res.data);
          if (res.status === 201){
              
           resolve(res.data);
          }
  
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

export const  getCartItems=()=> {
  return new Promise(async(resolve,reject)=>{
      try{
          const res= await axios.get(viweCart,{
            
          }
        );
          resolve(res.data);
          if (res.status === 201){
           
             resolve(res.data);
          }
          //localStorage.setItem('cartItems',JSON.stringify(res.data))
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
          const res= await axios.delete(`${BASE_URL}/orders/item/${id}`,{
             
          }
        );
          resolve(res.data);
          if (res.status === 200){
           
            localStorage.setItem('cartItems',JSON.stringify(res.data))
          }
  
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