import { useProductCardContext } from "../../context/ProductContext";

const ProductRating = () => {
  const { product } = useProductCardContext();
  const formatRating = product.rating.rate.toFixed(1);
  return (
    <div>
      <p>Rating: {formatRating}</p>
    </div>
  );
};

export default ProductRating;
