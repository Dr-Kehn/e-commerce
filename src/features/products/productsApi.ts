// src/features/products/productsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductsResponse } from '../../types/product';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, { limit: number; skip: number }>({
      query: ({ limit, skip }) => `products?limit=${limit}&skip=${skip}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
