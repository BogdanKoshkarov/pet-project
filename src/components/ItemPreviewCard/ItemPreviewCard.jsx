import React, {useState} from 'react';
import styles from './ItemPreviewCard.module.scss';
import PropTypes from 'prop-types';
import config from '../../config.json';
import FillHeartIcon from '../svg/fillHeartIcon/fillHeartIcon';
import EmptyHeartIcon from '../svg/emptyHeartIcon/emptyHeartIcon';

const ItemPreviewCard = ({item}) => {
  const [favorite, setFavorite] = useState(false);
  const handleSetFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <div className={styles.itemPreviewCard} data-testid="ItemPreviewCard">
      <div className={styles.itemPreviewCard__image}>
        <img
          src={`${config.apiEndpoint}${item.images[0]}`}
          alt="item image"
        />
      </div>
      {
        item.status &&
        <div className={styles.itemPreviewCard__status}>
          <div className={styles.itemPreviewCard__statusText}>
            {item.status}
          </div>
        </div>
      }
      <div
        className={styles.itemPreviewCard__heart}
        onClick = {handleSetFavorite}
      >
        {favorite ? <FillHeartIcon /> : <EmptyHeartIcon />}
      </div>
      <div className={styles.itemPreviewCard__description}>
        <span className={styles.itemPreviewCard__descriptionText}>
          {item.description}
        </span>
      </div>
      <span className={styles.itemPreviewCard__price}>
        ${item.price}
      </span>
    </div>
  );
};

ItemPreviewCard.propTypes = {
  item: PropTypes.object,
};

export default ItemPreviewCard;
