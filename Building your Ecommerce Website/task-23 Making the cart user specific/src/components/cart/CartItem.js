import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../Store/CartContext";

const CartItem = () => {
  const cartCtx = useContext(CartContext);

  const removeItemFromCart = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <div>
      {cartCtx.items.map((item) => (
        <div className="cart-items" key={item._id}>
          <div className="cart-item-name">
            <img src={item.items.imageUrl} alt=""></img>
            <span className="title">{item.items.title}</span>
          </div>
          <div className="cart-items-price">${item.items.price}</div>
          <div className="cart-items-quantity">
            <div>x{item.items.quantity}</div>
            <button onClick={() => removeItemFromCart(item._id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
