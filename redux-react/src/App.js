import React from 'react';
import './App.css';

import Rates from './Components/Rates';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Currency exchange base USD</p>
        <Rates />
      </header>
    </div>
  );
}

export default App;
