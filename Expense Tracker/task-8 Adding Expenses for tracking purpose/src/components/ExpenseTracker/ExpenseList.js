import "./ExpenseList.css";

const ExpenseList = (props) => {
  return (
    <div>
      <h3 className="expenses-header">Expenses:</h3>
      {props.expenses.length === 0 ? (
        <p className="no-expenses">No expenses added yet.</p>
      ) : (
        <ul className="expenses-list">
          {props.expenses.map((expenses, index) => (
            <li key={index} className="expense-item">
              Money Spent: {expenses.moneySpent} <br></br> Description:
              {expenses.description} <br></br> Category: {expenses.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
