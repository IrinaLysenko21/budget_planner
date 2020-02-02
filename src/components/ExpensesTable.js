import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as budgetAppActions from '../reducs/budgetApp/budgetAppActions';
import Button from './shared/Button';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ expenses = [], deleteExpense }) => (
  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {expenses.map(({ id, name, amount }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button label="Delete" onClick={() => deleteExpense(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  expenses: store.budgetApp.expenses,
});

const mapDispatchToProps = dispatch => ({
  deleteExpense: id => dispatch(budgetAppActions.deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
