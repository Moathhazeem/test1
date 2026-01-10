import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    addedToCart: {}
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existItem = state.items.find(item => item.name === newItem.name);
      if(existItem){
        existItem.quantity++;
      }else{
        state.items.push({...newItem, quantity: 1});
      }
      console.log(state.items);
    },
    removeItem: (state, action) => {
      const toRemoveItem = action.payload;
      state.items = state.items.filter(item => item.name !== toRemoveItem.name);
    },
    updateQuantity: (state, action) => {
      const {toUpdateItem, qty} = action.payload;
      const existItem = state.items.find(item => item.name === toUpdateItem.name);
      if(existItem){
        existItem.quantity = qty;
      }else{
        state.items.push({...toUpdateItem, quantity: qty});
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;