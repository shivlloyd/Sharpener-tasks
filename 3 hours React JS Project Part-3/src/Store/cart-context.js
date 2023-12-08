import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (name) => {},
  cartItems: [],
  addCartItem: (item) => {},
  removeCartItem: (name) => {},
});

export default CartContext;
