import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
  totalAmount: 0,
});

export default CartContext;
