// import { useDispatch } from 'react-redux';
// import { deleteContacts } from 'redux/contactsSlice';
import { ListItem, Button, Row } from './PhonebookStyled'
import {  removeContact } from 'redux/operations';
import { fetchContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredPeople, getFilter, getAllContacts } from 'redux/selectors';
import { useEffect } from "react";
import { Message } from './PhonebookStyled';

export default function PhonebookList() {

    const stateFilter = useSelector(getFilter);
    const contactsList = useSelector(getAllContacts);
    const dispatch = useDispatch();

    useEffect(() => { dispatch(fetchContacts()) }, [dispatch]);

    const people = getFilteredPeople(contactsList, stateFilter);

    const list = people.map(({ id, name, number }) => {
        return <ListItem key={id}>
            <Row>Name: {name}</Row>
            <Row>Phone: {number}</Row>
            <span><Button onClick={() => dispatch(removeContact(id))}> Remove</Button></span>
        </ListItem>;   
    })

    return (
        <>
         <ul>{list}</ul>
        {people.length === 0 && stateFilter && <Message>No any people for your query</Message>}
        </>
       
    )
}