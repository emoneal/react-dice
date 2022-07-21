import React from 'react'
import Dicebox from './Dicebox'
import './App.css';

function App() {

  const [numbers, setNumbers] = React.useState([null, null, null, null, null])

  function assignNumbers() {
    return Math.floor(Math.random() * 5) + 1
}

function roll() {
  setNumbers([assignNumbers(), assignNumbers(), assignNumbers(), assignNumbers()])
}

  return (
    <div className="App">
      <Dicebox numbers = {numbers} />
      <button onClick={roll} className="rollDiceButton"><h3>Roll</h3></button>
    </div>
  );
}

export default App;
