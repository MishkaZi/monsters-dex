import React from 'react';
import './SearchBoxStyles.css';
const SearchBoxComponent = ({ placeHolder, handleChange }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeHolder}
      onChange={handleChange}
    />
  );
};

export default SearchBoxComponent;
