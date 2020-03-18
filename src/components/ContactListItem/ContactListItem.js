import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';
const ContactListItem = ({ name, number, onRemove }) => {
  return (
    <li>
      <p>
        {name}: {number}{' '}
        <button
          className={styles.removeButton}
          type="button"
          onClick={onRemove}
        >
          Delete
        </button>
      </p>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.elementType.isRequired,
};

export default ContactListItem;
