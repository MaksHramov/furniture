import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import likedReducer from './likedSlice'
import productsReducer from './productsSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    liked: likedReducer,
    products: productsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
