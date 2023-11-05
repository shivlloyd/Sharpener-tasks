import React from "react";

const Orders = ({ orderList, deleteOrder }) => {
  function clickHandler(orderId) {
    deleteOrder(orderId);
  }
  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orderList.map((order) => {
          return (
            <li key={order.orderId}>
              {order.price}-{order.table}-{order.dish}{" "}
              <button onClick={() => clickHandler(order.orderId)}>Delete Order</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Orders;
