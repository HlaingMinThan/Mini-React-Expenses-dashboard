import ExpenseItem from "./ExpenseItem";
let ExpenseList = ({ filterExpenses }) => {
  if (filterExpenses.length > 0) {
    return filterExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  } else {
    return <p className="text-center">No expenses found yet.</p>;
  }
};
export default ExpenseList;
