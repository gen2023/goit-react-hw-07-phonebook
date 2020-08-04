import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ContactsForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Loader from './Loader/Loader';

import contactsOperations from '../redux/contacts/contacts-operations';
import { getLoading } from '../redux/contacts/contacts-selectors';

import '../../node_modules/modern-normalize/modern-normalize.css';

class App extends Component {
  componentDidMount() {
    this.props.listContacts();
  }
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm />
        <h2>Contact</h2>
        <Filter />
        {this.props.isLoading && <Loader />}
        <ContactList />
      </>
    );
  }
}

App.propTypes = {
  listContacts: propTypes.func,
  isLoading: propTypes.bool,
};

const mapStateToProps = state => ({
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  listContacts: () => dispatch(contactsOperations.listContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
