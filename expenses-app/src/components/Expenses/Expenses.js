import '../../styles/Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023')
  const yearChangeHandler = pickedYear => {
    console.log(pickedYear)
    setFilteredYear(pickedYear)
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onYearSelected={yearChangeHandler} />
        {props.items.map(item => (<ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />))}
      </Card>
    </div>
  )
}

export default Expenses