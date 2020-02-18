import { connect } from 'react-redux';
import * as budgetAppOperations from '../../redux/budgetApp/budgetAppOperations';
import ExpenseForm from './ExpenseForm';

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(budgetAppOperations.addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
