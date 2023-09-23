import React, {useRef} from 'react';
import styles from './CategoriesBlock.module.scss';
import {useSelector} from 'react-redux';
import {getCategories, getCategoriesLoadingStatus} from '../../store/categorySlice';
import CategoryPreviewCard from '../../components/CategoryPreviewCard/CategoryPreviewCard';
import LeftArrowIcon from '../../components/svg/leftArrowIcon/leftArrowIcon';
import RightArrowIcon from '../../components/svg/rightArrowIcon/rightArrowIcon';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

const CategoriesBlock = () => {
  const swiperRef = useRef();
  const isCategoriesLoading = useSelector(getCategoriesLoadingStatus());
  const categories = useSelector(getCategories());
  return (
    <div className={styles.categoriesBlock} data-testid="CategoriesBlock">
      <div className={styles.title}>
        <span>
          categories
        </span>
        <div className={styles.arrows}>
          {/* Кнопка для переходу до попереднього слайда */}
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <LeftArrowIcon />
          </button>
          {/* Кнопка переходу до наступного слайда */}
          <button onClick={() => swiperRef.current?.slideNext()}>
            <RightArrowIcon />
          </button>
        </div>
      </div>
      {
        <div className={styles.newArrivalsBlock__box}>
          {/* Swiper для відображення елементів */}
          <Swiper
            onSwiper={(swiper) => swiperRef.current = swiper}
            slidesPerView={6}
            spaceBetween={24}
            //                loop={true}
            modules={[Navigation]}
            navigation={{
              // Відключаємо вбудовану навігацію swiper
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {!isCategoriesLoading && categories && categories.map((item) =>
              <SwiperSlide key={item._id}>
                <CategoryPreviewCard item={item}/>
              </SwiperSlide>,
            )}
          </Swiper>
        </div>
      }
    </div>
  );
};

export default CategoriesBlock;
