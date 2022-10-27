import * as api from "../api/fetchContacts";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getAllContacts } from "./selectors";

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(_, thunkApi) => {
        try {
            console.log(thunkApi);
            const data = await api.getContacts();
            console.log(data)
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

const isDuplicate = (name, number, contactList) => {
       
        const result = contactList.find(contact => contact.name === name && contact.number === number);
        return result;
    };
export const addContact = createAsyncThunk(
    "contacts/add",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addContact(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    // {
    //     condition: (data, { getState }) => {
    //        const contactList = useSelector(getAllContacts);
    //       if (isDuplicate(name, number, contactList)) {
    //         return alert (`There are ${name} in phonebook`)
    //     }
    //     }
    // }
)
export const removeContact = createAsyncThunk(
    "contacts/remove",
    async(id, {rejectWithValue}) => {
        try {
            await api.removeContact(id);
            return id;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
)