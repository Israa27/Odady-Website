import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../Helpers/Constants";
const URL=BASE_URL;


const initialState = {
  all_products:localStorage.getItem('allProducts')?JSON.parse(localStorage.getItem('allProducts')):[],
  status: null,
  isLoading:false,
  error:'',
};

export const viweAllProducts = createAsyncThunk(
    "products/all_products",
    async (value)=> {
      
      try {
        const response = await axios.get(`${URL}/products?${value}`,{
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

export const compnayProducts = createAsyncThunk(
    "products/company_products",
    async (id)=> {
      
      try {
        const response = await axios.get(`${URL}/Company/get company products/${id}`,{
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
// category products
export const categoryProducts = createAsyncThunk(
    "products/category_products",
    async (id)=> {
      
      try {
        const response = await axios.get(`${URL}/category/category/${id}/products`,{
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
// search
export const searchProducts = createAsyncThunk(
    "products/search_products",
    async (keyword)=> {
      
      try {
        const response = await axios.get(`${URL}/products?q=${keyword}`,{
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

//type products 
export const getTypeProducts = createAsyncThunk(
    "products/sub-category",
    async (value)=> {
      
      try {
        const response = await axios.get(`${URL}/products?type=${value}`,{
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

export const getPromotionProducts = createAsyncThunk(
    "products/promotion_products",
    async (id)=> {
      
      try {
        const response = await axios.get(`${URL}/promo/get promo products/${id}`,{
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

// get related products 
export const getRelatedProducts = createAsyncThunk(
  "products/related_products ",
  async (id,{ rejectWithValue })=> {
    
    try {
      const response = await axios.get(`${URL}/products/${id}/related`,{

          headers:{
            "Content-Type" : "application/json",
            'Access-Control-Allow-Origin': '*',
        }
      }
    );
    localStorage.setItem('allProducts ',JSON.stringify(response.data))
    return response.data;
   
     
    
    } catch (error) {
      return rejectWithValue(error.response.status)
    }
  }
);

const showAllSlice = createSlice({
  name: "all_products",
  initialState,
  reducers: {
   
   
  },
  extraReducers: {
    //all products
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

      [categoryProducts.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
      },
      [categoryProducts.fulfilled]: (state, action) => {
          state.isLoading=false
          state.all_products=action.payload
          state.status = "success"
  },
      [categoryProducts.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error='error'
      },

      //get company products
      [compnayProducts.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
      },
      [compnayProducts.fulfilled]: (state, action) => {
          state.isLoading=false
          state.all_products=action.payload
          state.status = "success"
  },
      [compnayProducts.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error='error'
      },
      // sreach
      [searchProducts.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
      },
      [searchProducts.fulfilled]: (state, action) => {
          state.isLoading=false
          state.all_products=[...action.payload]
          state.status = "success"
  },
      [searchProducts.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error='error'
      },
      //get Related Products
      [getRelatedProducts.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
      },
      [getRelatedProducts.fulfilled]: (state, action) => {
          state.isLoading=false
          state.all_products=[...action.payload]
          state.status = "success"
  },
      [getRelatedProducts.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error='error'
      },
      // get sub-category
      [getTypeProducts.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
      },
      [getTypeProducts.fulfilled]: (state, action) => {
          state.isLoading=false
          state.all_products=[...action.payload]
          state.status = "success"
  },
      [getTypeProducts.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error='error'
      },
    // get products of Promotion
      [getPromotionProducts.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
      },
      [getPromotionProducts.fulfilled]: (state, action) => {
          state.isLoading=false
          state.all_products=[...action.payload]
          state.status = "success"
  },
      [getPromotionProducts.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error='error'
      },
   
},
});


export default showAllSlice.reducer