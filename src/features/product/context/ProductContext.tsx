import { createContext, useContext } from "react";
import IProduct from "../types/ProductType";

const ProductContext = createContext<{ product: IProduct } | null>(null);

export function useProductCardContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "ProductCard.* component must be rendered as child of ProductCard component"
    );
  }
  return context;
}

export default ProductContext;
