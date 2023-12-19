import { useState, useContext, useEffect } from "react";
import ExpenseList from "./ExpenseList.js";
import ExpenseContext from "../../Store/ExpenseContext.js";
import "./ExpenseTracker.css";

const ExpenseTracker = () => {
  const [moneySpent, setMoneySpent] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([]);

  const expenseCtx = useContext(ExpenseContext);

  useEffect(() => {
    expenseCtx.fetchExpense();
  }, []);

  const expenseSubmitHandler = (e) => {
    e.preventDefault();

    const newExpense = {
      moneySpent,
      description,
      category,
    };

    expenseCtx.addExpense(newExpense);
    setExpenses([...expenses, newExpense]);

    setMoneySpent("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="expense-tracker">
      <h2 className="header">Expense Tracker</h2>
      <form className="expense-form" onSubmit={expenseSubmitHandler}>
        <label className="form-label">
          Money Spent:
          <input
            className="form-input"
            type="text"
            value={moneySpent}
            onChange={(e) => setMoneySpent(e.target.value)}
            required
          />
        </label>
        <br />
        <label className="form-label">
          Description:
          <input
            className="form-input"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <label className="form-label">
          Category:
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="Food">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="Salary">Salary</option>
          </select>
        </label>
        <br />
        <button className="form-button" type="submit">
          Add Expense
        </button>
      </form>

      <ExpenseList expenses={expenseCtx.expenses} />
    </div>
  );
};

export default ExpenseTracker;
