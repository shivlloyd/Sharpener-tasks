import { useContext, useRef } from "react";

import CartContext from "../Store/cart-context";

import "./TshirtForm.css";

const TshirtForm = (props) => {
  const tShirtName = useRef();
  const description = useRef();
  const price = useRef();
  const large = useRef();
  const medium = useRef();
  const small = useRef();

  const cartCtx = useContext(CartContext);

  const addItemInContext = (event) => {
    event.preventDefault();

    let item = {
      tShirtName: tShirtName.current.value,
      description: description.current.value,
      price: price.current.value,
      large: large.current.value,
      medium: medium.current.value,
      small: small.current.value,
    };

    cartCtx.addItem(item);
  };

  return (
    <div className="form-div">
      <form className="form-submit">
        <label className="form-label" htmlFor="tShirtName">
          Shoe Name
        </label>
        <input
          className="form-input"
          id="tShirtName"
          type="text"
          ref={tShirtName}
        ></input>

        <label className="form-label" htmlFor="description">
          Description
        </label>
        <input
          className="form-input"
          id="description"
          type="text"
          ref={description}
        ></input>

        <label className="form-label" htmlFor="price">
          Price
        </label>
        <input
          className="form-input"
          id="price"
          type="text"
          ref={price}
        ></input>

        <h3>Size Quantity Available</h3>

        <label className="form-label" htmlFor="large">
          Large
        </label>
        <input
          className="form-input"
          id="large"
          type="text"
          ref={large}
        ></input>

        <label className="form-label" htmlFor="medium">
          Medium
        </label>
        <input
          className="form-input"
          id="medium"
          type="text"
          ref={medium}
        ></input>

        <label className="form-label" htmlFor="small">
          Small
        </label>
        <input
          className="form-input"
          id="small"
          type="text"
          ref={small}
        ></input>

        <button className="form-button" onClick={addItemInContext}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default TshirtForm;
