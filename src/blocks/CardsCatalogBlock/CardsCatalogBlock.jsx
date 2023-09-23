import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';
import FilterSelectionBlock from '../FilterSelectionBlock/FilterSelectionBlock';
import ItemPreviewCard from '../../components/ItemPreviewCard/ItemPreviewCard';
import ArrowBackIcon from '../../components/svg/arrowBackIcon/arrowBackIcon';
import ArrowForwardIcon from '../../components/svg/arrowForwardIcon/arrowForwardIcon';
import styles from './CardsCatalogBlock.module.scss';

const CardsCatalogBlock = ({isFilter, handlerIsFilter}) => {
  const itemsPerPage = 9;
  let totalPages = null;
  let totalItems = null;
  let startIndex = null;
  let endIndex = null;
  let visibleItems = [];
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  const [currentPage, setCurrentPage] = useState(1);

  let newArrivalItems = [];

  if (!isItemsLoading) {
    newArrivalItems = items;
    totalItems = newArrivalItems.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
    startIndex = (currentPage - 1) * itemsPerPage;
    endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    visibleItems = newArrivalItems.slice(startIndex, endIndex);
  }

  const handlePageChange = (event) => {
    setCurrentPage(parseInt(event.target.textContent));
  };

  const pageButtons = document.querySelectorAll('.pageButton');
  pageButtons.forEach((button) => {
    button.addEventListener('click', handlePageChange);
  });

  return (
    <>
      <div className={styles.catalog}>
        {isFilter ? (
          <FilterSelectionBlock handlerIsFilter={handlerIsFilter} />
        ) : null}
        <div
          className={styles.cardsContainer}
        >
          <ul className={
            !isFilter ?
            styles.cards :
            `${styles.cards} ${styles.cardsPadding}`
          }>
            {visibleItems.map((item, index) => (
              <li key={index}>
                <ItemPreviewCard item={item} />
              </li>
            ))}
          </ul>
          <div className={styles.pagination}>
            <div
              className={
                currentPage !== 1 ?
                  styles.arrow :
                  `${styles.arrow} ${styles.arrowDisable}`
              }
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <ArrowBackIcon />
              <span>Previous</span>
            </div>
            <div className={styles.btnBlock}>
              {Array.from({length: totalPages}).map((_, index) => (
                <button
                  key={index}
                  className={
                    index + 1 === currentPage ?
                      `${styles.pageButton} ${styles.activeBtn}` :
                      styles.pageButton
                  }
                  onClick={handlePageChange}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div
              className={
                currentPage !== totalPages ?
                  styles.arrow :
                  `${styles.arrow} ${styles.arrowDisable}`
              }
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <span>Next</span>
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CardsCatalogBlock.propTypes = {
  isFilter: PropTypes.bool,
  handlerIsFilter: PropTypes.func,
};

export default CardsCatalogBlock;
