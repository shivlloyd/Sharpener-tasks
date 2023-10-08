import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseDetail
        location={props.location}
        title={props.title}
        amount={props.amount}
      />
    </div>
  );
}

export default ExpenseItem;
