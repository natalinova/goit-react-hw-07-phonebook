import axios from 'axios';

export const getContacts = async () => {
    const { data } = await axios.get(`https://63595ddf38725a1746af1112.mockapi.io/api/contacts`);
    console.log(data)
    return data
}

export const addContact = async (data) => {
    const { data: result } = await axios.post(`https://63595ddf38725a1746af1112.mockapi.io/api/contacts`, data);
    console.log(data)
    console.log(result)
    return result
}

export const removeContact = async (id) => {
    const { data } = await axios.delete(`https://63595ddf38725a1746af1112.mockapi.io/api/contacts/${id}`);
    console.log(data)
    return data
}