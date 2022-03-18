import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../Helpers/Constants";
const URL=BASE_URL;


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
        const response = await axios.get(value ?`${URL}/products?${value}` : `${URL}/products`,{
         headers:{
          "Content-Type" : "application/json",
          'Access-Control-Allow-Origin': '*',
        
      }  
    })
    localStorage.setItem('allProducts',JSON.stringify(response.data))
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