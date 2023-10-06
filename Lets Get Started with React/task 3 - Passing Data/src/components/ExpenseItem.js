import "./ExpenseItem.css";

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div>{props.location}</div>
      <div className="expense-item__descripton">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
