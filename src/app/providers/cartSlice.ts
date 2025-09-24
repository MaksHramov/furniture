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
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        if (existingItem.quantity !== undefined) {
          existingItem.quantity++;
        } else {
          existingItem.quantity = 2; 
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); 
      }
    },
    
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
    incrementQuantity(state, action: PayloadAction<number>){
      const item = state.items.find(item => item.id === action.payload)
      if (item) item.quantity++
    },
    decrementQuantity(state, action: PayloadAction<number>){
      const item = state.items.find(item => item.id === action.payload)
      if (item) item.quantity--
    }
  }
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
