import { Helmet } from 'react-helmet';
import { ContactForm, Filter, ContactList } from 'components';
import css from './Contacts.module.css';

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
