import React, {useRef, useState} from 'react';

import section1bgimage from './assets/section1bgimage.png';
import section2bgimage from './assets/section2bgimage.png';
import section3bgimage from './assets/section3bgimage.png';
import section4image from './assets/section4image.png';
import logovideo from './assets/logovideo.mp4';

const parentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
};

const mainImageStyle = {
    transform: 'scale(2)',
    marginTop: '25%',
    marginBottom: '50%'
};

const mainImageStyle2 = {
    transform: 'scale(1.6)',
    marginTop: '63%',
    marginBottom: '40%'
};

const mainImageStyle3 = {
    marginTop: '30%',
    transform: 'scale(2)',
    marginBottom: '28%',
};


const contentStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

function Section({ image, altText, aspectRatio, style, children }) {
    const sectionStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: `${100 / aspectRatio}%`,// This will maintain the aspect ratio
        ...style
    };



    return (
        <div style={sectionStyle}>
                {children}
        </div>
    );
}
function MainPage() {
    return (
        <div style={parentStyle}>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
        </div>
    );
}

function Section1() {
    return (
        <Section
            image={section1bgimage}
            altText="Section 1 Background"
            aspectRatio={0.7070}
            style={mainImageStyle}>
            <div style={contentStyle}>
                {/*content*/}
            </div>
        </Section>
    )
}

function Section2() {
    return (
        <Section
            image={section2bgimage}
            altText="Section 1 Background"
            aspectRatio={0.7070}
            style={mainImageStyle2}>
            <div style={contentStyle}>
                {/*content*/}
            </div>
        </Section>
    )
}


function Section3() {
    return (
        <Section
            image={section3bgimage}
            altText="Section 3 Background"
            aspectRatio={1.777}
            style={mainImageStyle3}>
            <div style={contentStyle}>
                <span style={{
                    fontSize: '2vw',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    letterSpacing: '2px',

                }}>
                {"Cause the"}
            </span> <br/>
                <span style={{
                    fontSize: '3vw',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    fontFamily: 'Nulshock',
                    fontWeight: 'bold',
                    letterSpacing: '2px',

                }}>
                {"FEAR OF MISSING OUT"}
            </span> <br/>
                <span style={{
                    fontSize: '2vw',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                }}>
                {"is a thing of the past."}
            </span>
            </div>
        </Section>
    )
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


export default MainPage;