import { useState } from 'react';
import '../../styles/Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023')
  const yearChangeHandler = pickedYear => setFilteredYear(pickedYear)

  const filteredExpenses = props.items.filter(item => filteredYear === item.date.getFullYear().toString())

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onYearSelected={yearChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  )
}
