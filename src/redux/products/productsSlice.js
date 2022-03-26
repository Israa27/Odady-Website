import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from '../../Helpers/Constants';
const URL=BASE_URL+'/products';


const initialState = {
  company:[],
  category:[],
  best_seller_products: [],
  popular_products:[],
  product_deitals:localStorage.getItem('product')?JSON.parse(localStorage.getItem('product')):[],
  type:[],
  promotion:[],
  status: null,
  isLoading:false,
  error:'',
};
// category information
export const getCategory = createAsyncThunk(
  "products/category",
  async (_,{ rejectWithValue })=> {
    
    try {
      const response = await axios.get(`${BASE_URL}/category/return_categories`,{
       
       
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
//get company name and image
export const getCompany = createAsyncThunk(
  "products/company",
  async (_,{ rejectWithValue })=> {
    
    try {
      const response = await axios.get(`${BASE_URL}/Company`,{
       
       
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
    return  response.data;
   
     
    
    } catch (error) {
      return rejectWithValue(error.response.status)
    }
  }
);


//get type

export const getType = createAsyncThunk(
  "products/type",
  async (_,{ rejectWithValue })=> {
    
    try {
      const response = await axios.get(`${BASE_URL}/types`,{

        headers:{
          "Content-Type" : "application/json",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authortization',
          'Acces-Control-Allow-Methods':'GET, POST, PATCH, DELETE', 
      }
      }
    );
    
    return response.data;
   
     
    
    } catch (error) {
      return rejectWithValue(error.response.status)
    }
  }
);
// promotion announcement
export const getPromotion = createAsyncThunk(
  "products/promotion",
  async (_,{ rejectWithValue })=> {
    
    try {
      const response = await axios.get(`${BASE_URL}/promo`,{

        headers:{
          "Content-Type" : "application/json",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authortization',
          'Acces-Control-Allow-Methods':'GET, POST, PATCH, DELETE', 
      }
      }
    );
    
    return response.data;
   
     
    
    } catch (error) {
      return rejectWithValue(error.response.status)
    }
  }
);
const allproductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
   
   
  },
  extraReducers: {
    //Category
    [getCategory.pending]: (state, action) => {
      state.status = "pending"
      state.isLoading=true
      state.error=''
    },
    [getCategory.fulfilled]: (state, action) => {
        state.isLoading=false
        state.category=action.payload
        state.status = "success"
        state.error=''
},
    [getCategory.rejected]: (state, action) => {
      state.status = "rejected";
      state.isLoading=false
      state.error=action.payload
    },
    //company information
    [getCompany.pending]: (state, action) => {
      state.status = "pending"
      state.isLoading=true
      state.error=''
    },
    [getCompany.fulfilled]: (state, action) => {
        state.isLoading=false
        state.company=action.payload
        state.status = "success"
        state.error=''
},
    [getCompany.rejected]: (state, action) => {
      state.status = "rejected";
      state.isLoading=false
      state.error=action.payload
    },

    //best seller products
    [getBestSellerProducts.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
        state.error=''
      },
      [getBestSellerProducts.fulfilled]: (state, action) => {
          state.isLoading=false
          state.best_seller_products=action.payload
          state.status = "success"
          state.error=''
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
      state.error=''
    },
    [getPopularProducts.fulfilled]: (state, action) => {
        state.isLoading=false
        state.popular_products=action.payload
        state.status = "success"
        state.error=''
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


    //get type
    [getType.pending]: (state, action) => {
      state.status = "pending"
      state.isLoading=true
      state.error=''
    },
    [getType.fulfilled]: (state, action) => {
      
        state.isLoading=false
        state.type=action.payload
        state.status = "success"
        state.error=''
},
    [getType.rejected]: (state, action) => {
      state.status = "rejected";
      state.isLoading=false
      state.error=action.payload
    },

    //promotion
    [getPromotion.pending]: (state, action) => {
      state.status = "pending"
      state.isLoading=true
      state.error=''
    },
    [getPromotion.fulfilled]: (state, action) => {
      
        state.isLoading=false
        state.promotion=action.payload
        state.status = "success"
        state.error=''
},
    [getPromotion.rejected]: (state, action) => {
      state.status = "rejected";
      state.isLoading=false
      state.error=action.payload
    },
  },

});


export default allproductsSlice.reducer