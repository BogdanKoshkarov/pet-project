import React from 'react';
import PropTypes from 'prop-types';
import FilterIcon from '../../components/svg/filterIcon/filterIcon';
import SortIcon from '../../components/svg/sortIcon/sortIcon';

import styles from './SelectionBlock.module.scss';

const SelectionBlock = ({handlerIsFilter}) => {
  return (
    <div className={styles.selection}>
      <button className={styles.iconBtn} onClick={handlerIsFilter}>
        <FilterIcon />
        Filter
      </button>
      <button className={styles.iconBtn}>
        Sort by
        <SortIcon />
      </button>
    </div>
  );
};

SelectionBlock.propTypes = {
  handlerIsFilter: PropTypes.func,
};

export default SelectionBlock;
