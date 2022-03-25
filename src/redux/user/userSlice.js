import { createSlice } from '@reduxjs/toolkit';


const initialState ={
  user:localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):[],
  isloading:false,
  error:'',
}


export const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserPending:(state) =>{
        state.isloading = true;
    
    },
    getUserSuccess:(state,action) =>{
        state.isloading =false;
        state.user=action.payload;
        state.error='';
        
    },
    getUserFail:(state,action) =>{
        state.isloading =false;
        state.error=action.payload;
          
    },
     
 
}


  
})

export const {getUserFail,getUserSuccess,getUserPending} = loginSlice.actions;

export default loginSlice.reducer