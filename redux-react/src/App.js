import React from 'react';
import './App.css';

import Rates from './Components/Rates';

//https://api.ratesapi.io/api/latest?base=USD

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Currency exchange base USD</p>
        <button onClick={() => {}}>get rates base USD</button>
        <Rates />
      </header>
    </div>
  );
}

export default App;
