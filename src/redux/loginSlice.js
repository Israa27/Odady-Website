import { createSlice } from '@reduxjs/toolkit';


const initialState ={
  isloading:false,
  isAuth:false,
  error:'',
}


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginPending:(state) =>{
        state.isloading = true;
    
    },
    loginSuccess:(state) =>{
        state.isloading =false;
        state.isAuth=true;
        state.error='';
        
    },
    loginFail:(state,action) =>{
        state.isloading =false;
        state.error=action.payload;
          
    },
     
 
}


  
})

export const {loginPending,loginSuccess,loginFail} = loginSlice.actions;

export default loginSlice.reducer