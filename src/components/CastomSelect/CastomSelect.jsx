import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './CastomSelect.scss';

const CastomSelect = ({options}) => {
  return <Select classNamePrefix='custom-select' options={options} />;
};

CastomSelect.propTypes = {
  options: PropTypes.array,
};

export default CastomSelect;
