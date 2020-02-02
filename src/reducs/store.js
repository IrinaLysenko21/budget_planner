import { createStore, combineReducers } from 'redux';
import budgetAppReducer from './budgetApp/budgetAppReducers';

const rootReducer = combineReducers({
  budgetApp: budgetAppReducer,
});

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
