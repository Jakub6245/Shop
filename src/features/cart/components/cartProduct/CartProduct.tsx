import IProduct from "../../../product/types/ProductType";
import ProductContext from "../../../product/context/ProductContext";
import "../../styles/ProductModal.css";
import ProductDescription from "../../../product/components/productInfo/ProdcutDescription";
import ProductPrice from "../../../product/components/productInfo/ProdcutPrice";
import ProductCount from "../../../product/components/productInfo/ProductCount";
import ProductImage from "../../../productcard/components/ProductImage/ProductImage";
import ProductRating from "../../../product/components/productInfo/ProductRating";
import ProductInfo from "../../../product/components/productInfo/ProductInfo";
import ProductTitle from "../../../product/components/productInfo/ProductTitle";
import ProductButton from "../../../productcard/components/ProductButton/ProductButton";
import { ReactNode } from "react";

type Props = {
  product: IProduct;
  image?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
};

const CartProduct = ({ product, image, info, action }: Props) => {
  return (
    <ProductContext.Provider value={{ product }}>
      <div>
        {image}
        <div>
          {info}

          {action}
        </div>
      </div>
    </ProductContext.Provider>
  );
};

CartProduct.Description = ProductDescription;
CartProduct.Price = ProductPrice;
CartProduct.Count = ProductCount;
CartProduct.Image = ProductImage;
CartProduct.Rating = ProductRating;
CartProduct.Info = ProductInfo;
CartProduct.Title = ProductTitle;
CartProduct.Button = ProductButton;

export default CartProduct;
