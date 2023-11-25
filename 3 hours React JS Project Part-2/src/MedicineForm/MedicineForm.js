import React, { useContext, useState } from "react";

import CartContext from "../Store/cart-context";

import "./MedicineForm.css";

const MedicineForm = (props) => {
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);

  const cartCtx = useContext(CartContext);

  const medicineNameHandler = (event) => {
    setMedicineName(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  const quantityHandler = (event) => {
    setQuantity(event.target.value);
  };

  const addItemInContext = (event) => {
    event.preventDefault();

    let item = {
      medicineName: medicineName,
      description: description,
      price: price,
      quantity: quantity,
    };

    cartCtx.addItem(item);

    // clearing inputs
    setMedicineName("");
    setDescription("");
    setPrice("");
    setQuantity(0);
  };

  return (
    <div className="form-div">
      <form className="form-submit">
        <label className="form-label" htmlFor="medicineName">
          Medicine Name
        </label>
        <input
          className="form-input"
          onChange={medicineNameHandler}
          id="medicineName"
          type="text"
        ></input>

        <label className="form-label" htmlFor="description">
          Description
        </label>
        <input
          className="form-input"
          onChange={descriptionHandler}
          id="description"
          type="text"
        ></input>

        <label className="form-label" htmlFor="price">
          Price
        </label>
        <input
          className="form-input"
          onChange={priceHandler}
          id="price"
          type="text"
        ></input>

        <label className="form-label" htmlFor="quantity">
          Quantity Available
        </label>
        <input
          className="form-input"
          onChange={quantityHandler}
          id="quantity"
          type="number"
        ></input>

        <button className="form-button" onClick={addItemInContext}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default MedicineForm;
