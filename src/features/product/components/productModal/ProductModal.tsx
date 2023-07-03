import IProduct from "../../types/ProductType";
import ProductContext from "../../context/ProductContext";
import "./ProductModal.scss";
import IState from "../../../../types/StateType";
import ProductDescription from "../productInfo/ProdcutDescription";
import ProductPrice from "../productInfo/ProdcutPrice";
import ProductCount from "../productInfo/ProductCount";
import ProductImage from "../../../productcard/components/ProductImage/ProductImage";
import ProductRating from "../productInfo/ProductRating";
import ProductInfo from "../productInfo/ProductInfo";
import ProductTitle from "../productInfo/ProductTitle";
import ProductButton from "../../../productcard/components/ProductButton/ProductButton";
import { ReactNode } from "react";
import { boundProductActions } from "../../../../hooks/useBindActionsToDispatch";
import { useSelector } from "react-redux";
import "../../../../styles/ButtonStyles.scss";

type Props = {
  product: IProduct;
  image?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
};

const handleButtonReturn = () => {
  boundProductActions.setModalActive({ productId: null });
  boundProductActions.setProductQuantity({ quantity: 1 });
};

const handleButtonMinus = (quantity: number) => {
  boundProductActions.setProductQuantity({
    quantity: quantity !== 1 ? quantity - 1 : quantity,
  });
};

const handleButtonPlus = (quantity: number) => {
  boundProductActions.setProductQuantity({
    quantity: quantity + 1,
  });
};

const ProductModal = ({ product, image, info, action }: Props) => {
  const quantity = useSelector((state: IState) => state.products.quantity);

  return (
    <ProductContext.Provider value={{ product }}>
      <div className="product__modal">
        <button className="button" onClick={() => handleButtonReturn()}>
          return
        </button>
        {image}
        {info}
        <div className="product__modal__action">
          <button
            className="button"
            onClick={() => handleButtonMinus(quantity)}
          >
            -
          </button>
          {quantity}
          <button className="button" onClick={() => handleButtonPlus(quantity)}>
            +
          </button>
          {action}
        </div>
      </div>
      <div className="product__modal__overlay"></div>
    </ProductContext.Provider>
  );
};

ProductModal.Description = ProductDescription;
ProductModal.Price = ProductPrice;
ProductModal.Count = ProductCount;
ProductModal.Image = ProductImage;
ProductModal.Rating = ProductRating;
ProductModal.Info = ProductInfo;
ProductModal.Title = ProductTitle;
ProductModal.Button = ProductButton;

export default ProductModal;
