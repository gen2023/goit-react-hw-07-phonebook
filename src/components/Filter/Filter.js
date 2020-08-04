import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const Filter = ({ value, handleFilter }) => (
  <div>
    <label>
      Find contacts by name
      <input
        type="text"
        className="input"
        placeholder="Enter name"
        value={value}
        name="filter"
        onChange={handleFilter}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: propTypes.string.isRequired,
  handleFilter: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  handleFilter: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
