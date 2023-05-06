import React from 'react';
import { NavLink } from 'react-router-dom';
import './Style.css';
const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pokedex">Pokemon</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;