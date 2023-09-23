import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ChevronUp from '../svg/chevronUp/ChevronUp';
import ChevronDown from '../svg/chevronDown/ChevronDown';
import styles from './Dropdown.module.scss';

const Dropdown = ({id, placeholder, name, inner}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button
        data-path={name}
        id={id}
        onClick={toggleIsOpen}
        className={styles.dropdownBtn}
      >
        {placeholder}
        {!isOpen ? <ChevronDown /> : <ChevronUp />}
      </button>
      {isOpen && (
        <div data-target={name} className={styles.description}>
          {inner}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inner: PropTypes.any,
};

export {Dropdown};
