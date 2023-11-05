// src/App.js
import React, { useState } from 'react';
import './App.css';
import RingsAreaComponent from './components/RingsAreaComponent';
import MainPage from './components/MainPage';

function App() {

  const [stage, setStage] = useState(0);

  return (
    <div className='App'>
      <RingsAreaComponent stage={stage} setStage={setStage} />
      { stage === 4 && <MainPage />}
    </div>
      
  );
}

export default App;
