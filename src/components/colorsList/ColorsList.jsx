import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ColorsList.module.scss';

const noColor = 'Choose a color';

const ColorsList = ({colors}) => {
  let [selectedColor, setSelectedColor] = useState('');

  const handleChange = (event) => {
    setSelectedColor((selectedColor = event.target.value));
  };

  return (
    <>
      <pre>
        Color:&nbsp;
        {!selectedColor ? (
          <span style={{color: 'rgb(255, 0, 0)'}}>{noColor}</span>
        ) : (
          <span>{selectedColor}</span>
        )}
      </pre>
      <ul className={styles.colorList}>
        {colors.map((color) => (
          <li key={color.name} className={styles.colorListItem}>
            <input
              type='radio'
              name='color'
              value={color.name}
              id={color.name}
              onChange={handleChange}
            />
            <label
              style={{backgroundColor: `${color.value}`}}
              htmlFor={color.name}
            ></label>
          </li>
        ))}
      </ul>
    </>
  );
};

ColorsList.propTypes = {
  colors: PropTypes.array.isRequired,
};

export default ColorsList;
