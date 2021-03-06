import { combineReducers } from 'redux';
import types from './budgetAppTypes';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SET_BUDGET:
      return action.payload.budget;

    default:
      return state;
  }
};

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_EXPENSE:
      return [payload.expense, ...state];

    case types.DELETE_EXPENSE:
      return state.filter(el => el.id !== payload.id);

    default:
      return state;
  }
};

const searchReducer = (state = '', { payload, type }) => {
  switch (type) {
    case types.SEARCH_EXPENSE:
      return payload.value;

    default:
      return state;
  }
};

export default combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
  search: searchReducer,
});
