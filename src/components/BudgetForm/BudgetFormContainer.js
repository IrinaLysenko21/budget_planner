import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import * as budgetAppOperations from '../../redux/budgetApp/budgetAppOperations';

const mapDispatchToProps = dispatch => ({
  setBudget: budget => dispatch(budgetAppOperations.setBudget(budget)),
});

export default connect(null, mapDispatchToProps)(BudgetForm);
