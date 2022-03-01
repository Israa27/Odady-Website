import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL='https://mofalihodd.herokuapp.com/api/products';


const initialState = {
  all_products:[],
  status: null,
  isLoading:false,
  error:'',
};

export const viweAllProducts = createAsyncThunk(
    "products/all_products",
    async (value)=> {
      
      try {
        const response = await axios.get(`${URL}?${value}`,{
         headers:{
          "Content-Type" : "application/json",
          'Access-Control-Allow-Origin': '*',
        
      }  
    })
      
      return response.data;
      
      } catch (error) {
        console.log(error);
      }
    }
  );



const showAllSlice = createSlice({
  name: "all_products",
  initialState,
  reducers: {
   
   
  },
  extraReducers: {
    //best seller products
    [viweAllProducts.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
      },
      [viweAllProducts.fulfilled]: (state, action) => {
          state.isLoading=false
          state.all_products=action.payload
          state.status = "success"
  },
      [viweAllProducts.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error='error'
      },
    
   
},
});


export default showAllSlice.reducer