import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const increaseItem = (itemId) => {
    cartCtx.items.forEach((item) => {
      if (item.id === itemId) {
        cartCtx.addItem({ ...item, quantity: 1 });
      }
    });
  };

  const decreaseItem = (itemId) => {
    cartCtx.items.forEach((item) => {
      if (item.id === itemId) {
        cartCtx.removeItem(itemId);
      }
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <span>x{item.quantity}</span>
          <span>${item.price}</span>
          <div className="btnGroup">
            <button
              className={classes["button--decrease"]}
              onClick={() => decreaseItem(item.id)}
            >
              -
            </button>
            <button
              className={classes["button--increase"]}
              onClick={() => increaseItem(item.id)}
            >
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  let totalPrice = 0;
  cartCtx.items.forEach((item) => {
    totalPrice += Number(item.price) * Number(item.quantity);
    totalPrice = parseFloat(totalPrice.toFixed(2));
  });

  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["buttton--alt"]}
          onClick={props.hideCartHandler}
        >
          close
        </button>
        <button className={classes.buttom}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
