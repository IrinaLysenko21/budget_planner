import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as budgetActions from '../../redux/budgetApp/budgetAppActions';
import * as budgetAppSelectors from '../../redux/budgetApp/budgetAppSelectors';
import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChangeSearchValue }) => {
  return (
    <form className={styles.form}>
      <input
        className={styles.search}
        type="text"
        value={value}
        placeholder="Enter expense to find..."
        onChange={e => onChangeSearchValue(e.target.value)}
      />
    </form>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeSearchValue: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  value: budgetAppSelectors.getSearchValue(store),
});

const mapDispatchToProps = dispatch => ({
  onChangeSearchValue: value =>
    dispatch(budgetActions.searchExpenseAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
