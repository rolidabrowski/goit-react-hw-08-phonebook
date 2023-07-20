import { ContactForm } from '../../components';
import { ContactList } from '../../components';
import { Filter } from '../../components';
import { Container } from './App.styled';

export function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
