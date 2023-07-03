import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IProduct from "../../features/product/types/ProductType";
import apiUrl from "./config/ApiUrl";

export const fetchProducts = createApi({
  reducerPath: "useFetchProducts",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Array<IProduct>, void>({
      query: () => "products",
    }),
    getSingleProduct: builder.query<IProduct, string>({
      query: (productId) => `products/${productId}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } =
  fetchProducts;
