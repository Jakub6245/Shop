import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ProductInfo = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ProductInfo;
