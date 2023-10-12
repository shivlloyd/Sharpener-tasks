import React from "react";

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.items.map((objects, index) => {
                return (
                    <ExpenseItem 
                        location={props.items[index].locationOfExpenditure}
                        title={props.items[index].title}
                        amount={props.items[index].amount}
                        date={props.items[index].date}
                    />
                );
            })}
        </Card>
    )
}

export default Expenses;