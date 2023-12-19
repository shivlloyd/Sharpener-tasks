import "./ExpenseList.css";

const ExpenseList = (props) => {
  return (
    <div>
      <h3 className="expenses-header">Expenses:</h3>
      {props.expenses.length === 0 ? (
        <p className="no-expenses">No expenses added yet.</p>
      ) : (
        <ul className="expenses-list">
          {props.expenses.map((expense, index) => (
            <li key={index} className="expense-item">
              Money Spent: {expense.moneySpent} <br></br> Description:{" "}
              {expense.description} <br></br> Category: {expense.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
