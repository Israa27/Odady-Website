import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from '../../Helpers/Constants';
const URL=BASE_URL+'/products';


const initialState = {
  best_seller_products: [],
  popular_products:[],
  product_deitals:[],
  search:[],
  status: null,
  isLoading:false,
  error:'',
};
//get  best seller products
export const getBestSellerProducts = createAsyncThunk(
    "products/best_seller_products",
    async (_,{ rejectWithValue })=> {
      
      try {
        const response = await axios.get(URL,{
          params:{best_seller:true},
         
         headers:{
          "Content-Type" : "application/json",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authortization',
          'Acces-Control-Allow-Methods':'GET, POST, PATCH, DELETE', 
          "Access-Control-Allow-Origin": "http://localhost:3000",
      }  
    }
      )
      
      return response.data;
      
      } catch (error) {
        return rejectWithValue(error.response.status)
      }
    }
  );

//get popular products
export const getPopularProducts = createAsyncThunk(
  "products/popular_products",
  async (_,{ rejectWithValue })=> {
    
    try {
      const response = await axios.get(URL,{
          params:{popular:true},
          mode: 'no-cors',
          headers:{
            "Content-Type" : "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authortization',
            'Acces-Control-Allow-Methods':'GET, POST, PATCH, DELETE', 
        }
      }
    )
     return response.data;
    
    } catch (error) {
      return rejectWithValue(error.response.status)
    }
  }
);
//get product details
export const getProductDetails = createAsyncThunk(
  "products/product_details",
  async (id,{ rejectWithValue })=> {
    
    try {
      const response = await axios.get(`${URL}/${id}`,{

          headers:{
            "Content-Type" : "application/json",
            'Access-Control-Allow-Origin': '*',
        }
      }
    );
    localStorage.setItem('product',JSON.stringify(response.data))
    return response.data;
   
     
    
    } catch (error) {
      return rejectWithValue(error.response.status)
    }
  }
);

export const searchProducts = createAsyncThunk(
  "products/search",
  async (value,{ rejectWithValue })=> {
    
    try {
      const response = await axios.get(URL,{
          params:{q:value},
          mode: 'no-cors',
          headers:{
            "Content-Type" : "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authortization',
            'Acces-Control-Allow-Methods':'GET, POST, PATCH, DELETE', 
        }
      }
    )
     return response.data;
    
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const allproductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
   
   
  },
  extraReducers: {
    //best seller products
    [getBestSellerProducts.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
      },
      [getBestSellerProducts.fulfilled]: (state, action) => {
          state.isLoading=false
          state.best_seller_products=action.payload
          state.status = "success"
  },
      [getBestSellerProducts.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error=action.payload
      },
    
    //popular products
    [getPopularProducts.pending]: (state, action) => {
      state.status = "pending"
      state.isLoading=true
    },
    [getPopularProducts.fulfilled]: (state, action) => {
        state.isLoading=false
        state.popular_products=action.payload
        state.status = "success"
},
    [getPopularProducts.rejected]: (state, action) => {
      state.status = "rejected";
      state.isLoading=false
      state.error=action.payload
    },

    //get Product Details
    [getProductDetails.pending]: (state, action) => {
      state.status = "pending"
      state.isLoading=true
      state.error=''
    },
    [getProductDetails.fulfilled]: (state, action) => {
      
        state.isLoading=false
        state.product_deitals=action.payload
        state.status = "success"
        state.error=''
},
    [getProductDetails.rejected]: (state, action) => {
      state.status = "rejected";
      state.isLoading=false
      state.error=action.payload
    },

    //search 
    [searchProducts.pending]: (state, action) => {
      state.status = "pending"
      state.isLoading=true
      state.error=''
    },
    [searchProducts.fulfilled]: (state, action) => {
      
        state.isLoading=false
        state.search=action.payload
        state.status = "success"
        state.error=''
},
    [searchProducts.rejected]: (state, action) => {
      state.status = "rejected";
      state.isLoading=false
      state.error=action.payload
    },
  },
});


export default allproductsSlice.reducer