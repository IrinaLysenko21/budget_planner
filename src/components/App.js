import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as budgetAppSelectors from '../reducs/budgetApp/budgetAppSelectors';
import BudgetForm from './BudgetForm/BudgetFormContainer';
import ExpenseForm from './ExpenseForm/ExpenseFormContainer';
import ExpensesTable from './ExpensesTable/expensesTableContainer';
import Values from './Values';
import Timer from './Timer/Timer';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({ expenses }) => (
  <Container>
    <BudgetForm />
    <Values />
    <ExpenseForm />
    {expenses.length > 0 && <ExpensesTable />}
    <div className={css.block}>
      <Timer />
    </div>
  </Container>
);

App.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = store => ({
  expenses: budgetAppSelectors.getExpenses(store),
});

export default connect(mapStateToProps)(App);
