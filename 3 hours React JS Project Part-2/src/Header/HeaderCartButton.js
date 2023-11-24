import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

const HeaderCartButton = () => {
  return (
    <button className="cart-button">
      <span className="cart-icon">
        <CartIcon />
      </span>
    </button>
  );
};

export default HeaderCartButton;
