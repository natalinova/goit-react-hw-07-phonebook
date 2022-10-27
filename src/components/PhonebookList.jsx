// import { useDispatch } from 'react-redux';
// import { deleteContacts } from 'redux/contactsSlice';
import { ListItem, Button, Row } from './PhonebookStyled'
import {  removeContact } from 'redux/operations';
import { fetchContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getFilter, getState,getAllContacts } from 'redux/selectors';
import { useEffect } from "react";

export default function PhonebookList() {

   const stateFilter = useSelector(getFilter);
    const contactsList = useSelector(getAllContacts);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchContacts(),
        // eslint-disable-next-line    
            [dispatch]) 
    })

    const getFilteredPeople = () => {
    if (!stateFilter) {
            return contactsList
        };
        const normalizedFilter = stateFilter.toLocaleLowerCase();
        const filteredPeople = contactsList.filter(({ name, number }) => {
            const normalizedName = name.toLocaleLowerCase();
            const normalizedNumber = number.toLocaleLowerCase();
            const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
            return result;
        })
    return filteredPeople;
  };
    
    const people = getFilteredPeople();

    const list = people.map(({ id, name, number }) => {
        return <ListItem key={id}>
            <Row>Name: {name}</Row>
            <Row>Phone: {number}</Row>
            <span><Button onClick={() => dispatch(removeContact(id))}> Remove</Button></span>
        </ListItem>;   
    })

    return (
       
             <ul>{list}</ul>
    
        )
}