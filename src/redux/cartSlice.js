import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState ={
  status:'',
  cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
  qty:0,
  totalPrice:0,
  totalItem:0,
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart (state,action){
      const itemIndex= state.cartItems.findIndex(
        (item)=>item.id === action.payload.id );
       
      if(itemIndex >= 0){
        state.cartItems[itemIndex] = {
          ...state.cartItems[itemIndex],
          qty: state.cartItems[itemIndex].qty + 1,
          
        };
        toast.info("تم زيادة الكمية ",{position:'bottom-left'})
        
      }
      else{
        const productNot={...action.payload,qty:1};
        state.cartItems.push(productNot)
        toast.error(`تم اضافة ${action.payload.name} الى قائمة الرغبات `,{position:'bottom-left'});
       
      };
      localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
     
    },
    removeFromCart(state,action){
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          toast.error("تم حذف المنتج ", {
            position: "bottom-left",
          });
        }
        
        localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
       
        return state;
      });
    },

    decreaseQty(state,action){
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
        if (state.cartItems[itemIndex].qty > 1) {
          state.cartItems[itemIndex].qty -= 1;

          toast.error(`تم تقليل الكمية ${action.payload.name} `,{position:'bottom-left'});
        }
        else if (state.cartItems[itemIndex].qty === 1) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
  
          state.cartItems = nextCartItems;
            toast.error(`تم حذف العنصر من سلة المشتريات ${action.payload.title} `,{position:'bottom-left'});
            
        }
        
        localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
       
    },
    getTotalPrice(state, action) {
      let { total, quantity} = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price,qty } = cartItem;
          let totalItem = price * qty;
          cartTotal.total += totalItem;
          cartTotal.quantity += qty;
          
         
          
          return cartTotal;
          
        },
        {
          total: 0,
          quantity: 0,
        
         
          
        }
      );
      state.qty = quantity;
      state.totalPrice = total;
     
      
      
    },
  },
  
 
  
})


export const {addToCart,removeFromCart,decreaseQty,getTotalPrice}=cartSlice.actions;
export default cartSlice.reducer