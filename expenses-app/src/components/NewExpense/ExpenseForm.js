import { useState } from 'react'
import '../../styles/ExpenseForm.css'

export default function ExpenseForm(props) {
    // const {newExpense, setNewExpense} = useState({enteredTitle: '', enteredAmount: '', enteredDate: ''})
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleHandler = (event) => {
        // setNewExpense((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // })
        setEnteredTitle(event.target.value)
    }
    const amountHandler = (event) => {
        // setNewExpense((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value}
        // })
        setEnteredAmount(event.target.value)
    }
    const dateHandler = (event) => {
        // setNewExpense((prevState) => {
        //     return {...prevState, enteredDate: event.target.value}
        // })
        setEnteredDate(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault()
        const newExpense = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(newExpense)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' step='2024-12-31' value={enteredDate} onChange={dateHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.cancelHandler}>Cancel</button>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}