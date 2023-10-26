import React, { useRef } from 'react';
import {motion, useInView} from 'framer-motion'

import FourHandsImage from '../assets/P0.webp';
import FOMOLogo from '../assets/P2.webp';

import mask1Image from '../assets/P3.webp';
import mask2Image from '../assets/P4.webp';
import mask3Image from '../assets/P5.webp';
import cheersImage from '../assets/P6.webp';
import sunsetLogo from '../assets/P1.webp';
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
    width: '39.5vw',
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
    marginTop: '20%',
}

const mask2ImageStyle = {
    position: 'absolute',
    width: '90%',
    marginLeft: '-10%',
    marginTop: '104%'
}

const mask3ImageStyle = {
    position: 'absolute',
    width: '100%',
    marginTop: '179.5%'
}

const cheersImageStyle = {
    position: 'absolute',
    width: '50%',
    marginTop: '238%',
    marginRight: '-39%'
}

const mask4ImageStyle = {
    position: 'absolute',
    width: '99%',
    top: '0%',
    marginLeft: '-1%',
    marginTop: '301%',
}

const fomoLogoStyle2 = {
    position: 'absolute',
    width: '35%',
    marginTop: '411%'
};

const sunsetLogoStyle = {
    position: 'absolute',
    width: '30vw',
    marginLeft: '0%',
    marginTop: '20%',
}

function Section({ image, aspectRatio, style, children }) {
    const sectionStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        borderColor: 'black',
        borderWidth: '2px',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        paddingTop: `${100 / aspectRatio}%`,
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

    const sunsetViewRef = useRef();
    const isSunsetInView = useInView(sunsetViewRef, { 
        amount : 0
    });

    // Last section animation variant
    const stampVariants = {
        hidden: { scale: 0.8, opacity: 0, y: '10vh' },
        stamp: {
            y: '0',
            scale: [0.8, 1.5, 1],
            opacity: [0, 0.9, 1],
            transition: {
                duration: 0.5,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 0.1
            },
        },
    };

    const cheersImageVariants = {
        hidden: { 
            x: '60%',
            y: '40%',
            rotate: 0,
            opacity: 0,
        },
        visible: {
            x : '0',
            y: '0',
            opacity: 1,
            rotate: [-20, 20, -5, 5, 0],
            transition: {
                x: { type: "spring", stiffness: 50, damping: 10 },
                y: { type: "spring", stiffness: 50, damping: 10 },
                rotate: { times: [0, 0.6, 0.8, 1], duration: 1.5 },
            }
        }
    };

    const rightAlignedParagraph = [
        "We're diving deep into the vibrant",
        "heartbeats of Bangalore and",
        "the sun-soaked shores of Goa",
        "plotting a party revolution you",
        "won't want to miss."    
    ]

    const leftAlignedParagraph = [
        "Get ready for action-packed parties,",
        "electric pubs, and clubs that buzz", 
        "louder than your morning alarm.", 
        "Curated by true party enthusiasts and", 
        "we've got your back!"
    ]
    
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
                    <div 
                        style={{
                        top: '0%',
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        left: '0%',
                        right: '0%',
                    }}>    
                        <span style={{
                            fontSize: '3.5vw', 
                            color: 'white', 
                            fontFamily: 'Nulshock', 
                            fontWeight: 'bold', 
                            textAlign: 'center',
                            justifyContent: 'center',
                            marginLeft: '11%',
                            marginRight: '10%',
                            marginTop: '4%', 
                            transform: isSunsetInView ? 'transformY(50%)' : 'none',
                            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
                            opacity: isSunsetInView ? 0 : 1
                        }}>
                            AS THE SUN <br/> GOES DOWN
                        </span>
                        <img
                            
                            src={sunsetLogo}
                            alt={"Sunset Logo"}
                            style={{
                                transform: isSunsetInView ? "translateY(15%)" : "none",
                                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
                                opacity: isSunsetInView ? 0: 1,
                                ...sunsetLogoStyle
                        }}
                        />
                        <img
                            src={FOMOLogo}
                            alt={"FOMO Logo"}
                            style={{
                                transform: isSunsetInView ? "none" : "translateY(15%)",
                                transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.45s",
                                opacity: isSunsetInView ? 1 : 0,
                                ...fomoLogoStyle}}
                        />
                        <img
                            src={FourHandsImage}
                            alt={"4 hands doing cheers"}
                            style={{
                                transform: isSunsetInView ? "rotate(180deg)" : "translateY(25%)",
                                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
                                ...fourhandsStyle}}
                        />
                        <span 
                        ref={sunsetViewRef}
                        style={{
                            fontSize: '5.8vw', 
                            color: 'white', 
                            fontFamily: 'Nulshock', 
                            fontWeight: 'bold', 
                            textAlign: 'center',
                            justifyContent: 'center',
                            marginLeft: '10%',
                            marginRight: '10%',
                            marginTop: '33.5%', 
                            transform: isSunsetInView ? "none" : "translateY(5vh)",
                            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
                            opacity: isSunsetInView ? 1: 0,
                        }}>
                            FOMO COMES ALIVE!
                        </span>
                    </div>
                    <div style={{
                        top: '0%',
                        marginTop: '54%',
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        left: '0%',
                        right: '0%'}} 
                    >
                        <motion.span
                            style={{
                                fontSize: '2.6vw',
                                color: 'white',
                                fontFamily: 'Roboto Medium',
                                fontWeight: 'medium',
                                textAlign: 'left',
                                marginTop: '8%',
                                marginLeft: '-59.5%',
                            }}
                            initial={{ opacity: 0, y: '20vh'}}
                            whileInView={{ opacity: 1, y: '0'}}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                        >
                            {"FOMO's your"}

                        </motion.span>
                        <motion.span 
                            style={{
                                fontSize: '7.8vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                marginLeft: '-13.5%',
                                marginTop: '0%',
                            }}
                            initial={{ opacity: 0, y: '20vh'}}
                            whileInView={{ opacity: 1, y: '0'}}
                            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.25 }}
                        >
                            NOCTURNAL <br/>  NAVIGATOR
                        </motion.span>
                        <motion.span
                            style={{
                                fontSize: '2.5vw',
                                color: 'white',
                                fontFamily: 'Roboto Medium',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginTop: '-0.5%',
                                marginLeft: '-11%'
                            }}
                            initial={{ opacity: 0, y: '20vh'}}
                            whileInView={{ opacity: 1, y: '0'}}
                            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
                        >
                            ready to take you on wild rides through the cities <br/> that never sleep!
                        </motion.span>
                        <img
                            src={mask1Image}
                            alt={"Mask 1"}
                            style={mask1ImageStyle}
                        />
                        <div
                            style={{
                                fontSize: '2.6vw',
                                color: 'white',
                                fontFamily: 'Roboto Medium',
                                fontWeight: 'normal',
                                textAlign: 'right',
                                paddingRight: '8%',
                                marginTop: '60%',
                                marginRight: '-44%'
                            }}
                        >
                            {rightAlignedParagraph.map((line, index) => (
                                <motion.span 
                                    style={{
                                        textAlign: 'right',
                                        display: 'block'
                                    }}
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 100, 
                                        damping: 10, 
                                        delay: index * 0.2 // increasing delay for each line
                                    }}
                                >
                                    {line}
                                </motion.span>
                            ))}
                        </div>
                        <img
                            src={mask2Image}
                            alt={"Mask 2"}
                            style={mask2ImageStyle}
                        />
                        <div
                            style={{
                                fontSize: '2.6vw',
                                color: 'white',
                                fontFamily: 'Roboto Medium',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                marginTop: '54%',
                                marginLeft: '-31%'
                            }}
                        >
                            {leftAlignedParagraph.map((line, index) => (
                                <motion.span 
                                    style={{
                                        textAlign: 'left',
                                        display: 'block'
                                    }}
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 100, 
                                        damping: 10, 
                                        delay: index * 0.2 // increasing delay for each line
                                    }}
                                >
                                    {line}
                                </motion.span>
                            ))}
                        </div>
                        <img
                            src={mask3Image}
                            alt={"Mask 3"}
                            style={mask3ImageStyle}
                        />
                        <motion.span
                            style={{
                                fontSize: '6vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                marginTop: '39%',
                                marginLeft: '-37%'
                            }}
                            initial={{ opacity: 0, y: '20vh'}}
                            whileInView={{ opacity: 1, y: '0'}}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                        >
                            AT FOMO,
                        </motion.span>
                        <motion.span
                            style={{
                                fontSize: '6.2vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                marginTop: '1%',
                                marginLeft: '-11%'
                            }}
                            initial={{ opacity: 0, y: '20vh'}}
                            whileInView={{ opacity: 1, y: '0'}}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.25 }}
                        >
                            WE'VE BOTTLED <br/> THAT FEAR AND
                        </motion.span>
                        <motion.span
                            style={{
                                fontSize: '2.6vw',
                                color: 'white',
                                fontFamily: 'Roboto Medium',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                marginLeft: '-43%'
                            }}
                            initial={{ opacity: 0, y: '20vh'}}
                            whileInView={{ opacity: 1, y: '0'}}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.25 }}
                        >
                            turned it into a way of life.
                        </motion.span>
                        <motion.img
                            src={cheersImage}
                            alt={"Cheers hands"}
                            style={cheersImageStyle}
                            initial="hidden"
                            whileInView="visible"
                            variants={cheersImageVariants}
                        />
                        <motion.span
                            style={{
                                fontSize: '7.6vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginTop: '39%',
                                marginLeft: '-21%'
                            }}
                            initial="hidden"
                            whileInView="stamp"
                            variants={stampVariants}
                        >
                            BECAUSE
                        </motion.span>
                        <motion.span
                            style={{
                                fontSize: '2.55vw',
                                color: 'white',
                                fontFamily: 'Roboto Medium',
                                fontWeight: 'normal',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginLeft: '-13%',
                                marginTop: '-1%'
                            }}
                            initial="hidden"
                            whileInView="stamp"
                            variants={stampVariants}
                        >
                            the fear of missing out is the thing of the past!
                        </motion.span>
                        <img
                            src={mask4Image}
                            alt={"Mask 4"}
                            style={mask4ImageStyle}
                        />
                        <motion.span
                            style={{
                                fontFamily: 'Nulshock',
                                fontSize: '4vw',
                                color: 'white',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '50%',
                                marginLeft: '14%',
                            }}
                            initial="hidden"
                            whileInView="stamp"
                            variants={stampVariants}
                        >
                            FASTEN YOUR SEATBELTS,
                        </motion.span>
                        <motion.span
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
                            initial="hidden"
                            whileInView="stamp"
                            variants={stampVariants}
                            transition={{ delay: 2 }}
                        >
                            BANGALORE & GOA
                        </motion.span>
                        <motion.span
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
                            initial="hidden"
                            whileInView="stamp"
                            variants={stampVariants}
                            transition={{ delay: 3 }}
                        >
                            ARE ABOUT TO
                        </motion.span>
                        <motion.span
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
                            initial="hidden"
                            whileInView="stamp"
                            variants={stampVariants}
                            transition={{ delay: 4 }}
                        >
                            GET WILD!
                        </motion.span>
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
                                marginTop: '47%',
                                marginLeft: '1%'
                            }}
                        >
                            REDEFINING NIGHTLIFE EXPERIENCES
                        </span>
                        <span
                            style={{
                                fontSize: '2.5vw',
                                color: 'white',
                                fontFamily: 'Roboto Medium',
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
                                fontFamily: 'Roboto Medium',
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
                                fontFamily: 'Roboto Medium',
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
                                fontFamily: 'Roboto Medium',
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
                                fontFamily: 'Roboto Medium',
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