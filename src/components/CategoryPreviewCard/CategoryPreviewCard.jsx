import React from 'react';
import styles from './CategoryPreviewCard.module.scss';
import PropTypes from 'prop-types';
import config from '../../config.json';


const CategoryPreviewCard = ({item}) => {
  return (
    <div className={styles.categoryPreviewCard} data-testid="CategoryPreviewCard">
      <img src={`${config.apiEndpoint}${item.images}`} alt="category cover image"/>
      <p>{item.name}</p>
    </div>
  );
};
CategoryPreviewCard.propTypes = {
  item: PropTypes.object,
};
export default CategoryPreviewCard;
