import React from 'react';
import PropTypes from 'prop-types';
const ContactListItem = ({ name, number, onRemove }) => {
  return (
    <li>
      <p>
        {name}: {number}{' '}
        <button type="button" onClick={onRemove}>
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
