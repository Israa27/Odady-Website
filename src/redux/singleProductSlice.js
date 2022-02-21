import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  item : [],
  status: null,
};

export const productFetch = createAsyncThunk(
  "singleProduct/productFetch",
  async (id)=> {
    
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
    );
    return response.data;
    
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "product_id",
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [productFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productFetch.fulfilled]: (state, action) => {

        state.item=action.payload,
        
        state.status = "success";
},
    [productFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});


export default productSlice.reducer