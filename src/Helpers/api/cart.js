import axios from "axios"
import {BASE_URL} from '../Constants';

const createCartURL=BASE_URL+'/orders/cart'



export const  createCart=({id,qty})=> {
  return new Promise(async(resolve,reject)=>{
      try{
          const res= await axios.post(createCartURL,{
                product_id: id,
                item_qty:qty
            },

         
        );
          resolve(res.data);
          if (res.status === 204){
              
              localStorage.setItem('cart', JSON.stringify(res.data))
              
          }
  
      }catch(error){
          console.log(error.message);
          reject(error)
      }
    })
}
