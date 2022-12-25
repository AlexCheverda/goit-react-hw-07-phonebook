import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/actions";
import { nanoid } from "nanoid";
// import PropTypes from 'prop-types';
import { Form, Input, Label, FormBtn } from './ContactForm.Styled';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    if (name === 'name') {
      setUserName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    contacts.find(({ name }) => name === userName)
      ? alert(`${userName} is already in contacts.`)
      : dispatch(addContact(userName, number));
    reset();
  };

  const reset = () => {
    setUserName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        value={userName}
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

// ContactForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// };

export default ContactForm;