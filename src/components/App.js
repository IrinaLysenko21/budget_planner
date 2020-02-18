import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as budgetAppSelectors from '../redux/budgetApp/budgetAppSelectors';
import * as budgetAppOperations from '../redux/budgetApp/budgetAppOperations';
import BudgetForm from './BudgetForm/BudgetFormContainer';
import ExpenseForm from './ExpenseForm/ExpenseFormContainer';
import ExpensesTable from './ExpensesTable/ExpensesTableContainer';
import Values from './Values';
import Timer from './Timer/Timer';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';

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

class App extends Component {
  static propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    // console.log(this.props);
    // this.props.getBudget();
  }

  render() {
    const { expenses, isLoading } = this.props;
    return (
      <>
        {isLoading && <Loader />}
        <SearchBar />
        <Container>
          <BudgetForm />
          <Values />
          <ExpenseForm />
          {expenses.length > 0 && <ExpensesTable />}
          <div className={css.block}>
            <Timer />
          </div>
        </Container>
      </>
    );
  }
}

const mapStateToProps = store => ({
  expenses: budgetAppSelectors.getExpenses(store),
  isLoading: budgetAppSelectors.getLoadingState(store),
});

const mapDispatchToProps = dispatch => ({
  getBudget: () => dispatch(budgetAppOperations.getBudget()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
