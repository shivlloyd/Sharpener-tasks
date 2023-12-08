import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/cart-context";

import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <button className="cart-button" onClick={props.showCartHandler}>
      <span className="cart-icon">
        <CartIcon />
      </span>
      <h3>Cart</h3>
    </button>
  );
};

export default HeaderCartButton;
