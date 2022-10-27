import  PhonebookForm  from "./PhonebookForm";
import PhonebookList from "./PhonebookList";
import PhonebookFilter from "./PhonebookFilter";
import { Block } from './PhonebookStyled'
import { fetchContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredPeople, getState } from 'redux/selectors';
import { useEffect } from "react";

export default function Phonebook() {
  const contacts = useSelector(getFilteredPeople)
  console.log(contacts)
  const { loading, error } = useSelector(getState);
  console.log(error)
 const  dispatch = useDispatch();
   useEffect(() => {
        dispatch(fetchContacts(), [dispatch]) 
    })

   return (
      <Block>
        <h1>Phonebook</h1>
        <PhonebookForm />
        <h2>Contacts</h2>
       <PhonebookFilter />
       {loading && <div> Loading...</div>}
       {!loading && contacts.length > 0 && <PhonebookList contactsList={contacts} />}
       {error && <div>No any people for your query</div>}
       
      </Block>
    )
}