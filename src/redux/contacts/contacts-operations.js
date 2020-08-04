import axios from 'axios';
import {
  listContactRequest,
  listContactSuccess,
  listContactError,
  saveContactRequest,
  saveContactSuccess,
  saveContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4020';

const listContacts = () => dispatch => {
  dispatch(listContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(listContactSuccess(data)))
    .catch(error => dispatch(listContactError(error)));
};

const saveContact = ({ name, number }) => dispatch => {
  const contact = { name, number };

  dispatch(saveContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(saveContactSuccess(data)))
    .catch(error => dispatch(saveContactError(error)));
};

const removeContact = contactId => dispatch => {
  dispatch(removeContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(removeContactSuccess(contactId)))
    .catch(error => dispatch(removeContactError(error)));
};

export default { saveContact, removeContact, listContacts };
