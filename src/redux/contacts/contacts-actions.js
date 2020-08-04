import { createAction } from '@reduxjs/toolkit';

export const listContactRequest = createAction('contacts/listContactRequest');
export const listContactSuccess = createAction('contacts/listContactSuccess');
export const listContactError = createAction('contacts/listContactError');

export const saveContactRequest = createAction('contacts/saveContactRequest');
export const saveContactSuccess = createAction('contacts/saveContactSuccess');
export const saveContactError = createAction('contacts/saveContactError');

export const removeContactRequest = createAction(
  'contacts/removeContactRequest',
);
export const removeContactSuccess = createAction(
  'contacts/removeContactSuccess',
);
export const removeContactError = createAction('contacts/removeContactError');

export const changeFilter = createAction('contacts/changeFilter');
