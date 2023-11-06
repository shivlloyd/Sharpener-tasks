import React, { useState } from "react";
import "./OrderForm.css";

const OrderForm = ({ addOrderList }) => {
  const [orderInfo, setOrderinfo] = useState({
    orderId: "",
    price: "",
    dish: "",
    table: "table1",
  });

  function submitForm(event) {
    event.preventDefault();
    const newOrder = {
      orderId: orderInfo.orderId,
      price: orderInfo.price,
      dish: orderInfo.dish,
      table: orderInfo.table,
    };
    addOrderList(newOrder);
    setOrderinfo({
      orderId: "",
      price: "",
      dish: "",
      table: "table1",
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setOrderinfo({
      ...orderInfo,
      [name]: value,
    });
  }

  return (
    <form className="submit-form" onSubmit={submitForm}>
      <div className="label-input-container">
        <label htmlFor="orderId">Unique Order ID:</label>
        <input
          type="text"
          id="orderId"
          name="orderId"
          value={orderInfo.orderId}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="label-input-container">
        <label htmlFor="price">Choose Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={orderInfo.price}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="label-input-container">
        <label htmlFor="dish">Choose Dish:</label>
        <input
          type="text"
          id="dish"
          name="dish"
          value={orderInfo.dish}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="label-input-container">
        <label htmlFor="table">Choose a Table:</label>
        <select
          id="table"
          name="table"
          value={orderInfo.table}
          onChange={handleInputChange}
        >
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
      </div>
      <button className="submit-button" type="submit">
        Add to bill
      </button>
    </form>
  );
};

export default OrderForm;
