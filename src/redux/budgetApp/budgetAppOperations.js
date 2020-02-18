import * as API from '../../services/api';
import * as budgetAppActions from './budgetAppActions';

export const setBudget = budget => dispatch => {
  dispatch(budgetAppActions.setBudgetStart());

  API.setBudget(budget)
    .then(dispatch(budgetAppActions.setBudgetSuccess(budget)))
    .catch(err => dispatch(budgetAppActions.setBudgetError(err)));
};

export const getBudget = () => dispatch => {
  dispatch(budgetAppActions.getBudgetStart());

  API.getBudget()
    .then(res => dispatch(budgetAppActions.getBudgetSuccess(res.data.budget)))
    .catch(err => dispatch(budgetAppActions.getBudgetError(err)));
};
