import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './ContactList.module.css';
import { deleteContact } from '../../redux/contactSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);

  return (
    <ul className={style.list}>
      {items.map(({ id, name, phone }) => (
        <li className={style.item} key={id}>
          <p className={style.info}>
            {name}: {phone}
          </p>
          <button
            className={style.btn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
