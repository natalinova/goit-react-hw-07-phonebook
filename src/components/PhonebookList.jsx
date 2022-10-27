import { useDispatch } from 'react-redux';
// import { deleteContacts } from 'redux/contactsSlice';
import { ListItem, Button, Row } from './PhonebookStyled'
import {  removeContact } from 'redux/operations';

export default function PhonebookList({contactsList}) {
    const dispatch = useDispatch()

    console.log(contactsList)


    const list = contactsList.map(({ id, name, number }) => {
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