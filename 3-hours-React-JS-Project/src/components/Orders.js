import React from "react";
import './Orders.css';

const Orders = ({ orderList, deleteOrder }) => {
  function clickHandler(orderId) {
    deleteOrder(orderId);
  }
  return (
    <div className="orders">
      <h2>Orders</h2>
      <h3>Table 1</h3>
      {orderList.map((order) => {
        if (order.table === "table1") {
          return (
            <li key={order.orderId}>
              {order.price}-{order.table}-{order.dish}{" "}
              <button onClick={() => clickHandler(order.orderId)}>
                Delete Order
              </button>
            </li>
          );
        }
        return "";
      })}
      <h3>Table 2</h3>
      {orderList.map((order) => {
        if (order.table === "table2") {
          return (
            <li key={order.orderId}>
              {order.price}-{order.table}-{order.dish}{" "}
              <button onClick={() => clickHandler(order.orderId)}>
                Delete Order
              </button>
            </li>
          );
        }
        return "";
      })}
      <h3>Table 3</h3>
      {orderList.map((order) => {
        if (order.table === "table3") {
          return (
            <li key={order.orderId}>
              {order.price}-{order.table}-{order.dish}{" "}
              <button onClick={() => clickHandler(order.orderId)}>
                Delete Order
              </button>
            </li>
          );
        }
        return "";
      })}
    </div>
  );
};

export default Orders;
