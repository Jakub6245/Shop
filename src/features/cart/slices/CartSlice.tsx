import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IProduct from "../../product/types/ProductType";

const initialState: { cart: { product: IProduct; quantity: number }[] } = {
  cart: [],
};

const searchById = (
  arr: { product: IProduct; quantity: number }[],
  id: number
) => {
  return arr.find((obj) => obj.product.id === id)!;
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<{ product: IProduct; quantity: number }>
    ) => {
      const checkIfProductIsInCart = searchById(
        state.cart,
        action.payload.product.id
      );
      if (!checkIfProductIsInCart) {
        return {
          ...state,
          cart: [
            ...state.cart,

            {
              product: action.payload.product,
              quantity: action.payload.quantity,
            },
          ],
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.product.id === action.payload.product.id) {
              return {
                ...item,
                quantity: item.quantity + action.payload.quantity,
              };
            }
            return item;
          }),
        };
      }
    },
    setCartProductQuantity: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => ({
      ...state,
      cart: state.cart.map((item) => {
        if (item.product.id === action.payload.productId) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      }),
    }),
    deleteCartProduct: (
      state,
      action: PayloadAction<{ productId: number }>
    ) => ({
      ...state,
      cart: state.cart.filter(
        (item) => item.product.id !== action.payload.productId
      ),
    }),
  },
});

export const { actions, reducer } = cartSlice;
