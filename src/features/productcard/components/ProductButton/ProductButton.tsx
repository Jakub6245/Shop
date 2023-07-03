import { useProductCardContext } from "../../../product/context/ProductContext";
import IProduct from "../../../product/types/ProductType";
import "../../../../styles/ButtonStyles.scss";

type Props = {
  onClick: (product: IProduct) => void;
};

const ProductButton = ({ onClick }: Props) => {
  const { product } = useProductCardContext();
  const handleClick = () => {
    onClick(product);
  };
  return (
    <button className="button" onClick={handleClick}>
      Add to cart
    </button>
  );
};

export default ProductButton;
