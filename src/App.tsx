import React from 'react';
import './App.css';
import MainScreen from './components/MainScreen';
import StaveArea from './components/StaveArea';

function App() {
  return (
    <div className="App">
      <MainScreen />
      <header>
          <h1>Melody generator</h1>
      </header>
      <StaveArea/>
    </div>
  );
}

export default App;
