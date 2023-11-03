import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { filterContact } from '../../redux/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterBy = useSelector(state => state.contacts.filter);

  const onChange = e => dispatch(filterContact(e.target.value));

  return (
    <label className={style.label}>
      Filter by name:
      <input
        className={style.input}
        type="text"
        name="filter"
        value={filterBy}
        onChange={onChange}
        placeholder="Enter a name to search"
      />
    </label>
  );
};

export default Filter;
