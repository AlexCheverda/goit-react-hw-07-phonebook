import PropTypes from 'prop-types';
import { Item, Btn } from './ContactItem.Styled';
import { deleteContact } from 'redux/actions';
import { useDispatch } from 'react-redux';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  const { name, number, id } = contact;
      return (
        <Item>
          <span>
            {name}: {number}
          </span>
          <Btn
            type="button"
            onClick={() => deleteContactById(id)}
          >
            x
          </Btn>
        </Item>
      );
};

ContactItem.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;