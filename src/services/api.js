import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export const getBudget = () => axios.get('/budget');

export const setBudget = budget => axios.post('/budget', { budget });

export const getExpenses = () => axios.get('/expenses');

export const addExpense = expense => axios.post('/expenses', expense);

export const deleteExpense = id => axios.delete(`/expenses/${id}`);
