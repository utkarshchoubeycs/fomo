import React, { useState, useEffect } from 'react';
import Stage5 from './Stage5';

function LandingPage() {
  const [stage, setStage] = useState(0);

  /*const handleTap = () => {
    if (stage < 5) {
      setStage(prevStage => prevStage + 1);
    } else {
      setStage(5);
    }
  };
  console.log(stage);*/

  useEffect(() => {
    // If it's the last stage, don't set a timeout
    if (stage >= 5) return;

    // Set a timeout to change the stage
    const timer = setTimeout(() => {
      setStage(prevStage => prevStage + 1);
    }, 700); // Change stage every 1.5 seconds

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [stage]); // Re-run the effect when the stage changes

  const renderStage = () => {
    switch(stage) {
      case 0: return <Stage0 />;
      case 1: return <Stage1 />;
      case 2: return <Stage2 />;
      case 3: return <Stage3 />;
      case 4: return <Stage4 />;
      case 5: return <Stage5 />;
      default: return <Stage5 />;
    }
  };

  return (
    <div style={{background:getBackgroundForStage(stage), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'background 0.5s'}}>
      {renderStage()}
    </div>
  );
}

const getBackgroundForStage = (stage) => {
  switch(stage) {
    case 0: return 'radial-gradient(ellipse farthest-side at center, rgba(119, 27, 146, 1), black)'; // neon pink
    case 1: return 'radial-gradient(ellipse farthest-side at center, rgba(116, 16, 16, 1), black)'; // neon red
    case 2: return 'radial-gradient(ellipse farthest-side at center, rgba(15, 123, 123, 1), black)'; // neon blue
    case 3: return 'radial-gradient(ellipse farthest-side at center, rgba(13, 97, 13, 1), black)'; // neon green
    case 4: return 'radial-gradient(ellipse farthest-side at center, rgba(23, 24, 129, 1), black)'; // neon blue again
    default: return 'black';
  }
};  

// ... (previous code)

const ringBase = {
    position: 'absolute',
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '120px',
    border: '1px solid white',
    fontFamily: 'NulShock'
  };
  
  function Stage0() {
    return (
      <div style={{ ...ringBase, width: '638px', height: '638px', borderColor: '#C800FF' }}>
        <span style={{ color: '#E75CFF', fontWeight: 'bold', letterSpacing: '2px', fontSize: '120px', webkitTextFillColor:"transparent", webkitTextStrokeWidth: "3px"}}>
        MUSIC
        </span>
      </div>
    );
  }
  
  function Stage1() {
    return (
      <>
        <div style={{ ...ringBase, width: '846px', height: '846px', whiteSpace: 'nowrap',  borderColor: 'rgba(254, 0, 0, 1)' }}>
          <span style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
            MUSIC, <span style={{ color: 'rgba(254, 0, 0, 1)', webkitTextFillColor:"transparent", webkitTextStrokeWidth: "3px", fontSize: '120px'}}>DRINKS</span>
          </span>
        </div>
        <div style={{ ...ringBase, width: '638px', height: '638px', borderColor: '#fff' }}></div>
      </>
    );
  }
  
  function Stage2() {
    return (
      <>
        <div style={{ ...ringBase, width: '1102px', height: '1102px', borderColor: 'rgba(1, 255, 255, 1)', whiteSpace: 'nowrap'}}>
          <span style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
            MUSIC, DRINKS,<br/> <span style={{ color: 'rgba(1, 255, 255, 1)', webkitTextFillColor:"transparent", webkitTextStrokeWidth: '3px' }}>LIGHTS</span>
          </span>
        </div>
        <div style={{ ...ringBase, width: '368px', height: '368px', borderColor: '#fff' }}></div>
        <div style={{ ...ringBase, width: '578px', height: '578px', borderColor: 'rgba(255, 255, 255, 1)' }}></div>
      </>
    );
  }
  
  function Stage3() {
    return (
      <>
        <div style={{ ...ringBase, width: '1200px', height: '1200px', borderColor: 'rgba(0, 255, 1, 1)', whiteSpace: 'nowrap' }}>
          <span style={{color: 'white', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
            MUSIC, DRINKS,<br/> LIGHTS <span style={{ color: 'rgba(0, 255, 1, 1)', webkitTextFillColor:"transparent", webkitTextStrokeWidth: "3px" }}>& ACTION</span>
          </span>
        </div>
        <div style={{ ...ringBase, width: '368px', height: '368px' }}></div>
        <div style={{ ...ringBase, width: '528px', height: '528px' }}></div>
        <div style={{ ...ringBase, width: '578px', height: '578px', borderColor: 'rgba(255, 255, 255, 1)' }}></div>
      </>
    );
  }
  
  function Stage4() {
    return (
      <>
        <div style={{ ...ringBase, width: '1200px', height: '1200px', whiteSpace: 'nowrap' }}>
          <span style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
            MUSIC, DRINKS,<br/> LIGHTS & ACTION
          </span>
        </div>
        <div style={{ ...ringBase, width: '368px', height: '368px' }}></div>
        <div style={{ ...ringBase, width: '528px', height: '528px' }}></div>
        <div style={{ ...ringBase, width: '578px', height: '578px' }}></div>
        <div style={{ ...ringBase, width: '928px', height: '928px' }}></div>
      </>
    );
  }
  
export default LandingPage;
  
