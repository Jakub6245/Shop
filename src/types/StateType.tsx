import IProduct from "../features/product/types/ProductType";

interface IState {
  products: {
    products: IProduct[];
    activeModalId: number | null;
    quantity: number;
    loading: boolean;
    error: undefined | string;
  };
  cart: { cart: { product: IProduct; quantity: number }[] };
  search: {
    searchValue: string;
    searchCategory: string;
  };
  login: {
    name: string;
    password: string;
    isLogged: boolean;
    isFirstLogIn: boolean;
  };
  users: { name: string; password: string }[];
}

export default IState;
