import { useContext, useRef } from "react";

import CartContext from "../Store/cart-context";

import "./ShoeForm.css";

const ShoeForm = (props) => {
  const shoeName = useRef();
  const description = useRef();
  const price = useRef();
  const large = useRef();
  const medium = useRef();
  const small = useRef();

  const cartCtx = useContext(CartContext);

  return (
    <div className="form-div">
      <form className="form-submit">
        <label className="form-label" htmlFor="shoeName">
          Shoe Name
        </label>
        <input
          className="form-input"
          id="shoeName"
          type="text"
          ref={shoeName}
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

        <label className="form-label" htmlFor="large">
          L
        </label>
        <input
          className="form-input"
          id="large"
          type="text"
          ref={large}
        ></input>

        <label className="form-label" htmlFor="medium">
          M
        </label>
        <input
          className="form-input"
          id="medium"
          type="text"
          ref={medium}
        ></input>

        <label className="form-label" htmlFor="small">
          S
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

export default ShoeForm;
