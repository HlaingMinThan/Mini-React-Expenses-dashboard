import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

let ExpenseItem = ({ title, amount, date }) => {
  let [new_title, setTitle] = useState(title);

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{new_title}</h2>
        <div className="expense-item__price">$ {amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
