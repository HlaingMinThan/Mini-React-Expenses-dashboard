import { useState } from "react";
import "./NewExpenseForm.css";

let NewExpenseForm = ({ onSaveExpense }) => {
  let [input, setInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  let titleHandler = (e) => {
    setInput((prevState) => {
      //functional update pattern will be used when update state using the previous state.
      return { ...prevState, title: e.target.value };
    });
  };
  let amountHandler = (e) => {
    setInput((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };
  let dateHandler = (e) => {
    setInput((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  let submit = (e) => {
    e.preventDefault();
    let expense = {
      title: input.title,
      amount: input.amount,
      date: new Date(input.date),
    };
    onSaveExpense(expense);
    setInput({ title: "", amount: "", date: "" });
  };
  return (
    <div className="new-expense">
      <form onSubmit={submit}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label htmlFor="">title</label>
            <input type="text" onChange={titleHandler} value={input.title} />
          </div>
          <div className="new-expense__controls">
            <label htmlFor="">amount</label>
            <input type="text" onChange={amountHandler} value={input.amount} />
          </div>
          <div className="new-expense__controls">
            <label htmlFor="">date</label>
            <input
              value={input.date}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateHandler}
            />
          </div>
          <div className="new-expense__actions">
            <button>submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default NewExpenseForm;
