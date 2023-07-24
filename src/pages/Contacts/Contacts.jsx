import { Helmet } from 'react-helmet';
import { ContactList } from 'components';

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <ContactList />
    </>
  );
}
