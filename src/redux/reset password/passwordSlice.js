import { createSlice } from '@reduxjs/toolkit';


const initialState ={
  isloading:false,
  message:'',
  status:'',
  showUpdatePassword: false,
  email: "",
}

export const passwordSlice = createSlice({
    name: 'passwordReset',
    initialState,
    reducers: {
        passwordResetPending:(state) =>{
          state.isloading = true;
      
      },
      passwordResetSuccess:(state,action) =>{
          state.isloading =false;
          state.status='success';
          state.message=action.payload;
          state.email =action.payload.email;
		  state.showUpdatePassword = true;
          
      },
      updatePasswordSuccess: (state,action) => {
        state.isloading = false;
        state.status = "success";
        state.message = action.payload;
      },
      passwordResetFail:(state,action) =>{
          state.isloading =false;
          state.status='error';
          state.message=action.payload;
            
      },
       
   
  }
  
  
    
  })
  

  export const { passwordResetPending, passwordResetSuccess, updatePasswordSuccess, passwordResetFail} = passwordSlice.actions;
  export default passwordSlice.reducer