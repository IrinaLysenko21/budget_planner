import { connect } from 'react-redux';
import * as budgetAppActions from '../../redux/budgetApp/budgetAppActions';
import ExpenseForm from './ExpenseForm';

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(budgetAppActions.addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
