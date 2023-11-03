import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import ContactListItem from './ContactListItem';

const ContactList = () => {

  const filter = useSelector(selectFilter)
  const contacts = useSelector(selectContacts)

  const filteredContacts = filter ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase())) : contacts;

  return (
    <Fragment>
    <ul>
      <ContactListItem
      contacts={filteredContacts}
      />
    </ul>
    </Fragment>
  )
};

export default ContactList;
