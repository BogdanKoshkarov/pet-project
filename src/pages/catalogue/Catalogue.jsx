import React, {useState} from 'react';
import HeadCatalogBlock from '../../blocks/HeadCatalogBlock/HeadCatalogBlock';
import SelectionBlock from '../../blocks/SelectionBlock/SelectionBlock';
import CardsCatalogBlock from '../../blocks/CardsCatalogBlock/CardsCatalogBlock';
import styles from './Catalogue.module.scss';

const Catalogue = () => {
  const [isFilter, setIsFilter] = useState(false);

  const changeIsFilter = () => {
    setIsFilter((prevValue) => !prevValue);
  };

  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <HeadCatalogBlock />
        <SelectionBlock handlerIsFilter={changeIsFilter} />
        <CardsCatalogBlock
          isFilter={isFilter}
          handlerIsFilter={changeIsFilter}
        />
      </div>
    </section>
  );
};

export default Catalogue;
