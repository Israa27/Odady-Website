import { createSlice } from '@reduxjs/toolkit';


const initialState ={
  isloading:false,
  isAuth:false,
  token:localStorage.getItem('token')?JSON.parse(localStorage.getItem('token')):[],
  error:'',
}


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginPending:(state) =>{
        state.isloading = true;
    
    },
    loginSuccess:(state,action) =>{
        state.isloading =false;
        state.isAuth=true;
        state.token=action.payload;
        state.error='';
        
    },
    logoutSuccess:(state) =>{
      state.isloading =false;
      state.isAuth=false;
      state.error='';
      
  },
    loginFail:(state,action) =>{
        state.isloading =false;
        state.error=action.payload;
          
    },
     
 
}


  
})

export const {loginPending,loginSuccess,loginFail,logoutSuccess} = loginSlice.actions;

export default loginSlice.reducer