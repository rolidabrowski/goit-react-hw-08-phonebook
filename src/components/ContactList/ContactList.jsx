import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from '../../redux';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <section className={css.list}>
      {isLoading && !error && <p>Loading...</p>}
      {error && alert('Something went wrong')}
      {contacts?.length > 0 && (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li className={css.item} key={id}>
              <span className={css.text}>{name}</span>
              <span className={css.text}>{number}</span>
              <button
                type="button"
                className={css.button}
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ContactList;
