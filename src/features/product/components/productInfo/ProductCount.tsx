import { useProductCardContext } from "../../context/ProductContext";

const ProductCount = () => {
  const { product } = useProductCardContext();
  return (
    <div>
      <p>{product.rating.count}</p>
    </div>
  );
};

export default ProductCount;
