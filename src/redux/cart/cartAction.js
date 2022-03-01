import {addToCart,removeFromCart,decreaseQty,getTotalPrice} from "../cartSlice";

import { createCart } from "../../Helpers/api/cart";

export const postCart = ({id,qty}) => async (dispatch) => {
 const { status, message } = await createCart({id,qty});
  try{
    if(status === 200) {
        return dispatch(addToCart(id));
    }
     localStorage.setItem("cartItems", JSON.stringify({id}));
}catch(error){
   
   console.log(error.message)
}
};
