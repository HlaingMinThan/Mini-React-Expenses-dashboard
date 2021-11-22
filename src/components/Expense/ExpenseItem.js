import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

let ExpenseItem = ({ title, amount, date }) => {
  let [new_title, setTitle] = useState(title);

  let logConsole = () => setTitle("update title"); //setTitle will call the useState again and  update the state and rerender the component
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{new_title}</h2>
        <div className="item__price">$ {amount}</div>
        <button onClick={logConsole}>change title</button>
      </div>
    </div>
  );
};

export default ExpenseItem;
