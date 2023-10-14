import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No expenses.</h2>;
  } else if (props.items.length === 1) {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            location={expense.location}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        <h2 className="expenses-list__fallback">
          Only single Expense here. Please add more...
        </h2>
      </ul>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          location={expense.location}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
