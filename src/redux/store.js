import { configureStore } from '@reduxjs/toolkit'
import productsReducer, { productsFetch } from "./productSlice";
import { getTotalPrice } from './cartSlice';
import CartReducer  from './cartSlice';
import loginReducer from './loginSlice';
import userReducer from './userSlice';
import wishlistReducer from './wishlistSlice';
import registerReducer from './registerSlice';
import singleProductReducer ,{ productFetch} from './singleProductSlice'
import passwordReducer  from './reset password/passwordSlice';

const store = configureStore({
  reducer: {

    register:registerReducer,
    login:loginReducer,
    passwordReset:passwordReducer,
    user: userReducer,
    products: productsReducer,
    product_id: singleProductReducer,
    cart:CartReducer,
    wishlist: wishlistReducer,
    
  },
});

store.dispatch(productsFetch());
store.dispatch(productFetch());
store.dispatch(getTotalPrice());

export default store;