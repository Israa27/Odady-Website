import { createSlice } from '@reduxjs/toolkit';


const initialState ={
  isloading:false,
  error:'',
}


export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderPending:(state) =>{
        state.isloading = true;
    
    },
    orderSuccess:(state) =>{
        state.isloading =false;
        state.error='';
        
    },
    orderFail:(state,action) =>{
        state.isloading =false;
        state.error=action.payload;
          
    },
     
 
}


  
})

export const {orderPending,orderSuccess,orderFail} =orderSlice.actions;

export default orderSlice.reducer