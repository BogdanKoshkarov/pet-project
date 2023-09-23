import React from 'react';
import styles from './checkboxField.module.scss';
import PropTypes from 'prop-types';

const CheckboxField = ({name, value, onChange, error, children}) => {
  return (
    <div className={styles.checkboxField} data-testid="CheckboxField">
      <div className={styles.checkbox}>
        <input
          type='checkbox'
          id={name}
          name={name}
          onChange={onChange}
          value={value}/>
        <label
          htmlFor="license"
        >
          {children}
        </label>
      </div>
      {error ? (
        <div className={styles.error}>{error}</div>
      ) : null}
    </div>
  );
};
CheckboxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  error: PropTypes.string,
};

export default CheckboxField;
