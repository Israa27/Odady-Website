import { createSlice } from '@reduxjs/toolkit';


const initialState ={
  isloading:false,
  error:'',
}


export const updateAccountSlice = createSlice({
  name: 'updateAccount',
  initialState,
  reducers: {
    updateAccountPending:(state) =>{
        state.isloading = true;
    
    },
    updateAccountSuccess:(state) =>{
        state.isloading =false;
        state.error='';
        
    },
    updateAccountFail:(state,action) =>{
        state.isloading =false;
        state.error=action.payload;
          
    },
     
 
}


  
})

export const {updateAccountPending,updateAccountSuccess,updateAccountFail} = updateAccountSlice.actions;

export default updateAccountSlice.reducer