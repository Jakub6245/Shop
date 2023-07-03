import { ReactNode } from "react";
import IProduct from "../../../product/types/ProductType";
import ProductContext from "../../../product/context/ProductContext";
import "./ProductCard.scss";

import ProductDescription from "../../../product/components/productInfo/ProdcutDescription";
import ProductPrice from "../../../product/components/productInfo/ProdcutPrice";
import ProductCount from "../../../product/components/productInfo/ProductCount";
import ProductImage from "../ProductImage/ProductImage";
import ProductRating from "../../../product/components/productInfo/ProductRating";
import ProductInfo from "../../../product/components/productInfo/ProductInfo";
import ProductTitle from "../../../product/components/productInfo/ProductTitle";
import ProductButton from "../ProductButton/ProductButton";

type Props = {
  product: IProduct;
  image?: ReactNode;
  info?: ReactNode;
  action?: () => void;
};

const ProductCard = ({ product, image, info, action }: Props) => {
  return (
    <ProductContext.Provider value={{ product }}>
      <div onClick={action} className="product__card">
        {image}
        <div>{info}</div>
      </div>
    </ProductContext.Provider>
  );
};

ProductCard.Description = ProductDescription;
ProductCard.Price = ProductPrice;
ProductCard.Count = ProductCount;
ProductCard.Image = ProductImage;
ProductCard.Rating = ProductRating;
ProductCard.Info = ProductInfo;
ProductCard.Title = ProductTitle;
ProductCard.Button = ProductButton;

export default ProductCard;
