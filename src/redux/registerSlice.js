import { createSlice } from '@reduxjs/toolkit';


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
          
    },
     
 
}


  
})

export const {registerPending,registerSuccess,registerFail} = registerSlice.actions;

export default registerSlice.reducer