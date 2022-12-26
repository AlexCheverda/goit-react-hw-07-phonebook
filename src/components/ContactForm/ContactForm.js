import Notiflix from "notiflix";
import { useState } from "react";
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contactSlice';
import { nanoid } from "nanoid";
import { Form, Input, Label, FormBtn } from './ContactForm.Styled';

const ContactForm = () => {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleAddContact = async evt => {
    evt.preventDefault();
    try {
      data.find(contact => contact.name === name)
        ? Notiflix.Notify.info(`${name} is already in contacts.`)
        : (await addContact({ name, number })) &&
        Notiflix.Notify.success(`${name} added to your phonebook`);
    } catch (error) {
      console.log(error);
    }
    reset();
  };  

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleAddContact}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
        id={nameInputId}
      />
      <Label htmlFor={numberInputId}>Number</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}
        id={numberInputId}
      />
      <FormBtn type="submit">Add Contact</FormBtn>
    </Form>
  );
};

export default ContactForm;