import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import NotFoundPage from '../notFoundPage/notFoundPage';
import {SizesList} from '../../components/sizeList/SizesList';
import AlsoBoughtBlock from '../../blocks/AlsoBoughtBlock/AlsoBoughtBlock';
import {Modal} from '../../components/modal';
import {Dropdown} from '../../components/dropdown/Dropdown';
import {SizeGuide} from '../../components/modal/modalContent';
import {getItems, getItemsLoadingStatus} from '../../store/itemsSlice';
import styles from './Card.module.scss';
import ColorsList from '../../components/colorsList/ColorsList';
// import '../../services/dropdown.service';

const colors = [
  {
    name: 'Black',
    value: '#000000',
  },
  {
    name: 'Indigo',
    value: '#4B0082',
  },
  {
    name: 'Vanilla',
    value: '#F3E5AB',
  },
  {
    name: 'White',
    value: '#ffffff',
  },
];

const Card = ({searchingId = '1'}) => {
  const [openModal, setOpenModal] = useState(false);
  const items = useSelector(getItems());
  const isItemsLoading = useSelector(getItemsLoadingStatus());

  const changeImage = (imgUrl) => {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imgUrl;
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  if (!isItemsLoading) {
    console.log(items);
    const {name, price, size, images, description, modelParams, composition} =
      items[searchingId];

    return (
      <>
        <section className={styles.cardSection}>
          <div className={styles.card}>
            <div className={styles.imgs}>
              <ul className={styles.imgsList}>
                {images.map((image) => (
                  <li
                    key={image}
                    onClick={() =>
                      changeImage(`http://localhost:8000/api/${image}`)
                    }
                  >
                    <img src={`http://localhost:8000/api/${image}`} alt='img' />
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.mainImg}>
              <img
                id='mainImage'
                src={`http://localhost:8000/api/${images[0]}`}
                alt='img'
              />
            </div>
            <div className={styles.about}>
              <div className={styles.aboutInner}>
                <form className={styles.buyForm}>
                  <h2 className={styles.buyFormTitle}>{name}</h2>
                  <span className={styles.buyFormPrice}>${price}</span>
                  <dir className={styles.color}>
                    <ColorsList colors={colors} />
                  </dir>
                  <div className={styles.size}>
                    <SizesList sizes={size} />
                    <button
                      type='button'
                      className={styles.btnGuide}
                      onClick={() => {
                        setOpenModal(true);
                      }}
                    >
                      Size guide
                    </button>
                  </div>
                  <div className={styles.formBag}>
                    <button type='button'>ADD TO BAG</button>
                  </div>
                </form>
                <div className={styles.descriptions}>
                  <Dropdown
                    id='dropdownToggle'
                    placeholder='Details'
                    name='details'
                    inner={description}
                  />
                  <Dropdown
                    id='dropdownToggle'
                    placeholder='Model parameters'
                    name='parameters'
                    inner={modelParams}
                  />
                  <Dropdown
                    id='dropdownToggle'
                    placeholder='Composition and care'
                    name='composition'
                    inner={composition.join()}
                  />
                  <Dropdown
                    id='dropdownToggle'
                    placeholder='Shipping and returns'
                    name='shipping'
                    inner='Lorem ipsum dolor sit amen consectetur'
                  />
                </div>
              </div>
            </div>
          </div>
          <AlsoBoughtBlock />
          <Modal isOpen={openModal} handleCloseModal={closeModal}>
            <SizeGuide handleCloseModal={closeModal} />
          </Modal>
        </section>
      </>
    );
  } else {
    return <NotFoundPage />;
  }
};
Card.propTypes = {
  searchingId: PropTypes.string.isRequired,
};

export default Card;
