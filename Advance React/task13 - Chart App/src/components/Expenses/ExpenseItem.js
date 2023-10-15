import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };

  const amountHandler = () => {
    setAmount(100);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetail
          location={props.location}
          title={title}
          amount={amount}
        />
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={amountHandler}>Change amount</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
