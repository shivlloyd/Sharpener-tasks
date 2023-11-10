import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          <span>Name:</span> {item.name}
          <span>Quantity:</span> {item.quantity}
          <span>Price:</span> ${item.price}
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
