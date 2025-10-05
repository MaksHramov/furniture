import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import likedReducer from './likedSlice'
import productsReducer from './productsSlice'
import { productsApi } from './productsApi';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    liked: likedReducer,
    products: productsReducer,
    [productsApi.reducerPath] : productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
