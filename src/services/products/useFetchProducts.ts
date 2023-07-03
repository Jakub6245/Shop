import { useEffect } from "react";
import { useGetAllProductsQuery } from "./fetchProducts";
import { boundProductActions } from "../../hooks/useBindActionsToDispatch";
const useFetchProducts = () => {
  const { data } = useGetAllProductsQuery();
  useEffect(() => {
    if (data) {
      boundProductActions.setProducts({ products: data });
    }
  }, [data]);
};

export default useFetchProducts;
