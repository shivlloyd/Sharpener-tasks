import { useContext } from "react";
import ExpenseContext from "../../Store/ExpenseContext";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const expenseCtx = useContext(ExpenseContext);

  const deleteHandler = (expenseId) => {
    expenseCtx.removeExpense(expenseId);
  };

  const editHandler = (expense) => {
    props.onEditExpense(expense);
  };

  return (
    <div>
      <h3 className="expenses-header">Expenses:</h3>
      {props.expenses.length === 0 ? (
        <p className="no-expenses">No expenses added yet.</p>
      ) : (
        <ul className="expenses-list">
          {props.expenses.map((expense, index) => (
            <li key={index} className="expense-item">
              <div>
                Money Spent: {expense.moneySpent} <br />
                Description: {expense.description} <br />
                Category: {expense.category}
              </div>
              <div className="btn">
                <button onClick={() => deleteHandler(expense.id)}>
                  Delete
                </button>
                <button onClick={() => editHandler(expense)}>Edit</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
