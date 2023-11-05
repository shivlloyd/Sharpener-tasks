import React, { useState, useEffect } from "react";
import OrderForm from "./OrderForm";
import Orders from "./Orders";

function App() {
  const [orderList, setOrderList] = useState([]);

  function addOrderList(orderDetail) {
    setOrderList((prevValue) => {
      return [...prevValue, orderDetail];
    });
  }

  function deleteOrder(orderId){
    setOrderList((prevValue) => {
      return prevValue.filter((order) => order.orderId !== orderId);
    })
  }

  return (
    <div>
      <OrderForm addOrderList={addOrderList} />
      <Orders orderList={orderList} deleteOrder={deleteOrder} />
    </div>
  );
}

export default App;
