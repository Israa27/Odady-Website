import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'
import {BASE_URL} from '../Helpers/Constants';
const URL=BASE_URL+'/wish list/add-to-wishes';
const URLList=BASE_URL+'/wish list/wishes list'
const initialState ={
  status:'',
  wishlistItems:[],
  isLoading:false,
  error:null
}




//get  best seller products
export const addToWishList = createAsyncThunk(
    "wishlist/add_to_wishlist",
    async (id,{ rejectWithValue })=> {
    
      
      try {
        const response = await axios.post(URL,{
          product_id: id,
        
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
        title: "  تمت اضافة منتج الى قائمة الرغبات "
      })
      
       return response.data
      
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
);

export const getWishListItems = createAsyncThunk(
  "wishlist/get_wishlist",
  async (_,{ rejectWithValue })=> {
    
    try {
      const response = await axios.get(URLList,{
      }
    )  
     
    //localStorage.setItem('cartItems',JSON.stringify(response.data))
     return response.data
    
  } catch (error) {
    return rejectWithValue(error.response.status)
    
  }}
);



export const removeFromWishList = createAsyncThunk(
  "cart/remove_from_cart",
  async (id,{rejectWithValue })=> {
    
    
    try {
      const response = await axios.delete(`${BASE_URL}/wish list/wish/${id}`,{
      }
    )  
   
    //localStorage.setItem('cartItems',JSON.stringify(response.data))
     return id
    
  } catch (error) {
    return rejectWithValue(error.response)
  
  
  }
}
);
export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
  },
  extraReducers: {
    //add item to cart
    [addToWishList.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
        state.error=''
  },
    [addToWishList.fulfilled]: (state, action) => {
          state.isLoading=false
          state.wishlistItems=[...action.payload]
          state.status = "success"
          state.error=''
  },
    [addToWishList.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error=action.payload
        
  },
   //get all items of cart
  [getWishListItems.pending]: (state, action) => {
    state.status = "pending"
    state.isLoading=true
    state.error=''
},
  [getWishListItems.fulfilled]: (state, action) => {
      state.isLoading=false
      state.wishlistItems= action.payload
      state.status = "success"
      state.error=''
},
[getWishListItems.rejected]: (state, action) => {
    state.status = "rejected";
    state.isLoading=false
    state.error=action.payload
   
},

  
  //remove item from cart
  [removeFromWishList.pending]: (state, action) => {
    state.status = "pending"
    state.isLoading=true
    state.error=''
},
  [removeFromWishList.fulfilled]: (state, action) => {
      state.isLoading=false
      state.status = "success"
      state.wishlistItems= state.wishlistItems.filter((item) =>item.id !== action.payload)
      state.error=''
  },
 
[removeFromWishList.rejected]: (state, action) => {
    state.status = "rejected";
    state.isLoading=false
    state.error=action.payload
},


  },
 
  
})



export default wishlistSlice.reducer