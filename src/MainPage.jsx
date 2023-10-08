import React, {useRef, useState} from 'react';

import section1bgimage from './assets/section1bgimage.png';
import section1maskimage from './assets/section1maskimage.png';
import section2bgimage from './assets/section2bgimage.png';
import section2maskimage from './assets/section2maskimage.png';
import section3bgimage from './assets/section3bgimage.png';
import section4image from './assets/section4image.png';
import logovideo from './assets/logovideo.mp4';
import HorizontalScrollText from "./components/HorizontalScrollText";

const parentStyle = {
    display: 'grid', gridTemplateColumns: '1fr', width: '100%', height: '100%', overflow: 'hidden',
};

const mainImageStyle = {
    transform: 'scale(2)', marginTop: '25%', marginBottom: '50%'
};

const mainImageStyle2 = {
    transform: 'scale(1.6)', marginTop: '63%', marginBottom: '40%'
};

const mainImageStyle3 = {
    marginTop: '36%', transform: 'scale(2.2)', marginBottom: '30%',
};


const contentStyle3 = {
    position: 'absolute',
    top: '26%',
    left: '25%',
    right: '25%',
    bottom: '50%',
    display: 'flex',
    flexDirection: 'column',


};

const contentStyle1 = {
    position: 'absolute',
    top: '26%',
    left: '25%',
    right: '25%',
    bottom: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
};

const contentStyle2 = {
    position: 'absolute',
    top: '14%',
    left: '22%',
    right: '22%',
    bottom: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
};

const maskImageStyle1 = {
    position: 'absolute',
    top: '102%',
    width: '100%',
    height: '100%',

};

const maskImageStyle2 = {
    position: 'absolute', left: '18%', right: '23%', bottom: '88%', overflow: 'visible'

};

function Section({image, sectionGradient, gradientBlendMode, altText, aspectRatio, style, children}) {
    const sectionStyle = {
        backgroundImage: `url(${image}) , ${sectionGradient}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: `${gradientBlendMode}`,
        paddingTop: `${100 / aspectRatio}%`,// This will maintain the aspect ratio
        ...style
    };


    return (<div style={sectionStyle}>
            {children}
        </div>);
}


function MainPage() {
    return (<div style={parentStyle}>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
        </div>);
}

function Section1() {
    const section1Gradient = 'linear-gradient(180deg, #FF2B2B 0%, #2B2BFF 90%, #752BB0 100%)';
    return (<Section
            image={section1bgimage}
            sectionGradient={section1Gradient}
            gradientBlendMode={'multiply'}
            altText="Section 1 Background"
            aspectRatio={0.7070}
            style={mainImageStyle}>
            <div style={contentStyle1}>
                <HorizontalScrollText/>
                <div style={{
                    marginTop: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <span
                        style={{
                             fontSize: '1.5vw', color: 'white', fontFamily: 'Roboto', fontWeight: 'bold', textAlign: 'left', paddingLeft: '8%',
                        }}>
                        {"Welcome to F.O.M.O., your ultimate guide to an ehilarating"}
                    </span>

                    <span style={{
                        fontSize: '5vw', color: 'white', fontFamily: 'Nulshock', fontWeight: 'bold', textAlign: 'left', marginTop: '3%', paddingLeft: '8%',
                    }}>
                        NOTURAL <br/> ESCAPADEL
                    </span>
                    <img
                        src={section1maskimage}
                        height={'100%'}
                        width={'100%'}
                        alt={"Section 1 Mask"}
                        style={maskImageStyle1}

                    />
                    <span
                        style={{
                            fontSize: '1.4vw',
                            color: 'white',
                            fontFamily: 'Roboto',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            paddingRight: '8%',
                            marginTop: '58%',
                            paddingLeft: '8%',
                        }}
                    >
                        {"Get ready to immerse yourself in the pulsating heartbeats of Bangalore and the sun-kissed shores of Goa, as we unveil a platform that's set to redefine your"}

                    </span>
                    <span style={{
                        fontSize: '5vw',
                        color: 'white',
                        fontFamily: 'Nulshock',
                        fontWeight: 'bold',
                        paddingTop: '3%',
                        textAlign: 'left',
                        paddingLeft: '8%',
                    }}>
                        PARTY <br/>  EXPERIENCE
                    </span>
                </div>

            </div>
        </Section>)
}

function Section2() {
    const section2Gradient = 'linear-gradient(180deg, #9750F0 0%, #9750F0 60%, #BA12F1 90%, #E050F0 100%)';

    return (<Section
        image={section2bgimage}
        sectionGradient={section2Gradient}
        gradientBlendMode={'multiply'}
        altText="Section 1 Background"
        aspectRatio={0.7068}
        style={mainImageStyle2}>
        <div style={maskImageStyle2}>
            <img
                src={section2maskimage}
                height={'100%'}
                width={'100%'}
                alt={"Section 2 Mask"}
            />
        </div>
        <div style={contentStyle2}>
            <span style={{fontFamily: 'Roboto', fontWeight: 'bold', color: 'white', fontSize: '1.72vw', textAlign: 'left'}}>
                Picture this: <br/>
                Vibrant parties, dynamic pubs, and buzzing clubs, all curated with a passion that only true party enthusiasts can understand. We've meticulously handpicked the hottest DJs, the most happening parties, and the trendiest spots to ensure you're always at the forefront of the action.
            </span>


            <div style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: '30%',
                alignItems: 'center',
                left: '10%',
            }}>
                <span style={{fontFamily: 'NulShock', color: 'white', fontSize:'1.5vw', marginBottom: '10%'}}>
                    We're the ones
                </span>
                <span style={{fontFamily: 'NulShock', color: 'white', fontSize: '2.5vw', marginBottom: '10%'}}>
                    We're the ones who
                </span>
                <span style={{fontFamily: 'NulShock', color: 'white', fontSize: '4.5vw', marginBottom: '10%'}}>
                    Understand
                </span>
                <span style={{fontFamily: 'NulShock', color: 'white', fontSize: '4.5vw', marginBottom: '10%'}}>
                    Your Craving
                </span>
                <span style={{fontFamily: 'NulShock', color: 'white', fontSize: '4.5vw', marginBottom: '10%'}}>
                    For A Night to
                </span>
                <span style={{fontFamily: 'NulShock', color: 'white', fontSize: '6.2vw', marginBottom: '47%'}}>
                    Remember!
                </span>
                <span
                    style={{
                        fontFamily: 'NulShock',
                        fontSize: '13vw',
                        color: 'transparent',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundImage: `url(${section3bgimage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        display: 'inline'}}>
                    WHY
                </span>
            </div>




        </div>
    </Section>)
}


function Section3() {
    const section3Gradient = 'linear-gradient(180deg, rgba(212, 60, 122, 0.6) 0%, rgba(175, 60, 130, 0.7) 60%, rgba(150, 85, 140, 0.5) 80%, rgba(0, 0, 0, 1) 100%)';

    return (<Section
            image={section3bgimage}
            sectionGradient={section3Gradient}
            gradientBlendMode={'screen'}
            altText="Section 3 Background"
            aspectRatio={1.777}
            style={mainImageStyle3}>
            <div style={contentStyle3}>
                <span style={{
                    fontSize: '2vw',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    marginBottom: '2%'


                }}>
                {"Cause the"}
            </span>
                <span style={{
                    fontSize: '2.5vw',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    fontFamily: 'Nulshock',
                    fontWeight: 'bold',
                    marginBottom: '2%'

                }}>
                {"FEAR OF MISSING OUT"}
            </span>
                <span style={{
                    fontSize: '2vw',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',

                }}>
                {"is a thing of the past!"}
            </span>
            </div>
        </Section>)
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
            height: '100%',
            background: 'black',
            display: 'flex',
            flexDirection: 'column', // Stack children vertically
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '20%',
            position: 'relative',

        }}>
            {videoEnded ? (<img src={placeholderImage} style={{
                width: '100%', height: '100%', objectFit: 'contain', marginBottom: '10%' // Space between image and text
            }} alt="Placeholder"/>) : (<video
                ref={videoRef}
                style={{
                    width: '100%',
                    height: '100%',
                    padding: '21%',
                    objectFit: 'contain',
                    marginBottom: '10%',
                    borderRadius: '100%',
                }}
                poster={placeholderImage}
                autoPlay
                muted
                onEnded={handleVideoEnd}
            >
                <source src={videoSrc} type="video/mp4"/>
                {/* Fallback content for browsers that don't support the video tag */}
                <img src={placeholderImage} style={{
                    width: '100%', height: '100%', objectFit: 'contain', marginBottom: '10%'
                }} alt="Placeholder"/>
            </video>)}
            <span style={{
                fontSize: '2em',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                fontFamily: 'Roboto',
                letterSpacing: '2px',
                paddingBottom: '40%'
            }}>
            Coming Soon!
        </span>
        </div>);
}


export default MainPage;