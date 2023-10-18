import React from "react";
import "./InvalidInput.css";

const InvalidInput = (props) => {
  const clickHandler = () => {
    props.onOkayClick();
  };
  let msg = "";
  if (props.age <= 0) {
    msg = "Please enter a valid age (> 0).";
  } else {
    msg = "Please enter a valid name and age(non-empty values).";
  }
  return (
    <div>
      <div className="backdrop">
        <div className="invalidInput" onClick={clickHandler}>
          <header className="headerText">Invalid input</header>
          <div className="innerText">{msg}</div>
          <button className="invalidButton" onClick={clickHandler}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvalidInput;
