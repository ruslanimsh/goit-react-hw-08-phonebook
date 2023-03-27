import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { delContact } from 'redux/contacts/operations';
import propTypes from 'prop-types';
import css from './ContactList.module.css';


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();
  

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(delContact(id));

  return (
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={css.contactListItem}>
              {name}: {number}
              <button
                type="button"
                className={css.contactListItemBtn}
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </li>
          );
          // ))}
        })}
      </ul>
    </div>
  );
};


ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
