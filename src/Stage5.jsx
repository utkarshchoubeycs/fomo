import section1bgImage from './assets/section1bgimage.png';
import section2bgImage from './assets/section2bgimage.png';
import section3bgImage from './assets/section3bgimage.png';
import "@fontsource/roboto/500.css";

function Stage5() {
    return (
      <div style={{height: '100vh', width: '100vw', overflowY: 'auto' }}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
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
    return (
      <div style={{
        width: '100vw',
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
    );
}

export default Stage5;