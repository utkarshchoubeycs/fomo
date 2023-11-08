// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import RingsAreaComponent from './components/RingsAreaComponent';
import MainPage from './components/MainPage';
import { useScroll } from 'framer-motion';

function App() {

  const [stage, setStage] = useState(0);
  const { scrollYProgress } = useScroll();
  const [showRings, setShowRings] = useState(true);

  useEffect(() => {
    
    const unSubYProgress = scrollYProgress.on("change", value => {

      // hide RingsComponent when we scroll more than 30%
      if(value > 0.3) setShowRings(false);
      else setShowRings(true);

    });

    return () => unSubYProgress();
  })

  return (
    <div className='App'>
      { showRings === true && <RingsAreaComponent stage={stage} setStage={setStage} /> }
      { stage === 4 && <MainPage />}
    </div>
      
  );
}

export default App;
