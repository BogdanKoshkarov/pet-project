import React from 'react';
import {useSelector} from 'react-redux';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';
import ItemPreviewCard from '../../components/ItemPreviewCard/ItemPreviewCard';
import styles from './AlsoBoughtBlock.module.scss';

const AlsoBoughtBlock = () => {
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  let alsoBought = [];

  if (!isItemsLoading) {
    alsoBought = [...items];
    alsoBought.length = 3;
  }

  return (
    <div className={styles.alsoBought}>
      <h2 className={styles.alsoBoughtTitle}>
        WITH THIS PRODUCT IS ALSO BOUGHT
      </h2>
      {!isItemsLoading && (
        <ul className={styles.alsoBoughtList}>
          {alsoBought.map((item) => (
            <li key={item.name} className={styles.alsoBoughtItem}>
              <ItemPreviewCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlsoBoughtBlock;
