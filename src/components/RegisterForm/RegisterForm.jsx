import { useDispatch } from 'react-redux';
import { register } from '../../redux';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h2 className={css.title}>Please register</h2>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <input type="name" name="name" placeholder="Your username" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="Your email" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Your password" />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
