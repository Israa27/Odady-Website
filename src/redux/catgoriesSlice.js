import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {BASE_URL} from '../Helpers/Constants';
const categoryURL=BASE_URL+'/products';


const initialState = {
  category: [],
  subCategory:[],
  status: null,
  isLoading:false,
  error:'',
};


export const getCategory = createAsyncThunk(
  "products/category",
  async (category)=> {
    
    try {
      const response = await axios.get(categoryURL,{
        params:{category:category},
        headers:{
          "Content-Type" : "application/json",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authortization',
          'Acces-Control-Allow-Methods':'GET, POST, PATCH, DELETE', 
        }
    });

     return response.data;
    
    } catch (error) {
      console.log(error);
    }
  }
);

export const getSubCategory = createAsyncThunk(
    "products/subCategory",
    async (category)=> {
      
      try {
        const response = await axios.get(categoryURL,{
          params:{type:category},
          headers:{
            "Content-Type" : "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authortization',
            'Acces-Control-Allow-Methods':'GET, POST, PATCH, DELETE', 
          }
      });
      
       return response.data;
      
      } catch (error) {
        console.log(error);
      }
    }
  );

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
   
   
  },
  extraReducers: {
    //best seller products
    [getCategory.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
      },
      [getCategory.fulfilled]: (state, action) => {
          state.isLoading=false
          state.category=action.payload
          state.status = "success"
  },

    [getCategory.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error='error'
      },
    
    //get SubCategory
    [getSubCategory.pending]: (state, action) => {
        state.status = "pending"
        state.isLoading=true
      },
    [getSubCategory.fulfilled]: (state, action) => {
          state.isLoading=false
          state.subCategory=action.payload
          state.status = "success"
  },

    [getSubCategory.rejected]: (state, action) => {
        state.status = "rejected";
        state.isLoading=false
        state.error='error'
      },

   
      
  },
});


export default categoriesSlice.reducer

  

   
  