import React from 'react';

import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("clciked");
  };

  const deleteExpenseClickHandler = () => {
    console.log("deleted");
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      
      <ExpenseDetail
          location = {props.location}
          title = {props.title}
          amount={props.amount}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteExpenseClickHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;