import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = () => {

    const [enteredYear, setEnteredYear] = useState('2022');
    console.log(enteredYear);
    
    const yearChangeHandler = (event) =>{
        
        setEnteredYear(event.target.value);
        
    };

  return (

    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label className="expenses-filter label">Filter by year</label>
        <select className="expenses-filter select" onClick={yearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;