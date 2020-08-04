import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { getAllContact } from '../../redux/contacts/contacts-selectors';

import Modal from '../Modal';

import './ContactsForm.css';

class ContactsForm extends Component {
  static propTypes = {
    onContact: propTypes.func.isRequired,
    contacts: propTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
    message: '',
    showModal: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;
    const checkedName = contacts.find(contact => name === contact.name);
    const { onContact } = this.props;
    //при вызове модального окна появляется ошибка:
    // Error: Target container is not a DOM element.
    // http://joxi.ru/a2XvP8QUDxYj7r
    if (!name || !number || (!name && !number)) {
      // this.closeModal();
      alert(`Fill in all the fields`);
      return;
      // return this.setState({ message: `Fill in all the fields` });
    }
    if (checkedName) {
      // this.closeModal();
      alert(`${name} is already in contacts`);
      return;
      // return this.setState({ message: `${name} is already in contacts` });
    }

    onContact(this.state);
    this.resetForm();
  };

  resetForm() {
    this.setState({ name: '', number: '' });
  }

  closeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { name, number, message, showModal } = this.state;

    return (
      <>
        {showModal && <Modal onClose={this.closeModal}>{message}</Modal>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name
              <input
                type="text"
                className="input"
                placeholder="Enter name"
                value={name}
                name="name"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Number
              <input
                type="text"
                className="input"
                placeholder="Enter number"
                value={number}
                name="number"
                onChange={this.handleChange}
              />
            </label>
          </div>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: getAllContact(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onContact: contact => dispatch(contactsOperations.saveContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
