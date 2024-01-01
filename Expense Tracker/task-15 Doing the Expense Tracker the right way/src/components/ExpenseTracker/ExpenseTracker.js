import { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import ExpenseList from "./ExpenseList.js";
import ExpenseContext from "../../Store/ExpenseContext.js";
import "./ExpenseTracker.css";

const ExpenseTracker = () => {
  const [moneySpent, setMoneySpent] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [editExpense, setEditExpense] = useState(false);
  const [editExpenseId, setEditExpenseId] = useState(false);

  //redux items
  const items = useSelector((state) => state.expenseStore.items);
  const totalPrice = items.reduce(
    (total, item) => total + Number(item.moneySpent),
    0
  );

  const expenseCtx = useContext(ExpenseContext);

  useEffect(() => {
    expenseCtx.fetchExpense();
  }, []);

  const onEditExpense = (expense) => {
    setEditExpense(true);
    setMoneySpent(expense.moneySpent);
    setDescription(expense.description);
    setCategory(expense.category);
    setEditExpenseId(expense.id);
  };

  const editExpenseHandler = (event) => {
    event.preventDefault();

    const editExpense = {
      id: editExpenseId,
      moneySpent,
      description,
      category,
    };

    setMoneySpent("");
    setDescription("");
    setCategory("");
    setEditExpense(false);

    expenseCtx.updateExpense(editExpense);
  };

  const expenseSubmitHandler = (e) => {
    e.preventDefault();

    const newExpense = {
      moneySpent,
      description,
      category,
    };

    expenseCtx.addExpense(newExpense);

    setMoneySpent("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="expense-tracker">
      <h2 className="header">Expense Tracker</h2>
      <form className="expense-form">
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
        <button
          className="form-button"
          type="button"
          onClick={editExpense ? editExpenseHandler : expenseSubmitHandler}
        >
          {editExpense ? "Edit Expense" : "Add Expense"}
        </button>
        {totalPrice >= 10000 && (
          <button className="form-button" type="button">
            Premium
          </button>
        )}
      </form>

      <ExpenseList
        expenses={expenseCtx.expenses}
        onEditExpense={onEditExpense}
      />
    </div>
  );
};

export default ExpenseTracker;
