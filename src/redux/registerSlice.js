import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2'

const initialState ={
  isloading:false,
  error:'',
}


export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerPending:(state) =>{
        state.isloading = true;
    
    },
    registerSuccess:(state) =>{
        state.isloading =false;
        state.error='';
        
    },
    registerFail:(state,action) =>{
        state.isloading =false;
        state.error=action.payload;
        if(state.error==='Request failed with status code 400'){
          Swal.fire({
            icon: 'error',
            title: 'تم انشاء حساب من قبل',
            text: 'يرجى تسجيل الدخول  ',
            footer: '<a href="/">هل تريد الرجوع الى صفحة الرئيسة?</a>'
            
            }).then(function() {
            window.location = "/login";
          })
        }
          
    },
     
 
}


  
})

export const {registerPending,registerSuccess,registerFail} = registerSlice.actions;

export default registerSlice.reducer