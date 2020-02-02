import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';
import * as budgetAppActions from '../reducs/budgetApp/budgetAppActions';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

class ExpenseForm extends Component {
  static propTypes = {
    addExpense: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, amount } = this.state;

    this.props.addExpense({
      id: shortid.generate(),
      name,
      amount: Number(amount),
    });
    this.setState({ name: '', amount: 0 });
  };

  render() {
    const { name, amount } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(budgetAppActions.addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
