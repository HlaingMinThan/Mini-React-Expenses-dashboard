import "./FilterExpense.css";

let FilterExpense = ({ filerByYear, filterYear }) => {
  let onChangeHandler = (event) => {
    filerByYear(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <div>
          <select value={filterYear} onChange={onChangeHandler}>
            <option value="all">all</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default FilterExpense;
