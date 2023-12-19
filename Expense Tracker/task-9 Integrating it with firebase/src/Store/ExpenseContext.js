import React, { useState } from "react";

const ExpenseContext = React.createContext({
  expenses: [],
  fetchExpense: () => {},
  addExpense: (expense) => {},
  removeExpense: (expense) => {},
});

export const ExpenseContextProvider = (props) => {
  const [expenseItems, setExpenseItems] = useState([]);

  let userEmail;
  const api = "https://expense-tracker-cea1f-default-rtdb.firebaseio.com/";

  const fetchExpenseHandler = async () => {
    userEmail = localStorage.getItem("email");
    if (userEmail) {
      userEmail = userEmail.replace(/[^a-zA-Z0-9]/g, "");
    }

    if (userEmail) {
      const url = `${api}/expenses${userEmail}.json`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch expense data");
        }
        const data = await response.json();

        const expenseList = Object.keys(data).map((expenseId) => {
          const expense = data[expenseId];
          return {
            id: expenseId,
            category: expense.category,
            description: expense.description,
            moneySpent: expense.moneySpent,
          };
        });
        setExpenseItems(expenseList);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addExpenseHandler = (item) => {
    userEmail = localStorage.getItem("email");
    if (userEmail) {
      userEmail = userEmail.replace(/[^a-zA-Z0-9]/g, "");
    }

    if (userEmail) {
      const url = `${api}/expenses${userEmail}.json`;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("Error adding/updating item");
          }
        })
        .then((data) => {
          setExpenseItems([...expenseItems, item]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const removeExpenseHandler = () => {};

  const expenseContext = {
    expenses: expenseItems,
    fetchExpense: fetchExpenseHandler,
    addExpense: addExpenseHandler,
    removeExpense: removeExpenseHandler,
  };

  return (
    <ExpenseContext.Provider value={expenseContext}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
