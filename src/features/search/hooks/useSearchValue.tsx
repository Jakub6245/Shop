import { useSelector } from "react-redux/es/hooks/useSelector";
import IState from "../../../types/StateType";
import IProduct from "../../product/types/ProductType";

const useSearchProduct = (products: IProduct[]) => {
  const searchedValue = useSelector(
    (state: IState) => state.search.searchValue
  );

  const filteredProducts = products.filter((el) =>
    el.title.toLowerCase().trim().includes(searchedValue.toLowerCase().trim())
  );
  return filteredProducts;
};

export default useSearchProduct;
