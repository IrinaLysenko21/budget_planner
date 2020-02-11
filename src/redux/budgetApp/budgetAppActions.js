import types from './budgetAppTypes';

export const setBudget = budget => ({
  type: types.SET_BUDGET,
  payload: {
    budget,
  },
});

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
