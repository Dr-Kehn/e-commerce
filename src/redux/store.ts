// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../features/products/productsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    // Add other slices here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);

// Optional: setup types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
