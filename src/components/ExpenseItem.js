import ExpenseDate from './ExpenseDate';
import Expenses from './Expenses';
import "./ExpenseItem.css";

function ExpenseItem(props) {
  
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <Expenses title={props.title} amount={props.amount} />
    </div>
  );
}

export default ExpenseItem;
