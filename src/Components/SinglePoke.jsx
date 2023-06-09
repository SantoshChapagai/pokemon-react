import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Style.css'

const SinglePoke = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.singlepoke}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
  }, [params.singlepoke]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='single_poke'>
      <h2>{data.name}</h2>
      <img
        src={data.sprites?.other.dream_world.front_default}
        alt={data.name}
      />
      <h3>Id: #{data.id}</h3>
      <h3>Weight: {data.weight}</h3>
      <h3>Types: {data.types?.map(type => type.type.name).join(', ')}</h3>
      <p><i>Moves: {data.moves?.map(move => move.move.name).join(', ')}</i></p>
      <button onClick={() => navigate(-1)}>Go back </button>
    </div>
  );
};

export default SinglePoke;