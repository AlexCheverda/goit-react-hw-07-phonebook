import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Title, SectionName, Container } from './App.Styled';

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