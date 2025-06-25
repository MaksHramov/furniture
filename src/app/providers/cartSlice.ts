// src/slices/cartSlice.ts
import { createSlice,} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {CardProps}   from '../../widgets/Card/Card.props';

interface CartState {
  items: CardProps[];
}

const initialState: CartState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CardProps>) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
