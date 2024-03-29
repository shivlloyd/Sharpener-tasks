import React from 'react';

import ExpenseItem from "./components/Expenses/ExpenseItem";

const App = () => {
  const expenses = [
    {
      locationOfExpenditure: "DMart",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      locationOfExpenditure: "Amazon",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      locationOfExpenditure: "Policy Bazaar",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      locationOfExpenditure: "Flipkart",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>

      {expenses.map((objects, index) => {
        return (
          <ExpenseItem
            location={expenses[index].locationOfExpenditure}
            title={expenses[index].title}
            amount={expenses[index].amount}
            date={expenses[index].date}
          />
        );
      })}
    </div>
  );
}

export default App;
