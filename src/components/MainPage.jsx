import React from 'react';
import {motion} from 'framer-motion'

import FourHandsImage from '../assets/P0.webp';
import FOMOLogo from '../assets/P2.webp';
import mask1Image from '../assets/P3.webp';
import mask2Image from '../assets/P4.webp';
import mask3Image from '../assets/P5.webp';
import cheersImage from '../assets/P6.webp';
import mask4Image from '../assets/P7.webp';
import backgroundImage from '../assets/BG_1MB.webp';

const parentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
};


const mainImageStyle = {
    transform: 'scale(1)',
};

const contentStyle = {
    position: 'absolute',
    display: 'flex',
    top: '0%',
    left: '0%',
    right: '0%',
    bottom: '0%',
    flexDirection: 'column'
};

const fomoLogoStyle = {
    position: 'absolute',
    width: '40vw',
    marginLeft: '0%',
    marginTop: '3%',
};

const fourhandsStyle = {
    position: 'absolute',
    width: '58vw',
    marginTop: '-2.5%',
    marginLeft: '25%',
    marginRight: '25%',   
}

const mask1ImageStyle = {
    position: 'absolute',
    width: '100%',
    marginTop: '74%',
}

const mask2ImageStyle = {
    position: 'absolute',
    width: '90%',
    marginLeft: '-10%',
    marginTop: '158%'
}

const mask3ImageStyle = {
    position: 'absolute',
    width: '100%',
    marginTop: '235%'
}

const cheersImageStyle = {
    position: 'absolute',
    width: '50%',
    marginTop: '291.5%',
    marginRight: '-37%'
}

const mask4ImageStyle = {
    position: 'absolute',
    width: '100%',
    top: '0%',
    marginTop: '354%',
}

const fomoLogoStyle2 = {
    position: 'absolute',
    width: '35%',
    marginTop: '465%'
};

function Section({ image, aspectRatio, style, children }) {
    const sectionStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        borderColor: 'black',
        borderWidth: '2px',
        backgroundRepeat: 'no-repeat',
        width: '100%',
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
        <motion.div style={parentStyle}>
            <LandingInfoAreaComponent/>
        </motion.div>
    );
}

function LandingInfoAreaComponent() {

    return (
            <Section
                image={backgroundImage}
                aspectRatio={0.1779}
                style={{
                    zIndex: 2,
                    ...mainImageStyle
                }}
            >
                <div style={contentStyle}>
                    <div style={{
                        top: '0%',
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        left: '0%',
                        right: '0%',
                    }}>
                        <img
                            src={FOMOLogo}
                            alt={"FOMO Logo"}
                            style={fomoLogoStyle}
                        />
                        <img
                            src={FourHandsImage}
                            alt={"4 hands doing cheers"}
                            style={fourhandsStyle}
                        />
                        <span style={{
                            fontSize: '5.8vw', 
                            color: 'white', 
                            fontFamily: 'Nulshock', 
                            fontWeight: 'bold', 
                            textAlign: 'center',
                            justifyContent: 'center',
                            marginLeft: '10%',
                            marginRight: '10%',
                            marginTop: '46%', 
                        }}>
                            FOMO COMES ALIVE!
                        </span>
                        <span
                            style={{
                                fontSize: '2.4vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                marginTop: '9%',
                                marginLeft: '-60%'
                            }}
                        >
                            {"FOMO's your"}

                        </span>
                        <span 
                            style={{
                                fontSize: '7.8vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                marginLeft: '-13%',
                                marginTop: '0%',
                        }}>
                            NOCTURNAL <br/>  NAVIGATOR
                        </span>
                        <span
                            style={{
                                fontSize: '2.7vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginLeft: '-10%'
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
                                fontSize: '2.7vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'right',
                                paddingRight: '8%',
                                marginTop: '60%',
                                marginRight: '-40%'
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
                                fontSize: '2.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                marginTop: '55%',
                                marginLeft: '-35%'
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
                                fontSize: '6vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                marginTop: '39%',
                                marginLeft: '-37%'
                            }}
                        >
                            AT FOMO,
                        </span>
                        <span
                            style={{
                                fontSize: '6vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                marginTop: '1%',
                                marginLeft: '-12%'
                            }}
                        >
                            WE'VE BOTTLED <br/> THAT FEAR AND
                        </span>
                        <span
                            style={{
                                fontSize: '2.8vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                marginLeft: '-44%'
                            }}
                        >
                            turned it into a way of life.
                        </span>
                        <img
                            src={cheersImage}
                            alt={"Cheers hands"}
                            style={cheersImageStyle}
                        />
                        <span
                            style={{
                                fontSize: '7.7vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginTop: '40%',
                                marginLeft: '-22%'
                            }}
                        >
                            BECAUSE
                        </span>
                        <span
                            style={{
                                fontSize: '2.9vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginLeft: '-13%'
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
                                fontSize: '4vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '50%',
                                marginLeft: '14%'
                            }}
                        >
                            FASTEN YOUR SEATBELTS,
                        </span>
                        <span
                            style={{
                                fontSize: '6vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '8%',
                                marginLeft: '14%'
                            }}
                        >
                            BANGALORE & GOA
                        </span>
                        <span
                            style={{
                                fontSize: '7.8vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '5%',
                                marginLeft: '14%'
                            }}
                        >
                            ARE ABOUT TO
                        </span>
                        <span
                            style={{
                                fontSize: '9.3vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '6%',
                                marginLeft: '9%'
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
                                fontSize: '3vw',
                                color: 'white',
                                fontFamily: 'Germany Sans',
                                fontWeight: 'normal',
                                textAlign: 'center',
                                marginTop: '45%',
                                marginLeft: '1%'
                            }}
                        >
                            REDEFINING NIGHTLIFE EXPERIENCES
                        </span>
                        <span
                            style={{
                                fontSize: '2.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'center',
                                marginTop: '7%',
                                marginLeft: '1%'
                            }}
                        >
                            Follow us on Instagram
                        </span>
                        <span
                            style={{
                                fontSize: '2.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginLeft: '1%'
                            }}
                        >
                            @thefomo.co
                        </span>
                        <span
                            style={{
                                fontSize: '2.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'center',
                                marginTop: '10%',
                                marginLeft: '1%'
                            }}
                        >
                            Contact us at
                        </span>
                        <span
                            style={{
                                fontSize: '2.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginLeft: '1%'
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
                                fontSize: '2.3vw',
                                fontFamily: 'Roboto',
                                fontWeight: 'medium',
                                padding: '2% 1% 2% 1%',
                                marginTop: '5%',
                                width: '16%',
                                borderRadius: '50px',
                                boxShadow: '0px 3px 15px #00000099'
                            }}
                        >
                            <span>
                                Join the Party
                            </span>
                        </div>
                    </div>
                        </div>
            </Section>
    )
}

export default MainPage;