import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IProduct from "../types/ProductType";

const initialState: {
  products: IProduct[];
  activeModalId: number | null;
  quantity: number;
  loading: boolean;
  error: undefined | string;
} = {
  products: [],
  activeModalId: null,
  quantity: 1,
  loading: true,
  error: "",
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{ products: IProduct }>) => ({
      ...state,
      products: [...state.products, action.payload.products],
    }),
    setProducts: (state, action: PayloadAction<{ products: IProduct[] }>) => ({
      ...state,
      products: action.payload.products,
      loading: false,
    }),
    setModalActive: (
      state,
      action: PayloadAction<{ productId: number | null }>
    ) => ({
      ...state,
      activeModalId: action.payload.productId,
    }),
    setProductQuantity: (
      state,
      action: PayloadAction<{ quantity: number }>
    ) => ({
      ...state,
      quantity: action.payload.quantity,
    }),
  },
});

export const { actions, reducer } = productSlice;
