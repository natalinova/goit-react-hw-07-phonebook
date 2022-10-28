import  PhonebookForm  from "./PhonebookForm";
import PhonebookList from "./PhonebookList";
import PhonebookFilter from "./PhonebookFilter";
import { Block } from './PhonebookStyled'
import { useSelector } from "react-redux";
import { getState } from 'redux/selectors';
import { Message } from './PhonebookStyled';

export default function Phonebook() {
 
  const { loading, error } = useSelector(getState);
  console.log(error)

   return (
      <Block>
        <h1>Phonebook</h1>
        <PhonebookForm />
        <h2>Contacts</h2>
       <PhonebookFilter />
       {loading && <Message> Loading...</Message>}
         <PhonebookList/>
       {error && <Message>No any people for your query</Message>}
       
      </Block>
    )
}