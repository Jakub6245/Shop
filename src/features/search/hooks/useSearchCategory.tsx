import { useSelector } from "react-redux/es/hooks/useSelector";
import IState from "../../../types/StateType";

const useSearchCategory = () => {
  const products = useSelector((state: IState) => state.products.products);
  const category = useSelector((state: IState) => state.search.searchCategory);
  if (category === "all products") {
    return products;
  }

  const filteredProducts = products.filter((el) => el.category === category);

  return filteredProducts;
};

export default useSearchCategory;
