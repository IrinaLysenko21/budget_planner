import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Value from './Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const calculateTotalExpenses = expenses => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const calculateBalance = (budget, expenses) => budget - expenses;

const Values = ({ budget, expenses }) => {
  const totalExpenses = calculateTotalExpenses(expenses);
  const balance = calculateBalance(budget, totalExpenses);

  return (
    <Container>
      <Value label="Budget" value={budget} isPositive />
      <Value label="Expenses" value={totalExpenses} />
      <Value label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
  );
};

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = store => ({
  budget: store.budgetApp.budget,
  expenses: store.budgetApp.expenses,
});

export default connect(mapStateToProps)(Values);
