import { useState } from 'react'
import '../../styles/NewExpense.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {
    const [showForm, setShowForm] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setShowForm(false)
    }

    const showFormHandler = () => setShowForm(true)
    const hideFormHandler = () => setShowForm(false)

    return (
        <div className='new-expense'>
            {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelHandler={hideFormHandler} />}
        </div>
    )
}