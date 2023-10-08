import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "./Card";
import "./ExpenseItem.css";


function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      
      <ExpenseDetail
          location = {props.location}
          title = {props.title}
          amount={props.amount}
      />
    </Card>
  );
}

export default ExpenseItem;