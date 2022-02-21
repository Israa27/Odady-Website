import axios from "axios"
const URL='https://fakestoreapi.com';
const getAllURL=URL+'/carts';
const addTocartURL=URL+'/carts';
const removeFromecartURL=URL

export const getAllItems=() => {
  return new Promise(async(resolve,reject)=>{
    try{
        const res= await axios.get(getAllURL);
        resolve(res.data);
        if (res.status === 200){
            let data = res.data;
            localStorage.setItem('cartItems', JSON.stringify(data))
            
        }

    }catch(error){
        console.log(error.message);
        reject(error)
    }
  })
}

export const addTocart=data => {
    return new Promise(async(resolve,reject)=>{
      try{
          const res= await axios.post(addTocartURL,data);
          resolve(res.data);
          if (res.status === 201){
              let data = res.data;
              localStorage.setItem('cartItems', JSON.stringify(data))
              
          }
         
  
      }catch(error){
          console.log(error.message);
          reject(error)
      }
    })
  }

  export const removeFromecart=(id) => {
    return new Promise(async(resolve,reject)=>{
      try{
          const res= await axios.get(removeFromecart/`${id}`);
          
          if (res.status === 200){
              localStorage.removeItem("cartItems")
              
          }
          resolve(true)
  
      }catch(error){
          console.log(error.message);
          reject(error)
      }
    })
  }
