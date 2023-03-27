import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import propTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.filterLabel}>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Find contacts by name"
      />
    </label>
  );
};


Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
