import React from 'react';
import { motion} from 'framer-motion';

import FourHandsImage from '../assets/P0.webp';
import FOMOLogo from '../assets/P2.webp';
import mask1Image from '../assets/P3.webp';
import mask2Image from '../assets/P4.webp';
import mask3Image from '../assets/P5.webp';
import cheersImage from '../assets/P6.webp';
import mask4Image from '../assets/P7.webp';
import backgroundImage from '../assets/BG_95KB.webp';

const parentStyle = {
    width: '100vw',
    zIndex: '2'
};


const mainImageStyle = {
    width: '100vw',
    height: '1100vh',
};

const contentStyle1 = {
    position: 'absolute',
    flexDirection: 'column'
};

const fomoLogoStyle = {
    position: 'absolute',
    height: '40vw',
    width: '40vw',
    top: '5vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30vw',
    marginRight: '30vw'
};

const fourhandsStyle = {
    position: 'absolute',
    height: '50vw',
    width: '50vw',
    top: '-2vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '25vw',
    marginRight: '25vw'
}

const mask1ImageStyle = {
    position: 'absolute',
    height: '132vh',
    width: '100vw',
    top: '145vh',
}

const mask2ImageStyle = {
    position: 'absolute',
    height: '138vh',
    width: '93vw',
    top: '307vh',
}

const mask3ImageStyle = {
    position: 'absolute',
    height: '90vh',
    width: '100vw',
    top: '455vh',
}

const cheersImageStyle = {
    position: 'absolute',
    height: '112vh',
    width: '50vw',
    top: '570vh',
    right: '3vw'
}

const mask4ImageStyle = {
    position: 'absolute',
    height: '85vh',
    width: '98vw',
    top: '690vh',
}

const fomoLogoStyle2 = {
    position: 'absolute',
    height: '35vw',
    width: '35vw',
    top: '910vh',
    marginLeft: '32.5vw',
    marginRight: '32.5vw'
};

function Section({ image, style, children }) {
    const sectionStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',  // Adjust this
        backgroundPosition: 'center',  // Ensure image is centered
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
        width: '100vw',
        ...style
    };

    return (
        <div style={sectionStyle}>
            {children}
        </div>
    );
}



function MainPage2() {

    return (
        <motion.div style={parentStyle}>
            <LandingInfoAreaComponent/>
        </motion.div>
    );
}

function LandingInfoAreaComponent() {

    return (
        <div>
            <Section
                image={backgroundImage}
                style={mainImageStyle}
            >
                <div 
                    style={contentStyle1}
                >
                    <div style={{
                        marginTop: '75vh',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <img
                            src={FOMOLogo}
                            alt={"Section 1 Mask"}
                            style={fomoLogoStyle}
                        />
                        <img
                            src={FourHandsImage}
                            alt={"Section 1 Mask"}
                            style={fourhandsStyle}
                        />
                        <span style={{
                            fontSize: '5.5vw', 
                            color: 'white', 
                            fontFamily: 'Nulshock', 
                            fontWeight: 'bold', 
                            textAlign: 'center',
                            justifyContent: 'center',
                            marginLeft: '13vw',
                            marginRight: '13vw',
                            marginTop: '15vh', 
                        }}>
                            FOMO COMES ALIVE
                        </span>
                        
                        <span
                            style={{
                                fontSize: '2.4vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                marginTop: '18vh',
                                marginLeft: '13vw'
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
                                marginLeft: '13vw',
                                marginTop: '1vh'
                        }}>
                            NOCTURNAL <br/>  NAVIGATOR
                        </span>
                        <span
                            style={{
                                fontSize: '2.75vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginLeft: '13vw',
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
                                fontSize: '2.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'right',
                                paddingRight: '8%',
                                marginTop: '115vh',
                                marginRight: '5vw'
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
                                paddingRight: '8%',
                                marginTop: '110vh',
                                marginLeft: '13vw'
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
                                paddingRight: '8%',
                                marginTop: '80vh',
                                marginLeft: '13vw'
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
                                paddingRight: '8%',
                                marginTop: '2vh',
                                marginLeft: '13vw'
                            }}
                        >
                            WE'VE BOTTLED <br/> THAT FEAR AND
                        </span>
                        <span
                            style={{
                                fontSize: '2.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginLeft: '14vw'
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
                                fontSize: '7.8vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginTop: '80vh',
                                marginLeft: '14vw'
                            }}
                        >
                            BECAUSE
                        </span>
                        <span
                            style={{
                                fontSize: '2.8vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginTop: '-2vh',
                                marginLeft: '14vw'
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
                                marginTop: '95vh',
                                marginLeft: '14vw'
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
                                marginTop: '20vh',
                                marginLeft: '14vw'
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
                                marginTop: '12vh',
                                marginLeft: '14vw'
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
                                marginTop: '10vh',
                                marginLeft: '14vw'
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
                                fontSize: '2.7vw',
                                color: 'white',
                                fontFamily: 'Germany Sans',
                                fontWeight: 'normal',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '90vh',
                                marginLeft: '14vw'
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
                                paddingRight: '8%',
                                marginTop: '18vh',
                                marginLeft: '14vw'
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
                                paddingRight: '8%',
                                marginLeft: '14vw'
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
                                paddingRight: '8%',
                                marginTop: '10vh',
                                marginLeft: '14vw'
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
                                paddingRight: '8%',
                                marginLeft: '14vw'
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
                                fontWeight: 'normal',
                                padding: '2vw 1vw 2vw 1vw',
                                marginTop: '5vh',
                                width: '16vw',
                                marginLeft: '43vw',
                                marginRight: '37vw',
                                borderRadius: '5vw',
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
        </div>
    )
}

export default MainPage2;