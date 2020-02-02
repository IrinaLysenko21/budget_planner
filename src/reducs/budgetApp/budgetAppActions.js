import types from './budgetAppTypes';

export const setBudget = budget => ({
  type: types.SET_BUDGET,
  payload: {
    budget,
  },
});

export const addExpense = expense => ({
  type: types.ADD_EXPENSE,
  payload: expense,
});

export const deleteExpense = id => ({
  type: types.DELETE_EXPENSE,
  payload: {
    id,
  },
});
