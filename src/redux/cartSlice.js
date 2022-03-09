import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import { addItem,removeItemCart  } from "./cartActionSlice";
import {BASE_URL} from '../Helpers/Constants';
import { addToWishList } from "./wishlistSlice";
const URL=BASE_URL+'/orders/add-to-cart';
const URLList=BASE_URL+'/orders/cart'

const initialState ={
  status:'',
  cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
  qty:0,
  totalPrice:0,
  totalItem:0,
}




//get  best seller products
export const addToCart = createAsyncThunk(
    "cart/add_to_cart",
    async (id,thunkAPI)=> {
     const {dispatch}=thunkAPI
      
      try {
        const response = await axios.post(URL,{
        product_id: id,
        
    }
      )
      Swal.fire({
        icon: 'success',
        title: 'تمت الاضافة بنجاح',
        text: 'تمت اضافة منتج الى سلة المشتريات',
       
      });
      //dispatch(addToWishList(id))
       return response.data
      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops... -_-',
        text: 'حدث خطأ ما !',
        footer: '<a href="/">هل تريد الرجوع الى صفحة الرئيسة?</a>'
      });
    }
  }
);

export const getCartItems = createAsyncThunk(
  "cart/get_cart",
  async ()=> {
    
    try {
      const response = await axios.get(URLList,{
      }
    )  
     
    
     return response.data
    
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops... -_-',
      text: 'حدث خطأ ما !',
      footer: '<a href="/">هل تريد الرجوع الى صفحة الرئيسة?</a>'
    });
  }
}
);

export const removeFromCart = createAsyncThunk(
  "cart/remove_from_cart",
  async (id,thunkAPI)=> {
    
    
    try {
      const response = await axios.delete(`${BASE_URL}/orders/item/${id}`,{
      }
    )  
   
    //localStorage.setItem('cartItems',JSON.stringify(response.data))
     return response.data
    
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops... -_-',
      text: 'حدث خطأ ما !',
      footer: '<a href="/">هل تريد الرجوع الى صفحة الرئيسة?</a>'
    });
  }
}
);
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },
  extraReducers: {
    //best seller products
    [addToCart.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
  },
    [addToCart.fulfilled]: (state, action) => {
          state.isLoading=false
          state.cartItems=action.payload  
          state.status = "success"
  },
    [addToCart.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.cartItems=action.payload 
        state.error='error'
  },
    
  [getCartItems.pending]: (state, action) => {
    state.status = "pending"
    state.isLoading=true
},
  [getCartItems.fulfilled]: (state, action) => {
      state.isLoading=false
      state.cartItems=action.payload
      state.status = "success"
},
[getCartItems.rejected]: (state, action) => {
    state.status = "rejected";
    state.isLoading=false
    state.error='error'
},

  

  [removeFromCart.pending]: (state, action) => {
    state.status = "pending"
    state.isLoading=true
},
  [removeFromCart.fulfilled]: (state, action) => {
      state.isLoading=false
      state.cartItems=action.payload
      state.status = "success"
    
   
  },
 
[removeFromCart.rejected]: (state, action) => {
    state.status = "rejected";
    state.isLoading=false
    state.error='error'
},

  },
 
  
})



export default cartSlice.reducer