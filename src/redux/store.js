import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactsReducer } from './contactsSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterSlice.reducer,
});
export const store = configureStore({
    reducer: rootReducer,
})
