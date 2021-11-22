import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
export default function Chart({ dataPoints }) {
  let values = dataPoints.map((dp) => dp.value);
  let maxValue = Math.max(...values);
  return (
    <div className="chart">
      {dataPoints.map((dp) => {
        return (
          <ChartBar
            key={dp.label}
            label={dp.label}
            value={dp.value}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
}
