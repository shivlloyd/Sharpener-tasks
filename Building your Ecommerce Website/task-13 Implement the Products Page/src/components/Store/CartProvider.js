import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const updateItem = [...items];

    const existingItem = updateItem.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity =
        Number(existingItem.quantity) + Number(item.quantity);
    } else {
      updateItem.push(item);
    }
    setItems(updateItem);
  };

  const removeItemFromCartHandler = (id) => {
    let updatedItem = [...items];

    const existingItem = updatedItem.find((cartItem) => cartItem.id === id);

    if (existingItem.quantity > 1) {
      existingItem.quantity = Number(existingItem.quantity) - 1;
    } else {
      updatedItem = items.filter((item) => item.id !== id);
    }
    setItems(updatedItem);
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    totalAmount: 0,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
