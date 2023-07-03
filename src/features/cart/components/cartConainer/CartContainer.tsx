import { useSelector } from "react-redux";
import IState from "../../../../types/StateType";
import ProductCard from "../../../productcard/components/ProductCard/ProductCard";
import { boundCartActions } from "../../../../hooks/useBindActionsToDispatch";
import ICartProduct from "../../types/CartProductType";
import { useNavigate } from "react-router-dom";
import "../../../../styles/ButtonStyles.scss";
import "./CartContainer.scss";

const handleButtonMinus = (product: ICartProduct) => {
  if (product.quantity === 1) {
    boundCartActions.deleteCartProduct({
      productId: product.product.id,
    });
  }
  boundCartActions.setCartProductQuantity({
    productId: product.product.id,
    quantity: product.quantity > 0 ? product.quantity - 1 : product.quantity,
  });
};
const handleButtonPlus = (product: ICartProduct) =>
  boundCartActions.setCartProductQuantity({
    productId: product.product.id,
    quantity: product.quantity + 1,
  });

const calcProductPrice = (product: ICartProduct) => {
  return (product.quantity * product.product.price).toFixed(2);
};

const calcCartPrice = (cartProducts: ICartProduct[]) => {
  return cartProducts
    .reduce((acc, curr) => {
      return acc + curr.product.price * curr.quantity;
    }, 0)
    .toFixed(2);
};

const CartContainer = () => {
  const navigate = useNavigate();
  const isLogged = useSelector((state: IState) => state.login.isLogged);
  const cartProducts = useSelector((state: IState) => state.cart.cart);

  const handleButtonPay = () => {
    if (!isLogged) {
      navigate("/login");
    }
  };
  console.log(cartProducts);

  return (
    <div className="cart">
      {cartProducts.length === 0 && (
        <h1 style={{ fontSize: "4rem", textAlign: "center" }}>Cart is empty</h1>
      )}
      {cartProducts.length !== 0 && (
        <div>
          {cartProducts.map((product, i) => {
            return (
              <div className="cart__container">
                <div className="cart__product">
                  <ProductCard
                    key={i}
                    product={product.product}
                    image={<ProductCard.Image />}
                    info={
                      <ProductCard.Info>
                        <ProductCard.Title />
                        <ProductCard.Description />
                        <ProductCard.Rating />
                        <ProductCard.Price />
                      </ProductCard.Info>
                    }
                  />
                </div>
                <div className="cart__quantity">
                  <p>{calcProductPrice(product)}$</p>
                  <button
                    className="button"
                    onClick={() => handleButtonMinus(product)}
                  >
                    -
                  </button>
                  <p>{product.quantity}</p>

                  <button
                    className="button"
                    onClick={() => handleButtonPlus(product)}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
          <div className="cart__pay">
            <p className="cart__total">Total: {calcCartPrice(cartProducts)}$</p>
            <button
              className="button cart__btn__pay"
              onClick={() => handleButtonPay()}
            >
              Pay now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
