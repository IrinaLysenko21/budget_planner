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

export const getExpenses = () => dispatch => {
  dispatch(budgetAppActions.getExpensesStart());

  API.getExpenses()
    .then(res => dispatch(budgetAppActions.getExpensesSuccess(res.data)))
    .catch(err => dispatch(budgetAppActions.getExpensesError(err)));
};

export const addExpense = expense => dispatch => {
  dispatch(budgetAppActions.addExpenseStart());

  API.addExpense(expense)
    .then(res => dispatch(budgetAppActions.addExpenseSuccess(res.data)))
    .catch(err => dispatch(budgetAppActions.addExpenseError(err)));
};

export const deleteExpense = id => dispatch => {
  dispatch(budgetAppActions.deleteExpenseStart());

  API.deleteExpense(id)
    .then(dispatch(budgetAppActions.deleteExpenseSuccess(id)))
    .catch(err => dispatch(budgetAppActions.deleteExpenseError(err)));
};
