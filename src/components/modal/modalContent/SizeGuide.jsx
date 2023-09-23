import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../svg/closeIcon/CloseIcon';
import styles from './SizeGuide.module.scss';

const SizeGuide = ({handleCloseModal}) => {
  return (
    <section className={styles.guideContainer}>
      <div className={styles.closeIcon} onClick={handleCloseModal}>
        <CloseIcon />
      </div>
      <h2>Size Guide</h2>
      <div className={styles.guideContent}>
        <p>
          When choosing a clothing size, be guided by your own measurements and
          compare them with the size parameters indicated in our size chart.
        </p>
        <p>
          We recommend choosing a larger size on the borderline parameters.
          Also, in the product description, for your comfort, we indicate the
          model{`'`}s parameters and the size it is wearing.
        </p>
      </div>
      <table className={styles.guideTable}>
        <tbody>
          <tr>
            <th>Size</th>
            <th>US Numeric</th>
            <th>Bust, cm</th>
            <th>Waist, cm</th>
            <th>Hips, cm</th>
          </tr>
          <tr>
            <td>xs</td>
            <td>0 - 2</td>
            <td>80 - 85</td>
            <td>61 - 66</td>
            <td>87,5 - 93</td>
          </tr>
          <tr>
            <td>s</td>
            <td>4 - 6</td>
            <td>86,5 - 91,5</td>
            <td>67 - 72,5</td>
            <td>94 - 99</td>
          </tr>
          <tr>
            <td>m</td>
            <td>8 - 10</td>
            <td>93 - 98</td>
            <td>74 - 79</td>
            <td>100 - 105,5</td>
          </tr>
          <tr>
            <td>l</td>
            <td>12 - 14</td>
            <td>99 - 104</td>
            <td>80 - 87,5</td>
            <td>107 - 112</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

SizeGuide.propTypes = {
  handleCloseModal: PropTypes.func,
};

export {SizeGuide};
