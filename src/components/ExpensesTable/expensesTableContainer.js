import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import * as budgetAppActions from '../../redux/budgetApp/budgetAppActions';
import * as budgetAppSelectors from '../../redux/budgetApp/budgetAppSelectors';

const mapStateToProps = store => ({
  expenses: budgetAppSelectors.getFilteredExpenses(store),
});

const mapDispatchToProps = dispatch => ({
  deleteExpense: id => dispatch(budgetAppActions.deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
