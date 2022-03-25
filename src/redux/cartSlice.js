import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'
import {BASE_URL} from '../Helpers/Constants';
const URL=BASE_URL+'/orders/add-to-cart';
const URLList=BASE_URL+'/orders/cart'
const url='/orders/item/1/reduce-quantity'
const initialState ={
  status:'',
  cartItems:[],
  error:null,
  isLoading:false
}
const token = JSON.parse(localStorage.getItem("token"));
axios.interceptors.request.use(
  config=>{
    config.headers.Authorization= `Bearer ${token}`;
    return config
  }
)


//get  best seller products
export const addToCart = createAsyncThunk(
    "cart/add_to_cart",
    async (id,{ rejectWithValue })=> {
      
      try {
        const response = await axios.post(URL,{
        product_id: id},
        {headers:{
          Authorization:JSON.parse(localStorage.getItem("token"))}
        }
      )
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: "  تمت اضافة منتج الى سلة المشتريات "
      })
       return response.data
      
    } catch (error) {
      
      return rejectWithValue(error.response)
      
    }}
);

export const getCartItems = createAsyncThunk(
  "cart/get_cart",
  async (_,{ rejectWithValue })=> {
    
    try {
      const response = await axios.get(URLList,{
      }
    )  
    
    
     return response.data
    
  } catch (error) {
    return rejectWithValue(error.response.status)
   
  
  }}
);

export const reduceQty = createAsyncThunk(
  "cart/reduce_qty_cart",
  async (id,{rejectWithValue})=> {
    
    
    try {
      const response = await axios.post(`${BASE_URL}/orders/item/${id}/reduce-quantity`,{
        id:id
      }
    )  
   
   
     return response.data
    
  } catch (error) {
    return rejectWithValue(error.response.status)
  }
}
);

export const removeFromCart = createAsyncThunk(
  "cart/remove_from_cart",
  async (id,{ rejectWithValue })=> {
    
    
    try {
      const response = await axios.delete(`${BASE_URL}/orders/item/${id}`,{
      }
    )  
   
     return id
    
  } catch (error) {
    return rejectWithValue(error.response)
    
  
  }
}
);
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },
  extraReducers: {
    //add item to cart
    [addToCart.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
        state.error=''
  },
    [addToCart.fulfilled]: (state, action) => {
          state.isLoading=false
          state.cartItems=[...action.payload]
       
          
            
          
        
          state.status = "success"
          state.error=''
  },
    [addToCart.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error=action.payload
        
       
  },
   //get all items of cart
  [getCartItems.pending]: (state, action) => {
    state.status = "pending"
    state.isLoading=true
    state.error=''
},
  [getCartItems.fulfilled]: (state, action) => {
      state.isLoading=false
      state.cartItems=[...action.payload]
      state.status = "success"
      state.error=''
},
[getCartItems.rejected]: (state, action) => {
    state.status = "rejected";
    state.isLoading=false
    state.error=action.payload
   
},

  
  //remove item from cart
  [removeFromCart.pending]: (state, action) => {
    state.status = "pending"
    state.isLoading=true
    state.error=''
},
  [removeFromCart.fulfilled]: (state, action) => {
      state.isLoading=false
      state.cartItems= state.cartItems.filter((item) =>item.id !== action.payload)
      state.error=''
  },
 
[removeFromCart.rejected]: (state, action) => {
    state.status = "rejected";
    state.isLoading=false
    state.error=action.payload
},
 //reduce qty item to cart
[reduceQty.pending]: (state, action) => {
  state.status = "pending"
  state.isLoading=true
  state.error=''
},
[reduceQty.fulfilled]: (state, action) => {
    state.isLoading=false
  
    state.cartItems=[...state,
    state.cartItems.filter(item => item.id !== action.payload.id)]
   
    state.status = "success"
    state.error=''
  
 
},

[reduceQty.rejected]: (state, action) => {
  state.status = "rejected";
  state.isLoading=false
  state.error=action.payload
}

  },
 
  
})



export default cartSlice.reducer