import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';

import styles from './SizeList.module.scss';

const allSizes = ['xs', 's', 'm', 'l'];
const noSize = 'Choose a size';

const SizesList = ({sizes}) => {
  let [selectedSize, setSelectedSize] = useState('');

  const handleChange = (event) => {
    setSelectedSize((selectedSize = event.target.value));
  };

  return (
    <>
      <pre>
        Size:&nbsp;
        {!selectedSize ? (
          <span style={{color: 'rgb(255, 0, 0)'}}>{noSize}</span>
        ) : (
          <span>{selectedSize}</span>
        )}
      </pre>
      <ul className={styles.sizeList}>
        {allSizes.map((size) => (
          <li key={size} className={styles.sizeListItem}>
            <input
              type='radio'
              name='size'
              value={size}
              id={size}
              onChange={handleChange}
              disabled={!sizes.includes(size)}
            />
            <label htmlFor={size}>{size}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

SizesList.propTypes = {
  sizes: PropTypes.array.isRequired,
};

export {SizesList};
