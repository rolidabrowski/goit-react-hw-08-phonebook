import { useDispatch } from 'react-redux';
import { logIn } from '../../redux';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.form}>
      <h2 className={css.title}>User Panel</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input type="email" name="email" placeholder="Your Email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" placeholder="Your Password" />
        </label>
        <button className={css.button} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};
