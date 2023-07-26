import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/goit-react-hw-08-phonebook/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/goit-react-hw-08-phonebook/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
