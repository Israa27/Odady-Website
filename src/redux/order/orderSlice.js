import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import {BASE_URL} from '../../Helpers/Constants';
const URL=BASE_URL+'/orders/use_coupon';

const initialState ={
  status:'',
  coupon:[],
  isLoading:false

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

export const PostCoupon = createAsyncThunk(
  "order/get_coupon",
  async (code)=> {
    
    try {
      const response = await axios.post(`${URL}?coupon_code=${code}`,{
 
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
      title: 'تمت العملية بنجاح '
    })
     return response.data
    
  } catch (error) {
  
  }}
);



export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
  },
  extraReducers: {
    
    [PostCoupon.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
  },
    [PostCoupon.fulfilled]: (state, action) => {
          state.isLoading=false
          state.coupon=[action.payload]
          state.status = "success"
  },
    [PostCoupon.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error='error'
  },
    


  

 



  },
 
  
})

export default orderSlice.reducer