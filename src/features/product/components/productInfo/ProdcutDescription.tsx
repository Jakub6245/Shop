import { useProductCardContext } from "../../context/ProductContext";

const ProductDescription = () => {
  const { product } = useProductCardContext();
  return (
    <div>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDescription;
