import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import * as budgetAppActions from '../../reducs/budgetApp/budgetAppActions';
import * as budgetAppSelectors from '../../reducs/budgetApp/budgetAppSelectors';

const mapStateToProps = store => ({
  expenses: budgetAppSelectors.getExpenses(store),
});

const mapDispatchToProps = dispatch => ({
  deleteExpense: id => dispatch(budgetAppActions.deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
