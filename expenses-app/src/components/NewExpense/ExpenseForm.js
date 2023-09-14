import React, { useRef, useState } from 'react'
import '../../styles/ExpenseForm.css'
import ErrorModal from '../UI/ErrorModal'

export default function ExpenseForm(props) {
    // state as an object
    // const {newExpense, setNewExpense} = useState({enteredTitle: '', enteredAmount: '', enteredDate: ''})
    // different states
    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')

    // refs
    const enteredTitle = useRef('')
    const enteredAmount = useRef('')
    const enteredDate = useRef('')

    const [error, setError] = useState()

    // handlers to update state
    // const titleHandler = (event) => {
    //     // setNewExpense((prevState) => {
    //     //     return {...prevState, enteredTitle: event.target.value}
    //     // })
    //     setEnteredTitle(event.target.value)
    // }
    // const amountHandler = (event) => {
    //     // setNewExpense((prevState) => {
    //     //     return {...prevState, enteredAmount: event.target.value}
    //     // })
    //     setEnteredAmount(event.target.value)
    // }
    // const dateHandler = (event) => {
    //     // setNewExpense((prevState) => {
    //     //     return {...prevState, enteredDate: event.target.value}
    //     // })
    //     setEnteredDate(event.target.value)
    // }

    const submitHandler = event => {
        event.preventDefault()
        if (enteredTitle.current.value.trim().length === 0 || enteredAmount.current.value.trim().length === 0 || enteredDate.current.value.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid title, amount, and date (non-empty values)'
            })
            return
        }

        const newExpense = {
            title: enteredTitle.current.value,
            amount: +enteredAmount.current.value,
            date: new Date(enteredDate.current.value)
        }
        props.onSaveExpenseData(newExpense)

        // resetting state
        // setEnteredTitle('')
        // setEnteredAmount('')
        // setEnteredDate('')

        enteredTitle.current.value = ''
        enteredAmount.current.value = ''
        enteredDate.current.value = ''
    }

    const errorHandler = () => setError(null)

    return (
        <React.Fragment>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler} />
            )}
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' /*value={enteredTitle} onChange={titleHandler}*/ ref={enteredTitle} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01' /*value={enteredAmount} onChange={amountHandler}*/ ref={enteredAmount} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min='2019-01-01' step='2024-12-31' /*value={enteredDate} onChange={dateHandler}*/ ref={enteredDate} />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.cancelHandler}>Cancel</button>
                    <button type='submit'>Add expense</button>
                </div>
            </form>
        </React.Fragment>
    )
}