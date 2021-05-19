import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter />
      </Card>
      
      <Card className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
      </Card>
    </div>
  );
};
export default Expenses;
/* 
   <div className="expense">
      <h2>{props.title}</h2>
      <div className="expense-item__price">$ {props.amount}</div>
    </div>
*/
