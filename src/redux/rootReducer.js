import { combineReducers } from 'redux';
import budgetAppReducers from './budgetApp/budgetAppReducers';
import timerReducer from './timer/timerReducer';

const rootReducer = combineReducers({
  budgetApp: budgetAppReducers,
  timer: timerReducer,
});

export default rootReducer;
