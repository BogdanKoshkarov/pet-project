import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../components/svg/closeIcon/CloseIcon';
import {Dropdown} from '../../components/dropdown/Dropdown';
import CheckboxBlock from '../CheckboxBlock/CheckboxBlock';
import styles from './FilterSelectionBlock.module.scss';
import {filtersValues} from '../../services/filtersValues.service';

const FilterSelectionBlock = ({handlerIsFilter}) => {
  const {categoryValues, sizeValues, colorValues, availabilityValues} =
    filtersValues;
  // const [selectedOptions, setSelectedOptions] = useState({
  //   category: 'All',
  //   size: 'None',
  //   color: 'None',
  //   availability: 'All',
  //   new: false,
  //   discount: false,
  // });

  // const handleFilter = () => {};

  // const handleChange = (e) => {
  //   const {name, value, type, checked} = e.target;
  //   setSelectedOptions((prevFilters) => ({
  //     ...prevFilters,
  //     [name]: type === 'checkbox' ? checked : value,
  //   }));
  // };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterSelection}>
        <div className={styles.closeIcon} onClick={handlerIsFilter}>
          <CloseIcon />
        </div>
        <div className={styles.selectsContainer}>
          <Dropdown
            id='category'
            placeholder='Category'
            name='category'
            inner={categoryValues.map((categoryValue, index) => (
              <CheckboxBlock
                key={index}
                value={categoryValue.value}
                label={categoryValue.label}
              />
            ))}
          />
          <Dropdown
            id='size'
            placeholder='Size'
            name='size'
            inner={sizeValues.map((sizeValue, index) => (
              <CheckboxBlock
                key={index}
                value={sizeValue.value}
                label={sizeValue.label}
              />
            ))}
          />
          <Dropdown
            id='color'
            placeholder='Color'
            name='color'
            inner={colorValues.map((colorValue, index) => (
              <CheckboxBlock
                key={index}
                id='isColor'
                value={colorValue.value}
                label={colorValue.label}
              />
            ))}
          />
          <Dropdown
            id='availability'
            placeholder='Availability'
            name='availability'
            inner={availabilityValues.map((availabilityValue, index) => (
              <CheckboxBlock
                key={index}
                value={availabilityValue.value}
                label={availabilityValue.label}
              />
            ))}
          />
        </div>
        <div className={styles.checkboxBlock}>
          <CheckboxBlock value='new' label='NEW' />
          <CheckboxBlock value='sale' label='SALE' />
        </div>
        <button type='button' className={styles.filterBtn}>
          Clean filter
        </button>
      </div>
    </div>
  );
};

FilterSelectionBlock.propTypes = {
  handlerIsFilter: PropTypes.func,
};

export default FilterSelectionBlock;
