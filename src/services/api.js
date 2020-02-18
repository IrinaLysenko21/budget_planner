import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export const setBudget = budget => axios.post('/budget', { budget });

export const getBudget = () => axios.get('/budget');

export const getExpenses = () => axios.get('/expenses');