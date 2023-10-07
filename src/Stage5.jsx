import React, {useRef, useState} from 'react';
import section1bgImage from './assets/section1bgimage.png';
import section2bgImage from './assets/section2bgimage.png';
import section3bgImage from './assets/section3bgimage.png';
import section4image from './assets/section4image.png';
import logovideo from './assets/logovideo.mp4';

function Stage5() {
    return (
        <div style={{width: '100vw', height: '100vh'}}>
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

    const section1css = {
        width: '100vw',
        minHeight: '200vw',
        backgroundSize: '200%',
        backgroundPosition: 'calc(50% - 100px) center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `${linearGradient}, ${backgroundImage}`
    };

    return (
        <div style={section1css}>
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
            height: '160vw',
            backgroundSize: '140%',
            backgroundPosition: 'calc(50% - 100px) center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: `${linearGradient}, ${backgroundImage}`
        }}>
        <span style={{
            textAlign: 'left',
            font: 'normal normal medium 50px/61px Roboto',
            fontSize: '2vw',
            color: 'white',
            letterSpacing: '0px',
        }}>
          Picture this: <br/>
            Vibrant parties, dynamic pubs, and buzzing clubs, all curated with a <br/>
            passion  that only true party enthusiasts can understand. We've meticulously <br/>
            handpicked the hottest DJs, the most happening parties, and the trendiest <br/>
            spots to ensure you're always at the forefront of the action.
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
            height: '100vh',
            minHeight: '4208',
            //backgroundSize: '150%',
            //backgroundPosition: 'calc(50% - 220px) center',
            display: 'flex',
            flexDirection: 'column', // To stack the text lines vertically
            justifyContent: 'center',
            alignItems: 'center',
            background: `${linearGradient}, ${backgroundImage}`
        }}>
        
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
            minHeight: '1791',
            height: '100vh',
            background: 'black',
            display: 'flex',
            flexDirection: 'column', // Stack children vertically
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        }}>
            {videoEnded ? (
                <img src={placeholderImage} style={{
                    width: '50%',
                    height: '50%',
                    objectFit: 'contain',
                    marginBottom: '50px' // Space between image and text
                }} alt="Placeholder"/>
            ) : (
                <video
                    ref={videoRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        //marginBottom: '50px' // Space between video and text
                    }}
                    poster={placeholderImage}
                    autoPlay
                    muted
                    onEnded={handleVideoEnd}
                >
                    <source src={videoSrc} type="video/mp4"/>
                    {/* Fallback content for browsers that don't support the video tag */}
                    <img src={placeholderImage} style={{
                        width: '50%',
                        height: '50%',
                        objectFit: 'contain',
                        marginBottom: '50px'
                    }} alt="Placeholder"/>
                </video>
            )}
            <span style={{
                fontSize: '2em',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                letterSpacing: '2px',
                marginBottom: '50px'
            }}>
            Coming Soon!
        </span>
        </div>
    );
}

export default Stage5;