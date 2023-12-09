import { useContext } from "react";
import CartContext from "../Store/cart-context";

import "./ItemList.css";

const ItemList = (props) => {
  const cartCtx = useContext(CartContext);

  const addToLargeCart = (item, size) => {
    let items = {
      tShirtName: item.tShirtName,
      description: item.description,
      price: item.price,
      large: 1,
      medium: 0,
      small: 0,
    };

    cartCtx.addCartItem(items, size);
  };

  const addToMediumCart = (item, size) => {
    let items = {
      tShirtName: item.tShirtName,
      description: item.description,
      price: item.price,
      large: 0,
      medium: 1,
      small: 0,
    };

    cartCtx.addCartItem(items, size);
  };

  const addToSmallCart = (item, size) => {
    let items = {
      tShirtName: item.tShirtName,
      description: item.description,
      price: item.price,
      large: 0,
      medium: 0,
      small: 1,
    };

    cartCtx.addCartItem(items, size);
  };

  return (
    <div className="item-list">
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <li key={item.items.tShirtName} className="list-items">
              <div className="tShirtName">{item.items.tShirtName}</div>
              <div className="description">{item.items.description}</div>
              <div className="price">{item.items.price}</div>
              {Number(item.items.large !== 0) && (
                <button
                  className="add-button"
                  onClick={() => addToLargeCart(item.items, "large")}
                >
                  Buy Large ({item.items.large})
                </button>
              )}
              {Number(item.items.medium !== 0) && (
                <button
                  className="add-button"
                  onClick={() => addToMediumCart(item.items, "medium")}
                >
                  Buy Medium ({item.items.medium})
                </button>
              )}
              {Number(item.items.small !== 0) && (
                <button
                  className="add-button"
                  onClick={() => addToSmallCart(item.items, "small")}
                >
                  Buy Small ({item.items.small})
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
