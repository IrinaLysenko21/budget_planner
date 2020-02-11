import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import * as budgetAppActions from '../../redux/budgetApp/budgetAppActions';

const mapDispatchToProps = dispatch => ({
  setBudget: budget => dispatch(budgetAppActions.setBudget(budget)),
});

export default connect(null, mapDispatchToProps)(BudgetForm);
