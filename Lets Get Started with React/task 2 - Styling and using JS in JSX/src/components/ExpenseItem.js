import './ExpenseItem.css';

function ExpenseItem() {

  const expenseDate = new Date(2023, 9, 7);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  const locationOfExpenditure = 'Pune';

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div>{locationOfExpenditure}</div>
      <div className='expense-item__descripton'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
