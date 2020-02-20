import types from './budgetAppTypes';

// Get budget actions

export const getBudgetStart = () => ({
  type: types.GET_BUDGET_START,
});

export const getBudgetSuccess = budget => ({
  type: types.GET_BUDGET_SUCCESS,
  payload: {
    budget,
  },
});

export const getBudgetError = error => ({
  type: types.GET_BUDGET_ERROR,
  payload: {
    error,
  },
});

// Set budget actions
export const setBudgetStart = () => ({
  type: types.SET_BUDGET_START,
});

export const setBudgetSuccess = budget => ({
  type: types.SET_BUDGET_SUCCESS,
  payload: {
    budget,
  },
});

export const setBudgetError = error => ({
  type: types.SET_BUDGET_ERROR,
  payload: {
    error,
  },
});

// Get expenses actions
export const getExpensesStart = () => ({
  type: types.GET_EXPENSES_START,
});

export const getExpensesSuccess = expenses => ({
  type: types.GET_EXPENSES_SUCCESS,
  payload: {
    expenses,
  },
});

export const getExpensesError = error => ({
  type: types.GET_EXPENSES_ERROR,
  payload: {
    error,
  },
});

// Add expense actions

export const addExpenseStart = () => ({
  type: types.ADD_EXPENSE_START,
});

export const addExpenseSuccess = expense => ({
  type: types.ADD_EXPENSE_SUCCESS,
  payload: {
    expense,
  },
});

export const addExpenseError = error => ({
  type: types.ADD_EXPENSE_ERROR,
  payload: {
    error,
  },
});

// Delete expense actions

export const deleteExpenseStart = () => ({
  type: types.DELETE_EXPENSE_START,
});

export const deleteExpenseSuccess = id => ({
  type: types.DELETE_EXPENSE_SUCCESS,
  payload: {
    id,
  },
});

export const deleteExpenseError = error => ({
  type: types.DELETE_EXPENSE,
  payload: {
    error,
  },
});

// Search expense action

export const searchExpenseAction = value => ({
  type: types.SEARCH_EXPENSE,
  payload: {
    value,
  },
});
