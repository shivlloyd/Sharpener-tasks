import { useState } from "react";
import Cart from "./Cart/Cart";
import Header from "./Header/Header.js";
import TshirtForm from "./TshirtForm/TshirtForm.js";
import ItemList from "./itemList/ItemList.js";
import CartProvider from "./Store/CartProvider";

import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <TshirtForm />
      <ItemList />
    </CartProvider>
  );
}

export default App;
