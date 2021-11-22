import "./Expense.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import FilterExpense from "./FilterExpense";
import { useState } from "react";
let Expense = ({ expenses }) => {
  let [filterYear, setFilterYear] = useState("all");
  let filerByYear = (year) => {
    setFilterYear(year);
  };

  let filterExpenses = expenses.filter((e) => {
    if (filterYear === "all") {
      return e;
    }
    return e.date.getFullYear() === Number(filterYear);
  });
  return (
    <div>
      <div className="expenses">
        <Card>
          <FilterExpense filerByYear={filerByYear} filterYear={filterYear} />
          <ExpenseChart expenses={filterExpenses} />
          <ExpenseList filterExpenses={filterExpenses} />
        </Card>
      </div>
    </div>
  );
};

export default Expense;
