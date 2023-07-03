import { useProductCardContext } from "../../context/ProductContext";

const ProductPrice = () => {
  const { product } = useProductCardContext();

  const priceFormat = product.price.toFixed(2);

  return (
    <div>
      <p>Price: {priceFormat}$</p>
    </div>
  );
};

export default ProductPrice;
