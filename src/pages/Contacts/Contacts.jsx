import { Helmet } from 'react-helmet';
import { ContactForm, Filter, ContactList } from 'components';

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
