import React from 'react';
import styles from './FashionBlock.module.scss';

const FashionBlock = () => {
  return (
    <div className={styles.fashionBlock}>
      <div className={styles.imgs}>
        <div className={styles.mainImg}>
          <img src='./img/images/AboutUs/fashion_1.jpg' alt='img_5' />
        </div>
        <div className={styles.secondImg}>
          <img src='./img/images/AboutUs/fashion_2.jpg' alt='img_6' />
        </div>
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>
          <span>Why&#x20;</span>
          slow-fashion
        </h2>
        <p className={styles.text}>
          Nowadays, fashion is changing at the speed of light. Each new season
          brings new trends that require us to update our wardrobes. However,
          more and more people are beginning to think about the cost of such an
          update and how harmful it is to the environment. Fast fashion, which
          is in constant motion, causes huge damage to the environment. Such
          rapid production leads to a large amount of waste and pollution of
          water and air. In addition, constant pressure on manufacturers leads
          to the exploitation of labor resources and violations of workers&#39;
          rights. In turn, slow fashion is aimed at producing high-quality and
          durable items that can last for many years. This means that slow
          fashion manufacturers use quality materials and favor handmade work,
          further reducing the environmental footprint. In conclusion, instead
          of following fashion trends and buying a lot of clothes that quickly
          go out of style and wear out quickly, we should consider investing in
          quality and durable items that will look stylish and modern for many
          years to come.
        </p>
      </div>
    </div>
  );
};

export default FashionBlock;
