import React from 'react';
import './Style.css';

const Card = ({ id, name, img }) => {

  return (
    <div className='card'>
      <p>X</p>
      {img}
      <p>{id}</p>
      <p>{name}</p>
    </div>
  );
};

export default Card;