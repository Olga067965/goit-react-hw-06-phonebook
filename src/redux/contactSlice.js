import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = { items: [], filter: '' };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
    filterContact: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const contactsSelector = {
  filteredContacts: state => {
    const { items, filter } = state.contacts;
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  },
};
