import React from 'react';

import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      
      <ExpenseDetail
          location = {props.location}
          title = {props.title}
          amount={props.amount}
      />
    </Card>
  );
}

export default ExpenseItem;