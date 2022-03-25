import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'
import {BASE_URL} from '../../Helpers/Constants';


const initialState ={
  status:'',
  coupon:[],
  orderId:[],
  orderlist:[],
  orderInfo:localStorage.getItem('productInfo')?JSON.parse(localStorage.getItem('productInfo')):[],
  isLoading:false,
  

}




//get coupon 
export const PostCoupon = createAsyncThunk(
  "order/get_coupon",
  async (code)=> {
    
    try {
      const response = await axios.post(`${BASE_URL}/orders/use_coupon?coupon_code=${code}`,{
 
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
      icon: 'error',
      title: 'الرمز غير صالح '
    })
  }}
);

// create order
export const CreateOrder = createAsyncThunk(
  "order/create_order",
  async (id)=> {
    
    try {
      const response = await axios.post(id ?`${BASE_URL}/orders/create-order`:`${BASE_URL}/orders/create-order?coupon_id=${id}`,{
 
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
      console.log(error)
  }}
);
// get order 
export const getOrders = createAsyncThunk(
  "order/get_orders",
  async ()=> {
    
    try {
      const response = await axios.get(`${BASE_URL}/orders/list_orders`,{
 
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
      console.log(error)
  }}
);
// get order info
export const getOrderInfo = createAsyncThunk(
  "order/get_order_info",
  async (id)=> {
    
    try {
      const response = await axios.get(`${BASE_URL}/orders/order_info/${id}`,{
 
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
    localStorage.setItem('productInfo',JSON.stringify(response.data))
    return response.data
    
  } catch (error) {
      console.log(error)
  }}
);
export const CheckOut = createAsyncThunk(
  "order/checkout",
  async (value)=> {
    
    try {
      const response = await axios.post(`${BASE_URL}/orders/check_out`,{
        Baghdad:value,
      
      }
     
    )  
    Swal.fire({
      icon: 'success',
      title:'تم ارسال الطلب',
      text: 'تم ارسال طلبك بنجاح ^_^',

      
      }).then(function() {
      window.location = "/";
    })
     
     return response.data
    
  } catch (error) {
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
      icon: 'error',
      title: 'الرمز غير صالح '
    })
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
        state.error=''
  },
    [PostCoupon.fulfilled]: (state, action) => {
          state.isLoading=false
          state.coupon=[action.payload]
          state.status = "success"
          state.error=''
  },
    [PostCoupon.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error='error'
  },
    
// create order
[CreateOrder.pending]: (state, action) => {
    state.status = "pending"
    state.isLoading=true
    state.error=''
},
[CreateOrder.fulfilled]: (state, action) => {
      state.isLoading=false
      state.orderId=action.payload
      state.status = "success"
      state.error=''
},
[CreateOrder.rejected]: (state, action) => {
    state.status = "rejected";
    state.isLoading=false
    state.error='error'
},
// get order list
[getOrders.pending]: (state, action) => {
  state.status = "pending"
  state.isLoading=true
  state.error=''
},
[getOrders.fulfilled]: (state, action) => {
    state.isLoading=false
    state.orderlist=action.payload
    state.status = "success"
    state.error=''
},
[getOrders.rejected]: (state, action) => {
  state.status = "rejected";
  state.isLoading=false
  state.error='error'
},

[getOrderInfo.pending]: (state, action) => {
  state.status = "pending"
  state.isLoading=true
  state.error=''
},
[getOrderInfo.fulfilled]: (state, action) => {
    state.isLoading=false
    state.orderInfo=action.payload 
    state.status = "success"
    state.error=''
},
[getOrderInfo.rejected]: (state, action) => {
  state.status = "rejected";
  state.isLoading=false
  state.error='error'
},
//checkout
[CheckOut.pending]: (state, action) => {
  state.status = "pending"
  state.isLoading=true
  state.error=''
},
[CheckOut.fulfilled]: (state, action) => {
    state.isLoading=false
    state.status = "success"
    state.error=''
},
[CheckOut.rejected]: (state, action) => {
  state.status = "rejected";
  state.isLoading=false
  state.error='error'
},

  

 



  },
 
  
})

export default orderSlice.reducer