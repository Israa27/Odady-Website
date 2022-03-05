import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState ={
  wishListItems:localStorage.getItem('wishList')?JSON.parse(localStorage.getItem('wishList')):[],
  qty:0,
  totalPrice:0,
  totalItem:0,
}


export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishList(state,action){
      const itemIndex= state.wishListItems.findIndex(
        (item)=>item.id === action.payload.id );
       
      if(itemIndex >= 0){
        state.wishListItems[itemIndex] = {
          ...state.wishListItems[itemIndex],
          qty: state.wishListItems[itemIndex].qty + 1,
          
        };
        toast.info("تم زيادة الكمية ",{position:'bottom-left'})
        
      }
      else{
        const productNot={...action.payload,qty:1};
        state.wishListItems.push(productNot)
        toast.error(`تم اضافة ${action.payload.name} الى قائمة الرغبات `,{position:'bottom-left'});
       
      };
      localStorage.setItem('wishList',JSON.stringify(state.wishListItems))
     
    },
    removeFromWishList(state,action){
      state.wishListItems.map((wishItem) => {
        if (wishItem.id === action.payload.id) {
          const nextwishListItems = state.wishListItems.filter(
            (item) => item.id !== wishItem.id
          );

          state.wishListItems = nextwishListItems;

          toast.error("تم حذف المنتج ", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("wishList", JSON.stringify(state.wishListItems));
        return state;
      });
    },

    decreaseQty(state,action){
      const itemIndex = state.wishListItems.findIndex(
        (item) => item.id === action.payload.id
      );
        if (state.wishListItems[itemIndex].qty > 1) {
          state.wishListItems[itemIndex].qty -= 1;

          toast.error(`تم تقليل الكمية ${action.payload.name} `,{position:'bottom-left'});
        }
        else if (state.wishListItems[itemIndex].qty === 1) {
          const nextwishListItems = state.wishListItems.filter(
            (item) => item.id !== action.payload.id
          );
  
          state.wishListItems = nextwishListItems;
            toast.error(`تم حذف العنصر من قائمة ${action.payload.name} `,{position:'bottom-left'});
            
        }
        localStorage.setItem('wishList',JSON.stringify(state.wishListItems))
       
    },
    getTotal(state, action) {
      let { total, quantity} = state.wishListItems.reduce(
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


export const {addToWishList,removeFromWishList,decreaseQty,getTotal}=wishlistSlice.actions;
export default wishlistSlice.reducer