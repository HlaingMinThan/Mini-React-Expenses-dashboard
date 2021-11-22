import React from "react";
import Chart from "../Chart/Chart";
export default function ExpenseChart({ expenses }) {
  let dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "July", value: 0 },
    { label: "august", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  expenses.forEach((exp) => {
    let monthIndex = exp.date.getMonth();
    dataPoints[monthIndex].value += exp.amount;
    return exp;
  });
  return (
    <div>
      <Chart dataPoints={dataPoints}></Chart>
    </div>
  );
}
