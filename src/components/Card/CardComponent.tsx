import React from 'react';
import './CardStyles.css';

const CardComponent = ({ monster }) => {
  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${monster.id * 5}?set=set2&size=180x180`}
        alt=''
      />
      <h3>{monster.name}</h3>
      <p>{monster.email}</p>
    </div>
  );
};

export default CardComponent;
