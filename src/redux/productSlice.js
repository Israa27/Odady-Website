import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const initialState = {
  items: [],
  status: null,
  isLoading:false,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
 async  () => {
    
    try {
      const response = await axios.get(
        'https://fakestoreapi.com/products'
     
       );
         
       return response.data;
     

    } catch (error) {
      console.log(error);
    }
  }

);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
      state.isLoading=true
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
      state.isLoading=false;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.isLoading=true
    },
  },
});




export default productsSlice.reducer;