import React, { useContext } from "react";
import Modal from "../UI/Modal.js";
import classes from "./Cart.module.css";
import CartContext from "../Store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const increaseItem = (item) => {
    cartCtx.cartItems.forEach((items) => {
      if (items.medicineName === item.medicineName) {
        cartCtx.addCartItem(item);
      }
    });
  };

  const decreaseItem = (item) => {
    cartCtx.cartItems.forEach((items) => {
      if (items.medicineName === item.medicineName) {
        cartCtx.removeCartItem(item);
      }
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.cartItems.map((item) => (
        <li key={item.medicineName}>
          <span>{item.medicineName}</span>
          <span>x{item.quantity}</span>
          <span>${item.price}</span>
          <div className="btnGroup">
            <button
              className={classes["button--decrease"]}
              onClick={() => decreaseItem(item)}
            >
              -
            </button>
            <button
              className={classes["button--increase"]}
              onClick={() => increaseItem(item)}
            >
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  let totalPrice = 0;
  cartCtx.cartItems.forEach((item) => {
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
