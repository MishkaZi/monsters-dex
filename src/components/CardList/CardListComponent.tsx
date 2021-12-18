import React from 'react';
import MonsterModel from '../../models/MonsterModel';
import CardComponent from '../Card/CardComponent';
import './CardListStyles.css';

const CardListComponent = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.map((m: MonsterModel) => (
        <CardComponent key={m.id} monster={m} />
      ))}
    </div>
  );
};

export default CardListComponent;
