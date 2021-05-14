import "./Expenses.css";
function Expenses(props) {
  return (
    <div className="expense">
      <h2>{props.title}</h2>
      <div className="expense-item__price">$ {props.amount}</div>
    </div>
  );
}
export default Expenses;
