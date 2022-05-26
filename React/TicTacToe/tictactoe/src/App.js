import './App.css';
import TicTacToe from './components/TicTacToe';
import Player from './components/Player';
import Pie from "./components/Pie"

import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState('X');
  const [winner, setWinner] = useState('');
  return (
    <div className="App">
      <Player user={user} winner={winner} />
      <TicTacToe setUser={setUser} user={user} winner={winner} setWinner={setWinner} />
      <div className="pie-container">
      <Pie  data={[
  {
    "id": "php",
    "label": "php",
    "value": 244,
    "color": "hsl(321, 70%, 50%)"
  },
  {
    "id": "stylus",
    "label": "stylus",
    "value": 79,
    "color": "hsl(232, 70%, 50%)"
  },
  {
    "id": "java",
    "label": "java",
    "value": 160,
    "color": "hsl(128, 70%, 50%)"
  },
  {
    "id": "css",
    "label": "css",
    "value": 513,
    "color": "hsl(220, 70%, 50%)"
  },
  {
    "id": "erlang",
    "label": "erlang",
    "value": 459,
    "color": "hsl(305, 70%, 50%)"
  }
]}/></div>
    </div>
  );
}


export default App;
