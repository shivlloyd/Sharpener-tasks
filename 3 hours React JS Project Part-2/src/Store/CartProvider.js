import { useState } from "react";
import CartContext from "./cart-context";

import "./CartProvider.css";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  //Adding item to List
  const addItemToListHandler = (item) => {
    const updatedItem = [...items];

    const existingItem = updatedItem.find(
      (medicineItem) => medicineItem.medicineName === item.medicineName
    );

    if (existingItem) {
      if (existingItem.quantity === "Out of Stock") {
        existingItem.quantity = Number(item.quantity);
      } else {
        existingItem.quantity =
          Number(existingItem.quantity) + Number(item.quantity);
      }
    } else {
      updatedItem.push(item);
    }
    setItems(updatedItem);
  };

  //Removing item from List
  const removeItemFromListHandler = (name) => {
    let updatedItem = [...items];

    const existingItem = updatedItem.find(
      (medicineItem) => medicineItem.medicineName === name
    );

    if (Number(existingItem.quantity) > 1) {
      existingItem.quantity = Number(existingItem.quantity) - 1;
    } else {
      existingItem.quantity = "Out of Stock";
    }
    setItems(updatedItem);
  };

  //Adding Item to Cart
  const addItemToCartHandler = (item) => {
    const updatedCartItem = [...cartItems];
    const updatedItem = [...items];

    // list medicine items
    const existingItem = updatedItem.find(
      (medicineItem) => medicineItem.medicineName === item.medicineName
    );

    // cart medicine items
    const existingCartItem = updatedCartItem.find(
      (medicineItem) => medicineItem.medicineName === item.medicineName
    );

    if (existingCartItem) {
      if (existingItem.quantity !== "Out of Stock") {
        existingCartItem.quantity = Number(existingCartItem.quantity) + 1;
      }
    } else {
      updatedCartItem.push(item);
    }
    setCartItems(updatedCartItem);

    removeItemFromListHandler(item.medicineName);
  };

  //Removing Item from Cart
  const removeItemFromCartHandler = (item) => {
    let updatedCartItem = [...cartItems];

    const existingCartItem = updatedCartItem.find(
      (medicineItem) => medicineItem.medicineName === item.medicineName
    );

    if (Number(existingCartItem.quantity) > 1) {
      existingCartItem.quantity = Number(existingCartItem.quantity) - 1;
    } else {
      updatedCartItem.pop(existingCartItem);
    }
    setCartItems(updatedCartItem);
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToListHandler,
    removeItem: removeItemFromListHandler,
    cartItems: cartItems,
    addCartItem: addItemToCartHandler,
    removeCartItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      <div className="cart-provider">{props.children}</div>
    </CartContext.Provider>
  );
};

export default CartProvider;
