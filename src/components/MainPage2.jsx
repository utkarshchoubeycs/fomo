 import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import section2bgimage from '../assets/BG_1MB.webp';

const parentStyle = {
    display: 'grid', gridTemplateColumns: '1fr', width: '100%', height: '100%', overflow: 'hidden'
};

const mainImageStyle = {
    transform: 'scale(2)', 
    marginTop: '25%', 
    marginBottom: '50%',
    backgroundAttachment: 'fixed'
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
    position: 'absolute', left: '18%', right: '23%', bottom: '88%'

};

function Section({image, sectionGradient, gradientBlendMode, altText, aspectRatio, style, children}) {
    const sectionStyle = {
        backgroundImage: `url(${image}) , ${sectionGradient}`,
        borderColor: 'black',
        borderWidth: '2px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: `${gradientBlendMode}`,
        paddingTop: `${100 / aspectRatio}%`,// This will maintain the aspect ratio
        ...style
    };


    return (
        <div style={sectionStyle}>
            {children}
        </div>);
}


function MainPage() {

    return (
        <motion.div style={parentStyle}>
            <Section2/>
        </motion.div>);
}

/*function Section1() {
    const section1Gradient = 'linear-gradient(180deg, #FF2B2B 0%, #2B2BFF 90%, #752BB0 100%)';

    const ref1 = useRef();
    const ref2 = useRef();
    const imageMaskRef= useRef();

    const isInViewText1 = useInView(ref1);
    const isInViewText2 = useInView(ref2);
    const isMaskInView = useInView(imageMaskRef);

    return (
        <Section
            image={section1bgimage}
            sectionGradient={section1Gradient}
            gradientBlendMode={'multiply'}
            altText="Section 1 Background"
            aspectRatio={0.7070}
            style={{zIndex: 1, ...mainImageStyle}}>
            <div 
                style={contentStyle1}
            >
                <HorizontalScrollText/>
                <div style={{
                    marginTop: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <span
                        ref={ref1}
                        style={{
                            fontSize: '1.5vw', 
                            color: 'white', 
                            fontFamily: 'Roboto', 
                            fontWeight: 'bold', 
                            textAlign: 'left', 
                            paddingLeft: '8%',
                            opacity: isInViewText1 ? 1: 0,
                            transform: isInViewText1 ? "none" : "translateY(20px)",
                            transition: "all 0.5s cubic-bezier(0.14, 0.55, 0.55, 1) 1.5s"
                        }}
                    >
                        {"Welcome to F.O.M.O., your ultimate guide to an ehilarating"}
                    </span>

                    <span ref={ref1} style={{
                        fontSize: '5vw', 
                        color: 'white', 
                        fontFamily: 'Nulshock', 
                        fontWeight: 'bold', 
                        textAlign: 'left', 
                        marginTop: '3%', 
                        paddingLeft: '8%',
                        opacity: isInViewText1 ? 1: 0,
                        transform: isInViewText1 ? "none" : "translateY(20px)",
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>
                        NOTURAL <br/> ESCAPADEL
                    </span>
                    <img
                        ref={imageMaskRef}
                        src={section1maskimage}
                        height={'100%'}
                        width={'100%'}
                        alt={"Section 1 Mask"}
                        style={{
                            opacity: isMaskInView ? 1: 0,
                            transform: isMaskInView ? "none" : "translateX(100%)",
                            transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                            ...maskImageStyle1}}
                    />
                    <span
                        ref={ref2}
                        style={{
                            fontSize: '1.4vw',
                            color: 'white',
                            fontFamily: 'Roboto',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            paddingRight: '8%',
                            marginTop: '58%',
                            paddingLeft: '8%',
                            transform: isInViewText2 ? "none" : "translateY(20px)",
                            opacity: isInViewText2 ? 1: 0,
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        {"Get ready to immerse yourself in the pulsating heartbeats of Bangalore and the sun-kissed shores of Goa, as we unveil a platform that's set to redefine your"}

                    </span>
                    <span 
                        ref={ref2}
                        style={{
                            fontSize: '5vw',
                            color: 'white',
                            fontFamily: 'Nulshock',
                            fontWeight: 'bold',
                            paddingTop: '3%',
                            textAlign: 'left',
                            paddingLeft: '8%',
                            opacity: isInViewText2 ? 1: 0,
                            transform: isInViewText2 ? "none" : "translateY(20px)",
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>
                        PARTY <br/>  EXPERIENCE
                    </span>
                </div>

            </div>
        </Section>
    )
}*/

function Section2() {

    const section2Gradient = 'linear-gradient(180deg, #9750F0 0%, #9750F0 60%, #BA12F1 90%, #E050F0 100%)';
    
    const imageMaskRef = useRef();
    const isMaskInView = useInView(imageMaskRef);

    return (
        <Section
            image={section2bgimage}
            sectionGradient={section2Gradient}
            gradientBlendMode={'multiply'}
            altText="Section 1 Background"
            aspectRatio={0.7068}
            style={{ zIndex: 2, ...mainImageStyle2}}>
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
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            display: 'inline'}}>
                        WHY
                    </span>
                </div>




            </div>
        </Section>
    )
}

/*
function Section3() {
    const section3Gradient = 'linear-gradient(180deg, rgba(212, 60, 122, 0.6) 0%, rgba(175, 60, 130, 0.7) 60%, rgba(150, 85, 140, 0.5) 80%, rgba(0, 0, 0, 1) 100%)';

    return (<Section
            image={section3bgimage}
            sectionGradient={section3Gradient}
            gradientBlendMode={'screen'}
            altText="Section 3 Background"
            aspectRatio={1.777}
            style={{ zIndex: 3, ...mainImageStyle3}}>
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
}*/

/*
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
                {/* Fallback content for browsers that don't support the video tag
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
*/


export default MainPage;


<img
                            src={FourHandsImage}
                            alt={"Section 1 Mask"}
                            style={fourhandsStyle}
                        />
                        <span style={{
                            fontSize: '5.5rem', 
                            color: 'white', 
                            fontFamily: 'Nulshock', 
                            fontWeight: 'bold', 
                            textAlign: 'center',
                            justifyContent: 'center',
                            marginLeft: '13%',
                            marginRight: '13%',
                            marginTop: '15%', 
                        }}>
                            FOMO COMES ALIVE
                    </span>
                        <span
                            style={{
                                fontSize: '2.4%',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                marginTop: '18%',
                                marginLeft: '13%'
                            }}
                        >
                            {"FOMO's your"}

                        </span>
                        <span 
                            style={{
                                fontSize: '7.8%',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                marginLeft: '13%',
                                marginTop: '1%'
                        }}>
                            NOCTURNAL <br/>  NAVIGATOR
                        </span>
                        <span
                            style={{
                                fontSize: '2.75%',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginLeft: '13%',
                            }}
                        >
                            ready to take you on wild rides through the cities <br/> that never sleep!
                        </span>
                        <img
                            src={mask1Image}
                            alt={"Mask 1"}
                            style={mask1ImageStyle}
                        />
                        <span
                            style={{
                                fontSize: '2.5%',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'right',
                                paddingRight: '8%',
                                marginTop: '115%',
                                marginRight: '5%'
                            }}
                        >
                            We're diving deep into the vibrant <br/> heartbeats of Bangalore and <br/> the sun-soaked shores of Goa, <br/>plotting a party revolution you <br/> won't want to miss.
                        </span>
                        <img
                            src={mask2Image}
                            alt={"Mask 2"}
                            style={mask2ImageStyle}
                        />
                        <span
                            style={{
                                fontSize: '2.5%',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginTop: '110%',
                                marginLeft: '13%'
                            }}
                        >
                            Get ready for action-packed parties, <br/>electric pubs, and clubs that buzz <br/> louder than your morning alarm.<br/> Curated by true party enthusiasts and <br/> we've got your back!
                        </span>
                        <img
                            src={mask3Image}
                            alt={"Mask 3"}
                            style={mask3ImageStyle}
                        />
                        <span
                            style={{
                                fontSize: '6%',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginTop: '80%',
                                marginLeft: '13%'
                            }}
                        >
                            AT FOMO,
                        </span>
                        <span
                            style={{
                                fontSize: '6%',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginTop: '2%',
                                marginLeft: '13%'
                            }}
                        >
                            WE'VE BOTTLED <br/> THAT FEAR AND
                        </span>
                        <span
                            style={{
                                fontSize: '2.5%',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginLeft: '14%'
                            }}
                        >
                            turned it into a way of life
                        </span>
                        <img
                            src={cheersImage}
                            alt={"Cheers hands"}
                            style={cheersImageStyle}
                        />
                        <span
                            style={{
                                fontSize: '7.8%',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginTop: '80%',
                                marginLeft: '14%'
                            }}
                        >
                            BECAUSE
                        </span>
                        <span
                            style={{
                                fontSize: '2.8%',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginTop: '-2%',
                                marginLeft: '14%'
                            }}
                        >
                            the fear of missing out is the thing of the past!
                        </span>
                        <img
                            src={mask4Image}
                            alt={"Mask 4"}
                            style={mask4ImageStyle}
                        />
                        <span
                            style={{
                                fontSize: '4%',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '95%',
                                marginLeft: '14%'
                            }}
                        >
                            FASTEN YOUR SEATBELTS,
                        </span>
                        <span
                            style={{
                                fontSize: '6%',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '20%',
                                marginLeft: '14%'
                            }}
                        >
                            BANGALORE & GOA
                        </span>
                        <span
                            style={{
                                fontSize: '7.8%',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '12%',
                                marginLeft: '14%'
                            }}
                        >
                            ARE ABOUT TO
                        </span>
                        <span
                            style={{
                                fontSize: '9.3%',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '10%',
                                marginLeft: '14%'
                            }}
                        >
                            GET WILD!
                        </span>
                        <img
                            src={FOMOLogo}
                            alt={"Section 1 Mask"}
                            style={fomoLogoStyle2}
                        />
                        <span
                            style={{
                                fontSize: '2.7%',
                                color: 'white',
                                fontFamily: 'Germany Sans',
                                fontWeight: 'normal',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '90%',
                                marginLeft: '14%'
                            }}
                        >
                            REDEFINING NIGHTLIFE EXPERIENCES
                        </span>
                        <span
                            style={{
                                fontSize: '2.5%',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '18%',
                                marginLeft: '14%'
                            }}
                        >
                            Follow us on Instagram
                        </span>
                        <span
                            style={{
                                fontSize: '2.5%',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginLeft: '14%'
                            }}
                        >
                            @thefomo.co
                        </span>
                        <span
                            style={{
                                fontSize: '2.5%',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '10%',
                                marginLeft: '14%'
                            }}
                        >
                            Contact us at
                        </span>
                        <span
                            style={{
                                fontSize: '2.5%',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginLeft: '14%'
                            }}
                        >
                            +91 99455 94437
                        </span>
                        <div
                            style={{
                                backgroundColor: "white",
                                border: '0.5px black solid',
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: '2.3%',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                padding: '2% 1% 2% 1%',
                                marginTop: '5%',
                                width: '16%',
                                marginLeft: '43%',
                                marginRight: '37%',
                                borderRadius: '5%',
                                boxShadow: '0px 3px 15px #00000099'
                            }}
                        >
                            <span>
                                Join the Party
                            </span>
                        </div>
                    </div>