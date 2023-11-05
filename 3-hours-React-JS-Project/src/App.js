import React, { useState, useEffect } from "react";
import OrderForm from "./OrderForm";
import Orders from "./Orders";

function App() {
  const [orderList, setOrderList] = useState([]);

  // saving orderList items in localStorage
  useEffect(() => {
    orderList.map((order) => {
      return localStorage.setItem(order.orderId, JSON.stringify(order));
    });
  }, [orderList]);

  // loading data from local storage to orderList
  useEffect(() => {
    const loadedOrderList = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const orderData = JSON.parse(localStorage.getItem(key));
      if (orderData) {
        loadedOrderList.push(orderData);
      }
    }
    setOrderList(loadedOrderList);
  }, []);

  function addOrderList(orderDetail) {
    setOrderList((prevValue) => {
      return [...prevValue, orderDetail];
    });
  }

  function deleteOrder(orderId) {
    setOrderList((prevValue) => {
      return prevValue.filter((order) => order.orderId !== orderId);
    });
    // removes order item from local storage
    localStorage.removeItem(orderId);
  }

  return (
    <div>
      <OrderForm addOrderList={addOrderList} />
      <Orders orderList={orderList} deleteOrder={deleteOrder} />
    </div>
  );
}

export default App;
