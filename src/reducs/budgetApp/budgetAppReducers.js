import types from './budgetAppTypes';

const initial = {
  budget: 0,
  expenses: [],
};

const budgetAppReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.SET_BUDGET:
      return {
        ...state,
        budget: payload.budget,
      };

    case types.ADD_EXPENSE:
      return {
        ...state,
        expenses: [payload, ...state.expenses],
      };

    case types.DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== payload.id),
      };

    default:
      return state;
  }
};

export default budgetAppReducer;
