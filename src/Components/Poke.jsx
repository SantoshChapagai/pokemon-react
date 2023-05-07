import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../UI/Card'
import './Style.css'

const Poke = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  console.log(data);
  useEffect(() => {
    setIsLoading(true);
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then((response) => {
      const fetches = response.data.results.map((item) => {
        return axios.get(item.url).then((response) => response.data)
      });
      Promise.all(fetches).then((response) => {
        setData(response);
        setIsLoading(false)
      });

    });

  }, []); const searchInputHandler = (e) => {
    setSearchInput(e.target.value)
  }

  const searchFilter = data.filter(item => {
    return item.name.includes(searchInput)
  })

  if (isLoading) {
    return <p>Loading...</p>
  }
  return (
    <>
      <div className='search'>
        <input onChange={searchInputHandler} />
      </div>
      <div className='pokemon_holder'>
        {searchFilter.map((item) => (<Card
          key={item.name}
          name={item.name}
          id={item.id}
          image={item.sprites.other.dream_world.front_default}
        />

        ))}
      </div>
    </>
  );
};

export default Poke;