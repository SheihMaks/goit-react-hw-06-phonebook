import PropTypes from 'prop-types';
import { ContactsList,ContactListItem, DeleteItemButton, Span } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/Redux/store';
export const Contacts=({contactsList,deleteItem})=>{
    const dispatch=useDispatch();
    return (<ContactsList>
        {contactsList.map((contact)=>{
            return (<ContactListItem key={contact.id}><Span>{contact.name}: {contact.number}</Span>
            <DeleteItemButton type='button' onClick={()=>dispatch(deleteContact(contact.name))}>Delete</DeleteItemButton >
            </ContactListItem>)})}
    </ContactsList>)
}

Contacts.propTypes={
    contactsList:PropTypes.array,
}