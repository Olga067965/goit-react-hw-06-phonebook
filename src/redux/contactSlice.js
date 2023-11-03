import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = [];

const contactSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return{
                    payload: {
                        name,
                        number,
                        id: nanoid()
                    },
                };
            },
        },
        deleteContact: {
            reducer(state, action) {
                const contactIndex = state.findIndex(contact => contact.id === action.payload);
                state.splice(contactIndex, 1);
            },
        },
        updateContacts: {
            reducer(state, action) {
                return action.payload;
            },
        },
    },
});

export const { addContact, deleteContact, updateContacts } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
