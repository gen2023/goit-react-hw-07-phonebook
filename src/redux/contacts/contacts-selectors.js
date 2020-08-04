import { createSelector } from 'reselect';

export const getLoading = state => state.contacts.loading;
export const getFilter = state => state.contacts.filter;
export const getAllContact = state => state.contacts.items;
export const getVisibleContacts = createSelector(
  [getAllContact, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
