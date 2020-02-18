import { combineReducers } from 'redux';
import types from './budgetAppTypes';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SET_BUDGET_SUCCESS:
    case types.GET_BUDGET_SUCCESS:
      return action.payload.budget;

    case types.SET_BUDGET_ERROR:
    case types.GET_BUDGET_ERROR:
      return state;

    default:
      return state;
  }
};

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.GET_EXPENSES_SUCCESS:
      return payload.expenses;

    case types.ADD_EXPENSE_SUCCESS:
      return [payload.expense, ...state];

    case types.DELETE_EXPENSE:
      return state.filter(el => el.id !== payload.id);

    case types.GET_EXPENSES_ERROR:
    case types.ADD_EXPENSE_ERROR:
      return state;

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

const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case types.GET_BUDGET_START:
    case types.SET_BUDGET_START:
    case types.GET_EXPENSES_START:
    case types.ADD_EXPENSE_START:
      return true;

    case types.GET_BUDGET_SUCCESS:
    case types.SET_BUDGET_SUCCESS:
    case types.GET_EXPENSES_SUCCESS:
    case types.ADD_EXPENSE_SUCCESS:
    case types.GET_BUDGET_ERROR:
    case types.SET_BUDGET_ERROR:
    case types.GET_EXPENSES_ERROR:
    case types.ADD_EXPENSE_ERROR:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
  search: searchReducer,
  isLoading: loaderReducer,
});
