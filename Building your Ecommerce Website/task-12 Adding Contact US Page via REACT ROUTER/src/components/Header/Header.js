import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import CartContext from "../Store/CartContext";
import "./Header.css";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  const cartCtx = useContext(CartContext);

  //calculating total quantity in cart
  let totalAmount = 0;
  cartCtx.items.map((item) => (totalAmount += item.quantity));

  return (
    <div className="navbar">
      <header className="header">
        <div className="links">
          <Link to="/">Home</Link>
        </div>
        <div className="links">
          <Link to="/store">Store</Link>
        </div>
        <div className="links">
          <Link to="/about">About</Link>
        </div>
        <div className="links">
          <Link to="/contact-us">Contact Us</Link>
        </div>

        <Button className="cart-holder" onClick={showCartHandler}>
          Cart ({totalAmount})
        </Button>

        {showCart && <Cart showCartHandler={showCartHandler}></Cart>}
      </header>
      <h1>The Generics</h1>
    </div>
  );
};

export default Header;
