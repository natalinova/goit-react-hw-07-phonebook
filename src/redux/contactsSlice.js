import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact,removeContact } from './operations';

 export const contactsSlice = createSlice({
    name: "contacts",
     initialState: {
         contacts: [],
         loading: false,
         error: null
     },
     extraReducers:
     {
         [fetchContacts.pending](state) {
             state.loading = true;
         },
         [fetchContacts.fulfilled](state, action) {
             console.log(state);
             state.loading = false;
             state.contacts = action.payload;
         },
         [fetchContacts.rejected](state, action) {
             state.loading = false;
             state.error = action.payload;
         },
         [addContact.pending](state) {
             state.loading = true;
         },
         [addContact.fulfilled](state, { payload }) {
             state.loading = false;
             state.contacts.push(payload)
         },
         [addContact.rejected](state, { payload }) {
             state.loading = false;
             state.error = payload;
         },
         [removeContact.pending]: (state) => {
             state.loading = true;
         },
         [removeContact.fulfilled]: (state, { payload }) => {
             state.loading = false;
             state.contacts = state.contacts.filter(item => item.id !== payload)
         },
         [removeContact.rejected]: (state, { payload }) => {
             state.loading = false;
             state.error = payload;
         },
     }
 })

export const contactsReducer = contactsSlice.reducer;