// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import { Title, SectionName, Container } from './App.Styled';

// const CONTACTS_BOOK = [
//   { id: nanoid(6), name: 'Rosie Simpson', number: '459-12-56' },
//   { id: nanoid(6), name: 'Hermione Kline', number: '443-89-12' },
//   { id: nanoid(6), name: 'Eden Clements', number: '645-17-79' },
//   { id: nanoid(6), name: 'Annie Copeland', number: '227-91-26' },
// ];

// const App = () => {
//   const [contacts, setContacts] = useState(() => {
//     const savedContacts = JSON.parse(localStorage.getItem('contacts'));
//     return savedContacts ? savedContacts : [...CONTACTS_BOOK];
//   });

//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = ({ name, number }) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     contacts.find(option => option.name === name)
//       ? alert(`${name} is already in contacts.`)
//       : setContacts(contacts => [...contacts, contact]);
//   };

//   const deleteContact = contactId => {
//     setContacts(contacts.filter(({ id }) => id !== contactId));
//   };

//   const changeFilter = evt => {
//     setFilter(evt.currentTarget.value);
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const visibleContacts = getVisibleContacts();
//   return (
//     <Container>
//       <Title>Phonebook</Title>
//       <ContactForm onSubmit={addContact} />
//       <SectionName>Contacts</SectionName>
//       <Filter filter={filter} onFilterSearch={changeFilter} />
//       <ContactList
//         contacts={visibleContacts}
//         onDeleteContact={deleteContact}
//       />
//     </Container>
//   );
// };

const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SectionName>Contacts</SectionName>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;