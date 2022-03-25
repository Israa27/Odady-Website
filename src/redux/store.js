import { configureStore } from '@reduxjs/toolkit'
import cartReducer, {getCartItems }  from './cartSlice';
import loginReducer ,{ loginSuccess} from './loginSlice';
import userReducer from './user/userSlice';
import wishlistReducer , { getWishListItems }from './wishlistSlice';
import registerReducer from './registerSlice';
import passwordReducer  from './reset password/passwordSlice';
import allproductsReducer, { getBestSellerProducts,getPopularProducts, getProductDetails, getPromotion ,getType } from './products/productsSlice';
//import catgoriesReducer ,{getCategory,getSubCategory} from './catgoriesSlice';
import orderReducer from './order/orderSlice';
import showAllReducer, { getRelatedProducts, searchProducts, viweAllProducts } from './showAllSlice';
import { getUserProfile } from './user/userAction';

const store = configureStore({
  reducer: {
    
    register:registerReducer,
    login:loginReducer,
    passwordReset:passwordReducer,
    user: userReducer,
    product:allproductsReducer,
    cart:cartReducer,
    order:orderReducer,
    wishlist: wishlistReducer,
    all:showAllReducer,
  },


});



store.dispatch(getPopularProducts());
store.dispatch(getUserProfile());
store.dispatch(getBestSellerProducts());
store.dispatch(getProductDetails());
store.dispatch(getRelatedProducts());
store.dispatch(getPromotion());
store.dispatch(searchProducts())
store.dispatch(getCartItems())
store.dispatch(getType())
store.dispatch(getWishListItems())
store.dispatch(loginSuccess())



export default store;