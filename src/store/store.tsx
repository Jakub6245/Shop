import { configureStore } from "@reduxjs/toolkit";
import { reducer as productReducer } from "../features/product/slices/ProductSlice";
import { reducer as cartReducer } from "../features/cart/slices/CartSlice";
import { reducer as searchReducer } from "../features/search/slices/SearchSlice";
import { reducer as loginReducer } from "../features/login/slices/LoginSlice";
import { reducer as usersReducer } from "../features/login/slices/UsersSlice";
import { fetchProducts } from "../services/products/fetchProducts";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    search: searchReducer,
    login: loginReducer,
    users: usersReducer,
    [fetchProducts.reducerPath]: fetchProducts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchProducts.middleware),
});

export default store;
