import IProduct from "../../product/types/ProductType";

interface ICartProduct {
  product: IProduct;
  quantity: number;
}

export default ICartProduct;
