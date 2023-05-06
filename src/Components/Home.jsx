import React from 'react';
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pokedex">Pokemon</NavLink>
        </li>
      </ul>

    </div>
  );
};

export default Home;