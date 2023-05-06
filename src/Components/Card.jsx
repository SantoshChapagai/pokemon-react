import React from 'react';
import './Style.css';

const Card = ({ id, name, image }) => {

  return (

    <div className='card'>
      <p>X</p>
      <div>
        <img src={image} alt={name} />
      </div>
      <p>{id}</p>
      <p>{name}</p>
    </div>

  );
};

export default Card;