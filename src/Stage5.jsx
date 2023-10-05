import React, {useRef, useState} from 'react';
import section1bgImage from './assets/section1bgimage.png';
import section2bgImage from './assets/section2bgimage.png';
import section3bgImage from './assets/section3bgimage.png';
import section4image from './assets/section4image.png';
import logovideo from './assets/logovideo.mp4';

function Stage5() {
    return (
        <div style={{height: '100vh', width: '100%', overflowY: 'auto'}}>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
        </div>
    );
}


function Section1() {
    const backgroundImage = `url(${section1bgImage})`;
    const linearGradient = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))";
    return (
      <div style={{
        width: '100vw',
        height: '200vw',
        backgroundSize: '200%',
        backgroundPosition: 'calc(50% - 100px) center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `${linearGradient}, ${backgroundImage}`
      }}>
        <span style={{
          fontSize: '2em',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          fontFamily: 'Roboto',
          letterSpacing: '2px',
        }}>
          Text for Section 1
        </span>
        </div>
    );
}

function Section2() {
    const backgroundImage = `url(${section2bgImage})`;
    const linearGradient = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))";
    return (
      <div style={{
        width: '100vw',
        height: '160vw',
        backgroundSize: '140%',
        backgroundPosition: 'calc(50% - 100px) center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `${linearGradient}, ${backgroundImage}`
      }}>
        <span style={{
            fontSize: '2em',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            letterSpacing: '2px',
        }}>
          Text for Section 2
        </span>
        </div>
    );
}

function Section3() {
    const backgroundImage = `url(${section3bgImage})`;
    const linearGradient = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))";
    return (
      <div style={{
        width: '100vw',
        minHeight: '100vh',
        backgroundSize: '150%',
        backgroundPosition: 'calc(50% - 220px) center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `${linearGradient}, ${backgroundImage}`
      }}>
        <span style={{
            fontSize: '2em',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            letterSpacing: '2px',
        }}>
          Text for Section 3
        </span>
        </div>
    );
}

function Section4() {
    const videoSrc = logovideo;
    const placeholderImage = section4image;

    const videoRef = useRef(null);
    const [videoEnded, setVideoEnded] = useState(false);

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    return (
      <div style={{
          width: '100%',
          minHeight: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column', // Changed to column to stack video and text vertically
          justifyContent: 'center',
          alignItems: 'center',
          background: 'black',
          position: 'relative'
      }}>
          {videoEnded ? (
              <img src={placeholderImage} style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '55%',
                  height: '55%',
                  objectFit: 'contain',
                  zIndex: 1
              }} alt="Placeholder"/>
          ) : (
              <video
                  ref={videoRef}
                  style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      zIndex: 1
                  }}
                  poster={placeholderImage}
                  autoPlay
                  muted
                  onEnded={handleVideoEnd}
              >
                  <source src={videoSrc} type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>
          )}
          <div style={{
              width: '100%',
              minHeight: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'black'
          }}>
              <span style={{
                  fontSize: '2em',
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
              }}>
                  Coming Soon!
              </span>
          </div>
      </div>
  );
}

export default Stage5;