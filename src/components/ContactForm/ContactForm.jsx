import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { selectContacts, addContact } from '../../redux';
import * as yup from 'yup';
import 'yup-phone';

import css from './ContactForm.module.css';

const InitialValues = {
  name: '',
  number: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[\s\p{L}]+$/u,
      'Name may contain only letters and spaces. For example Adrian, Jacob Mercer and so on.'
    )
    .required(),
  number: yup
    .string()
    .trim()
    .phone(
      'PL',
      true,
      'Phone number must be entered in the format 123-456-789 or 123 456 789 or 123456789'
    )
    .required(),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const isDuplicate = ({ name, number }) => {
    const normalizedName = name.toLowerCase().trim();
    const normalizedNumber = number.trim();

    const duplicate = contacts.find(
      ({ name, number }) =>
        name.toLowerCase().trim() === normalizedName ||
        number.trim() === normalizedNumber
    );
    return Boolean(duplicate);
  };

  const saveContact = ({ name, number }) => {
    const form = document.querySelector('form');
    if (isDuplicate({ name, number })) {
      return alert(
        contacts.find(contact => contact.name === name)
          ? `${name} is already in contacts`
          : `${number} is already in contacts`
      );
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <section className={css.form}>
      <Formik
        initialValues={InitialValues}
        onSubmit={values => {
          saveContact({ ...values });
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <label className={css.item}>
            Name
            <Field type="name" name="name" placeholder="Enter name" />
            <ErrorMessage name="name" component="span" />
          </label>
          <label className={css.item}>
            Number
            <Field type="tel" name="number" placeholder="Enter number" />
            <ErrorMessage name="number" component="span" />
          </label>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default ContactForm;
