import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={styles.inputField}
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.elementType.isRequired,
};
