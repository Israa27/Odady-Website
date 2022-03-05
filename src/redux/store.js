import { configureStore } from '@reduxjs/toolkit'
import cartReducer , { getTotalPrice } from './cartSlice';
import loginReducer from './loginSlice';
import userReducer from './user/userSlice';
import wishlistReducer , { getTotal }from './wishlistSlice';
import registerReducer from './registerSlice';
import passwordReducer  from './reset password/passwordSlice';
import allproductsReducer, { getBestSellerProducts,getPopularProducts, getProductDetails  } from './products/productsSlice';
import catgoriesReducer ,{getCategory,getSubCategory} from './catgoriesSlice';
import orderReducer from './order/orderSlice';
import showAllReducer, { viweAllProducts } from './showAllSlice';

const store = configureStore({
  reducer: {
    
    register:registerReducer,
    login:loginReducer,
    passwordReset:passwordReducer,
    user: userReducer,
    product:allproductsReducer,
    category:catgoriesReducer,
    cart:cartReducer,
    order:orderReducer,
    wishlist: wishlistReducer,
    all:showAllReducer,
   
    
  },
});


store.dispatch(getPopularProducts());
store.dispatch(getCategory());
store.dispatch(getSubCategory());
store.dispatch(getBestSellerProducts());
store.dispatch(getProductDetails());
store.dispatch(viweAllProducts())
store.dispatch(getTotalPrice());
store.dispatch(getTotal());




export default store;