import { useProductCardContext } from "../../../product/context/ProductContext";
import "./ProductImage.scss";

const ProductImage = () => {
  const { product } = useProductCardContext();
  return (
    <div className="image__container">
      <img className="product__image" src={product.image} alt="img" />
    </div>
  );
};

export default ProductImage;
