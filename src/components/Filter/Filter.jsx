import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from '../../redux';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event =>
    dispatch(setFilter(event.target.value.toLowerCase().trim()));

  return (
    <section className={css.filter}>
      <label>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          placeholder="Enter name"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </section>
  );
};

export default Filter;
