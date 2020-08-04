import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
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
  changeFilter,
} from './contacts-actions';

const items = createReducer([], {
  [listContactSuccess]: (_, { payload }) => payload,
  [saveContactSuccess]: (state, { payload }) => [...state, payload],
  [removeContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const loading = createReducer(false, {
  [listContactRequest]: () => true,
  [listContactSuccess]: () => false,
  [listContactError]: () => false,
  [saveContactRequest]: () => true,
  [saveContactSuccess]: () => false,
  [saveContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
