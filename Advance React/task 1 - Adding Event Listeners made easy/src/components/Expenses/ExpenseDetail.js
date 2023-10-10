import React from 'react';

import "./ExpenseDetail.css";

const ExpenseDetail = (props) => {
  return (
    <>
      <div>{props.location}</div>
      <div className="expense-item__descripton">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </>
  );
}

export default ExpenseDetail;
