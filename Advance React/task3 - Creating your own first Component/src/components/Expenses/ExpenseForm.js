import React from "react";

let ExpenseForm = (props) => {
  
  let titleHandler = (input) => {
    let inputData = input.target.value;
    console.log(inputData);
  }

  let amountHandler = (input) => {
    let inputData = input.target.value;
    console.log(inputData);
  }

  let dateHandler = (input) => {
    let inputData = input.target.value;
    console.log(inputData);
  }

  return (
    <form>
      <label for="title">Expense Title</label>
      <input onChange = {titleHandler} type="text" id="title" />
      <label for="amount">Expense Amount</label>
      <input onChange = {amountHandler} type="number" id="amount" />
      <label for="date">Expense Date</label>
      <input onChange = {dateHandler} type="date" id="date" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;
