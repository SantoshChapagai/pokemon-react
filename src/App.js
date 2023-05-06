import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Components/Card'
import Main from './Components/Main';
import './Components/Style.css'
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(data);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then((response) => {
      setData(response.data);
      setIsLoading(false)
    });

  }, []);
  if (isLoading) {
    return <p>Loading...</p>
  }



  return (
    <div className="App">
      {data.results.map((item) => (< Card
        name={item.name}

      />))}
      <Main />
    </div>
  );
}

export default App;
