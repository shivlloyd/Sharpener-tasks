import "./Cart.css";
import CartItem from "./CartItem";

const Cart = ({ showCartHandler }) => {
  return (
    <section
      id="cart"
      className="container"
      style={{ zIndex: 1000, position: "absolute" }}
    >
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
        <span className="total-value">$0</span>
      </div>
      <button className="purchase-btn" type="button">
        Purchase
      </button>
    </section>
  );
};

export default Cart;
