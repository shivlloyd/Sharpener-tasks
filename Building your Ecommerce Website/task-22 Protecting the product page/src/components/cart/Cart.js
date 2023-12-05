import { useContext } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import CartContext from "../Store/CartContext";

const Cart = ({ showCartHandler }) => {
  const cartCtx = useContext(CartContext);

  //calculate total price
  let totalPrice = 0;
  cartCtx.items.map(
    (item) => (totalPrice += Number(item.quantity) * Number(item.price))
  );

  return (
    <section id="cart" className="container">
      <h2>CART</h2>
      <button className="cancel" onClick={showCartHandler}>
        X
      </button>
      <div className="cart-header">
        <span className="cart-item">ITEM</span>
        <span className="cart-price">PRICE</span>
        <span className="cart-quantity">QUANTITY</span>
      </div>
      <div>
        <CartItem />
      </div>
      <div>
        <span>
          <span className="total-title">Total</span>
        </span>
        <span className="total-value">${totalPrice}</span>
      </div>
      <button className="purchase-btn" type="button">
        Purchase
      </button>
    </section>
  );
};

export default Cart;
