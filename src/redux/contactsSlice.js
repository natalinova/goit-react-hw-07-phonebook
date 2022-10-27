import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operations';

 export const contactsSlice = createSlice({
    name: "contacts",
     initialState: {
         contacts: [],
         loading: false,
         error: null
     },
     ExtraReducers:
         {
             [fetchContacts.pending] (state) {
            state.contacts.loading = true;
        },
         [fetchContacts.fulfilled] (state, action) {
             console.log(state);
            state.contacts.loading = false;
            state.contacts.contacts = action.payload;
        },
        [fetchContacts.rejected] (state, action) {
            state.contacts.loading = false;
            state.contacts.error = action.payload;
         },
        [addContact.pending] (state) {
            state.contacts.loading = true;
        },
        [addContact.fulfilled] (state, {payload}) {
            state.contacts.loading = false;
            state.contacts.push(payload)
        },
        [addContact.rejected] (state, {payload}) {
            state.loading = false;
            state.error = payload;
        },
     }
 })


export const contactsReducer = contactsSlice.reducer;