import React, { useContext } from "react";
import Modal from "../UI/Modal.js";
import classes from "./Cart.module.css";
import CartContext from "../Store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const deleteItem = (item) => {
    cartCtx.cartItems.forEach((itemss) => {
      if (itemss.items.tShirtName === item.items.tShirtName) {
        cartCtx.removeCartItem(item);
      }
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.cartItems.map((item) => (
        <li key={item.items.tShirtName}>
          <span>{item.items.tShirtName}</span>
          {Number(item.items.large) > 0 && <span>L{item.items.large}</span>}
          {Number(item.items.medium) > 0 && <span>M{item.items.medium}</span>}
          {Number(item.items.small) > 0 && <span>S{item.items.small}</span>}
          <span>${item.items.price}</span>
          <div className="btnGroup">
            <button
              className={classes["button--decrease"]}
              onClick={() => deleteItem(item)}
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  let totalPrice = 0;
  let sum = 0;
  cartCtx.cartItems.forEach((item) => {
    sum =
      Number(item.items.large) +
      Number(item.items.medium) +
      Number(item.items.small);
    totalPrice += Number(item.items.price) * Number(sum);
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
