import types from './budgetAppTypes';

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

// Get budget actions

export const getBudgetStart = () => ({
  type: types.SET_BUDGET_START,
});

export const getBudgetSuccess = budget => ({
  type: types.SET_BUDGET_SUCCESS,
  payload: {
    budget,
  },
});

export const getBudgetError = error => ({
  type: types.SET_BUDGET_ERROR,
  payload: {
    error,
  },
});

// Add expense actions

export const addExpense = data => ({
  type: types.ADD_EXPENSE,
  payload: {
    expense: data,
  },
});

export const deleteExpense = id => ({
  type: types.DELETE_EXPENSE,
  payload: {
    id,
  },
});

export const searchExpenseAction = value => ({
  type: types.SEARCH_EXPENSE,
  payload: {
    value,
  },
});
