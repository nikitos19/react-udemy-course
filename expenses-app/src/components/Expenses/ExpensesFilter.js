import '../../styles/ExpensesFilter.css'

export default function ExpensesFilter(props) {
    const yearChangeHandler = event => {
        props.onYearSelected(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.filteredYear} onChange={yearChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                </select>
            </div>
        </div>
    )
}

