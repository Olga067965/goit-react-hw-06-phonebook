import React from 'react';
import style from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { selectContacts } from 'redux/selectors';



const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (contacts.some((contact) => contact.name === form.elements.name.value)) {
      alert(form.elements.name.value + ' is already in contacts.');
      }
      else {
      dispatch(addContact(form.elements.name.value, form.elements.number.value))
      }

    form.reset();
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
         <label className={style.label}>
           Name
           <input
             type="text"
             name="name"
             placeholder="Enter name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces."
             required
           />
         </label>
         <label className={style.label}>
           Number
           <input
             type="tel"
             name="number"
             placeholder="Enter phone number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
           />
         </label>
         <button className={style.button}type='submit'>Add contact</button>
       </form>
  )
}

export default ContactForm
