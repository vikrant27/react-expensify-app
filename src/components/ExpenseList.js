import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// const mapStateToProps = (state) => {
//     return {
//         expenses: selectExpenses(state.expenses, state.filters)
//     };
// };
 


// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses
//     };
// };

export default connect(mapStateToProps)(ExpenseList);



// export default connect((state) => {
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList);



// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList);

// export default ConnectedExpenseList;