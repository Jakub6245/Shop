import { useProductCardContext } from "../../context/ProductContext";

const ProductTitle = () => {
  const { product } = useProductCardContext();
  return (
    <div>
      <h2>{product.title}</h2>
    </div>
  );
};

export default ProductTitle;
