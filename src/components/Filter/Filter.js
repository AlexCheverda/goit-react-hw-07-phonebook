import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/actions';
// import PropTypes from 'prop-types';
import { FilterBox, Label, Input } from './Filter.Styled';

const Filter = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const changeFilter = evt => {
        dispatch(filterContact(evt.currentTarget.value));
    };
    return (
        <FilterBox>
            <Label>Find contacts by name</Label>
            <Input
                type="text"
                name="filter"
                value={filter}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={changeFilter}
            />
        </FilterBox>
    );
};

export default Filter;