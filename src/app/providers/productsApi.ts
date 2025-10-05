import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../shared/api/api";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: `${API_URL}/v1/`}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (limit = 20) => `products?limit=${limit}`
        })
    })
})

export const {useGetProductsQuery} = productsApi;