import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Card = ({ name, image }) => {

  return (

    <div className='card'>
      <div>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <Link to={name}>See more</Link>
    </div>


  );
};

export default Card;