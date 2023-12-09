import { useState, useEffect } from "react";
import CartContext from "./cart-context";

import "./CartProvider.css";

const CartProvider = (props) => {
  const listURL =
    "https://crudcrud.com/api/433198a0267844e98cd47436c3761c1a/list";
  const cartURL =
    "https://crudcrud.com/api/433198a0267844e98cd47436c3761c1a/cart";

  const [change, setChange] = useState(0);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchListData = async () => {
      try {
        const response = await fetch(`${listURL}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          console.log("Failed to fetch list data");
        }
      } catch (error) {
        console.error("Error fetching list data:", error);
      }
    };

    const fetchCartData = async () => {
      try {
        const response = await fetch(`${cartURL}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCartItems(data);
        } else {
          console.log("Failed to fetch cart items data");
        }
      } catch (error) {
        console.error("Error fetching cart items data:", error);
      }
    };

    fetchListData();
    fetchCartData();
  }, [change]);

  //Adding item to List
  const addItemToListHandler = async (item) => {
    setChange(change + 1);
    let updatedItem;

    try {
      const response = await fetch(`${listURL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      updatedItem = data;
    } catch (error) {
      console.log(error);
    }

    const existingItem = updatedItem.find(
      (tShirt) => tShirt.items.tShirtName === item.tShirtName
    );
    if (existingItem) {
      existingItem.items.large =
        Number(existingItem.items.large) + Number(item.large);
      existingItem.items.medium =
        Number(existingItem.items.medium) + Number(item.medium);
      existingItem.items.small =
        Number(existingItem.items.small) + Number(item.small);

      await fetch(`${listURL}/${existingItem._id}`, {
        method: "PUT",
        body: JSON.stringify({
          items: existingItem.items,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      await fetch(`${listURL}`, {
        method: "POST",
        body: JSON.stringify({
          items: item,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    setItems(updatedItem);
  };

  //Removing item from List
  const removeItemFromListHandler = async (item, size) => {
    setChange(change + 1);
    let updatedItem;

    try {
      const response = await fetch(`${listURL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      updatedItem = data;
    } catch (error) {
      console.log(error);
    }

    const existingItem = updatedItem.find(
      (tShirtItem) => tShirtItem.items.tShirtName === item.tShirtName
    );

    if (existingItem) {
      if (size === "large" && Number(existingItem.items.large) > 0) {
        existingItem.items.large = Number(existingItem.items.large) - 1;
      }
      if (size === "medium" && Number(existingItem.items.medium) > 0) {
        existingItem.items.medium = Number(existingItem.items.medium) - 1;
      }
      if (size === "small" && Number(existingItem.items.small) > 0) {
        existingItem.items.small = Number(existingItem.items.small) - 1;
      }
    }
    await fetch(`${listURL}/${existingItem._id}`, {
      method: "PUT",
      body: JSON.stringify({
        items: existingItem.items,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setItems(updatedItem);
  };

  //Adding Item to Cart
  const addItemToCartHandler = async (item, size) => {
    setChange(change + 1);
    let updatedCartItem;

    try {
      const response = await fetch(`${cartURL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      updatedCartItem = data;
    } catch (error) {
      console.log(error);
    }

    // cart shirt items
    const existingCartItem = updatedCartItem.find(
      (tShirtItem) => tShirtItem.items.tShirtName === item.tShirtName
    );

    if (existingCartItem) {
      if (item.large === Number(1)) {
        existingCartItem.items.large = Number(existingCartItem.items.large) + 1;
      }
      if (item.medium === Number(1)) {
        existingCartItem.items.medium =
          Number(existingCartItem.items.medium) + 1;
      }
      if (item.small === Number(1)) {
        existingCartItem.items.small = Number(existingCartItem.items.small) + 1;
      }

      await fetch(`${cartURL}/${existingCartItem._id}`, {
        method: "PUT",
        body: JSON.stringify({
          items: existingCartItem.items,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      await fetch(`${cartURL}`, {
        method: "POST",
        body: JSON.stringify({
          items: item,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    setCartItems(updatedCartItem);

    removeItemFromListHandler(item, size);
  };

  //Removing Item from Cart
  const removeItemFromCartHandler = async (item) => {
    setChange(change + 1);
    let updatedCartItem;

    try {
      const response = await fetch(`${cartURL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      updatedCartItem = data;
    } catch (error) {
      console.log(error);
    }

    const existingCartItem = updatedCartItem.find(
      (tShirtItem) => tShirtItem.items.tShirtName === item.items.tShirtName
    );
    try {
      const response = await fetch(`${cartURL}/${existingCartItem._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setCartItems(updatedCartItem);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
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
