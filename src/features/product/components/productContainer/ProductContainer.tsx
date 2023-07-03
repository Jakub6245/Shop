import IState from "../../../../types/StateType";
import ProductCard from "../../../productcard/components/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import ProductModal from "../productModal/ProductModal";
import {
  boundProductActions,
  boundCartActions,
  boundSearchActions,
} from "../../../../hooks/useBindActionsToDispatch";

import IProduct from "../../types/ProductType";
import useSearchCategory from "../../../search/hooks/useSearchCategory";
import useSearchProduct from "../../../search/hooks/useSearchValue";
import "./ProductContainer.scss";

const searchById = (arr: IProduct[], id: number | null) => {
  return arr.find((obj) => obj.id === id)!;
};

const handleAddToCartBtn = (activeProduct: IProduct, quantity: number) => {
  boundCartActions.addProduct({
    product: activeProduct,
    quantity: quantity,
  });
  boundProductActions.setModalActive({ productId: null });
  boundProductActions.setProductQuantity({ quantity: 1 });
  boundSearchActions.changeValue({ value: "" });
};

const ProductContainer = () => {
  const isLoading = useSelector((state: IState) => state.products.loading);

  const handleOpenModalBtn = (product: IProduct) => {
    boundProductActions.setModalActive({ productId: product.id });
  };

  const products = useSelector((state: IState) => state.products.products);
  const activeModalId = useSelector(
    (state: IState) => state.products.activeModalId
  );
  const quantity = useSelector((state: IState) => state.products.quantity);
  const activeProduct = searchById(products, activeModalId);
  const filteredProductsByCategory = useSearchCategory();
  const filteredProductsByPhrase = useSearchProduct(filteredProductsByCategory);

  return (
    <div className="product__container">
      {isLoading && (
        <p style={{ fontSize: "4rem", textAlign: "center" }}>Loading</p>
      )}
      {filteredProductsByPhrase.length === 0 && !isLoading && (
        <h1 style={{ fontSize: "4rem", textAlign: "center" }}>No results</h1>
      )}
      {filteredProductsByPhrase.map((product, i) => {
        return (
          <ProductCard
            action={() => handleOpenModalBtn(product)}
            key={i}
            product={product}
            image={<ProductCard.Image />}
            info={
              <ProductCard.Info>
                <ProductCard.Title />

                <ProductCard.Rating />
                <ProductCard.Price />
              </ProductCard.Info>
            }
          />
        );
      })}
      {activeModalId && (
        <ProductModal
          product={activeProduct}
          image={<ProductCard.Image />}
          info={
            <ProductCard.Info>
              <ProductCard.Title />
              <ProductCard.Description />
              <ProductCard.Rating />
              <ProductCard.Price />
            </ProductCard.Info>
          }
          action={
            <ProductCard.Button
              onClick={() => handleAddToCartBtn(activeProduct, quantity)}
            ></ProductCard.Button>
          }
        />
      )}
    </div>
  );
};

export default ProductContainer;
