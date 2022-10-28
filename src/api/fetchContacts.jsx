import axios from 'axios';

export const getContacts = async () => {
    const { data } = await axios.get(`https://635b8fbd6f97ae73a6470618.mockapi.io/api/contacts`);
    return data
}

export const addContact = async (data) => {
    const { data: result } = await axios.post(`https://635b8fbd6f97ae73a6470618.mockapi.io/api/contacts`, data);
    return result
}

export const removeContact = async (id) => {
    const { data } = await axios.delete(`https://635b8fbd6f97ae73a6470618.mockapi.io/api/contacts/${id}`);
    return data
}