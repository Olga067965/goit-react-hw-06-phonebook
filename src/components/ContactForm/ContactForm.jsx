import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import style from './ContactForm.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleCheckUnique = newName => {
    const handleName = newName.toLowerCase();
    return items.find(({ name }) => name.toLowerCase() === handleName);
  };

  const repeatName = handleCheckUnique(name);

  const handleSubmit = event => {
    event.preventDefault();

    if (repeatName) {
      toast.error(`${name} is already in contacts.`);
    } else {
      const newContact = { name, phone };
      dispatch(addContact(newContact));
    }

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label}>
        Name:
        <input
          className={style.input}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={style.label}>
        Number:
        <input
          className={style.input}
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={handleChange}
          required
        />
      </label>
      <button className={style.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
