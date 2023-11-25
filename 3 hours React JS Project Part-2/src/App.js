import React, { useState } from "react";

import Cart from "./Cart/Cart";
import Header from "./Header/Header.js";
import MedicineForm from "./MedicineForm/MedicineForm.js";
import ItemList from "./ItemList/ItemList.js";
import CartProvider from "./Store/CartProvider";

import "./App.css";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <MedicineForm />
      <ItemList />
    </CartProvider>
  );
}

export default App;
