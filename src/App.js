import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home'
import Poke from './Components/Poke'
import Render from './Components/Render';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Render />}>
            <Route index element={<Home />} />
            <Route path="pokedex" element={<Poke />} />
          </Route>
        </Routes>
      </BrowserRouter >


    </div >
  );
}

export default App;
