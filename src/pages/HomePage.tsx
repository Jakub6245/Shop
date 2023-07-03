import NavBar from "../components/navbar/NavBar";

import ProductContainer from "../features/product/components/productContainer/ProductContainer";

import useFetchProducts from "../services/products/useFetchProducts";
const HomePage = () => {
  useFetchProducts();
  return (
    <div>
      <NavBar />

      <ProductContainer />
    </div>
  );
};

export default HomePage;
