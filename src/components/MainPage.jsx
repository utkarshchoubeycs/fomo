import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion'

import FourHandsImage from '../assets/P0.webp';
import FOMOLogo from '../assets/P2.webp';

import mask1Image from '../assets/P3.webp';
import mask2Image from '../assets/P4.webp';
import mask3Image from '../assets/P5.webp';
import cheersImage from '../assets/P6.webp';
import sunsetLogo from '../assets/P1.webp';
import mask4Image from '../assets/P7.webp';
import backgroundImage from '../assets/BG.webp';
import backgroundImageMobile from '../assets/BG_Mobile.jpg';

import discoverTileImage from '../assets/Coming Soon/Group 77.webp';
import partyPackageTileImage from '../assets/Coming Soon/Group 78.webp';
import fomoTipsTileImage from '../assets/Coming Soon/Group 79.webp';
import contentTileImage from '../assets/Coming Soon/Group 80.webp';
import dealsTileImage from '../assets/Coming Soon/Group 81.webp';
import loyaltyTileImage from '../assets/Coming Soon/Group 82.webp';

import discoverTileMobileImage from '../assets/Coming Soon/Group 88.webp';
import partyPackageTileMobileImage from '../assets/Coming Soon/Group 87.webp';
import fomoTipsTileMobileImage from '../assets/Coming Soon/Group 86.webp';
import contentTileMobileImage from '../assets/Coming Soon/Group 85.webp';
import dealsTileMobileImage from '../assets/Coming Soon/Group 84.webp';
import loyaltyTileMobileImage from '../assets/Coming Soon/Group 83.webp';

import whatsappxs from '../assets/whatsappSmall.png';
import instaxs from '../assets/instaSmall.png';

import FormComponent from './FormComponent';

const parentStyle = {
    display: 'grid',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
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

function Section({ image, aspectRatio, style, children }) {
    const sectionStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        borderColor: 'black',
        borderWidth: '2px',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        alignItems: 'center',
        paddingTop: `${100 / aspectRatio}%`,
        zIndex: 5,
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
    const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768);
    const [isFomoVisible, setIsFomoVisible] = useState(false);
    const [isUserInterestFormEnabled, setIsUserInterestFormEnabled] = useState(false);

    const handleFormOpenClick = () => {
        setIsUserInterestFormEnabled(true);
    }

    const { scrollYProgress } = useScroll({
        target: sunsetViewRef,
        offset: ["start end", "end end"]
    });

    useEffect(() => {
        const unsubScrollYProgress = scrollYProgress.on("change", value => {
            
            const threshold = isMobileScreen ? 0.65 : 0.9;

            if(value <= threshold) setIsFomoVisible(false);
            else setIsFomoVisible(true);
        })

        if(window.innerWidth < 768) setIsMobileScreen(true);
        else setIsMobileScreen(false);

        return () => unsubScrollYProgress();
    }, [scrollYProgress, isMobileScreen]);

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
            rotate: [-30, 30, -10, 10, 0],
            transition: {
                x: { type: "spring", stiffness: 50, damping: 8 },
                y: { type: "spring", stiffness: 50, damping: 8 },
                rotate: { times: [0, 0.6, 0.8, 1], duration: 1.5 },
            }
        }
    };

    const maskImageVariantsRight = {
        hidden: {
            x: '10%'
        },
        visible: {
            x: '0',
            transition: {
                x: {
                    type: 'spring',
                    stiffness: 300, // Adjust stiffness for the speed of the shake
                    damping: 10 // Adjust damping for the amount of "bounce"
                }
            }
        }
    };

    const maskImageVariantsLeft = {
        hidden: {
            x: '-10%'
        },
        visible: {
            x: '0',
            transition: {
                x: {
                    type: 'spring',
                    stiffness: 300, // Adjust stiffness for the speed of the shake
                    damping: 10 // Adjust damping for the amount of "bounce"
                }
            }
        }
    };

    const fomoLogoStyle = {
        position: 'absolute',
        width: isMobileScreen ? '70vw' : '45vw',
        marginTop: isMobileScreen ? '75%' : '0%'
    };

    const mask1ImageStyle = {
        position: 'absolute',
        width: '100%',
        height: isMobileScreen ? '' : '10%',
        marginTop: isMobileScreen ? '50%' : '30%'
    }
    
    const mask2ImageStyle = {
        position: 'absolute',
        width: '95%',
        height: isMobileScreen ? '' : '8%',
        marginLeft: '-5%',
        marginTop: isMobileScreen? '177%' : '115%'
    }
    
    const mask3ImageStyle = {
        position: 'absolute',
        width: '98%',
        marginRight: '-2%',
        height: isMobileScreen ? '' : '6%',
        marginTop: isMobileScreen ? '300%' : '197%'
    }
    
    const cheersImageStyle = {
        position: 'absolute',
        width: isMobileScreen ? '70vw' : '40vw',
        marginTop: isMobileScreen? '395%' : '259%',
        marginRight: isMobileScreen ? '-10%' : '-32%'
    }
    
    const mask4ImageStyle = {
        position: 'absolute',
        width: isMobileScreen ? '80%' : '99%',
        top: '0%',
        height: isMobileScreen ? '' : '6%',
        marginLeft: isMobileScreen ? '-20%' : '-1%',
        marginTop: isMobileScreen ? '520%' : '320%',
    }

    const rightAlignedParagraph =  isMobileScreen ? [
        "We're diving deep into the",
        "vibrant heartbeats of",
        "Bangalore and the sun-soaked",
        "shores of Goa. We are bringing",
        " you the insider scoops",
        "on the happening parties in town."
    ] :
    [
        "We're diving deep into the vibrant",
        "heartbeats of Bangalore and",
        "the sun-soaked shores of Goa.",
        "We are bringing you the insider scoops",
        "on the happening parties in town."
    ];

    const leftAlignedParagraph = isMobileScreen ? 
    [
        "Get ready for action-packed",
        "parties, electric pubs and",
        "clubs that buzz louder than",
        "your morning alarm. Curated",
        "by true party enthusiasts.",
        "We've got your back!"
    ] :
    [
        "Get ready for action-packed parties,",
        "electric pubs, and clubs that buzz",
        "louder than your morning alarm.",
        "Curated by true party enthusiasts.",
        "We've got your back!"
    ]

    const fomoLogoStyle2 = {
        position: 'relative',
        width: isMobileScreen ? '60%' : '50%',
        marginTop: isMobileScreen ? '20%' : '5%'
    };

    const sunsetLogoStyle = {
        position: 'absolute',
        width: isMobileScreen ? '60vw' : '41vw',
        marginLeft: '0%',
        marginTop: isMobileScreen ? '70%' : '10%',
    }

    const fourhandsStyle = {
        position: 'absolute',
        width: isMobileScreen ? '95vw' : '58vw',
        marginTop: isMobileScreen ? '57.5%' : '1%',
    }
    
    return (
            <Section
                image={isMobileScreen ? backgroundImageMobile : backgroundImage}
                aspectRatio={isMobileScreen ? 0.057 : 0.14}
                style={{
                    ...mainImageStyle
                }}
            > 
                <div style={{ filter: isUserInterestFormEnabled ? 'blur(12px)' : '', ...contentStyle}}>
                    <div 
                        ref={sunsetViewRef}
                        style={{
                        top: '0%',
                        position: 'relative',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        left: '0%',
                        right: '0%',
                    }}>    
                        <span style={{
                            fontSize: isMobileScreen ? '8vw' : '4vw', 
                            color: 'white', 
                            paddingLeft: isMobileScreen ? '15%' : '0%',
                            paddingRight: isMobileScreen ? '15%' : '0%',
                            fontFamily: 'Nulshock', 
                            fontWeight: 'bold', 
                            textAlign: 'center',
                            justifyContent: 'center',
                            marginTop: isMobileScreen ? '40%' : '2%', 
                            transform: isFomoVisible ? 'transformY(50%)' : 'none',
                            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
                            opacity: isFomoVisible ? 0 : 1
                        }}>
                            AS THE SUN GOES DOWN
                        </span>
                        <img
                            src={sunsetLogo}
                            alt={"Sunset Logo"}
                            style={{
                                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                                opacity: isFomoVisible ? 0 : 1,
                                ...sunsetLogoStyle
                            }}
                        />
                        <img
                            src={FOMOLogo}
                            alt={"FOMO Logo"}
                            style={{
                                transform: isFomoVisible ? "none" : "translateY(20%)",
                                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.45s",
                                opacity: isFomoVisible ? 1 : 0,
                                ...fomoLogoStyle}}
                        />
                        <img
                            src={FourHandsImage}
                            alt={"4 hands doing cheers"}
                            style={{
                                transform: isFomoVisible ? "rotate(180deg)" : "none",
                                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
                                opacity: isFomoVisible ? 0 : 1,
                                ...fourhandsStyle
                            }}
                            exit={{ opacity: '0'}}
                        />
                        <span 
                            style={{
                                fontSize: isMobileScreen ? '8vw' : '4vw', 
                                color: 'white', 
                                fontFamily: 'Nulshock', 
                                fontWeight: 'bold', 
                                textAlign: 'center',
                                justifyContent: 'center',
                                marginLeft: '10%',
                                marginRight: '10%',
                                marginTop: isMobileScreen ? '80%' : '35%', 
                                transform: isFomoVisible ? "none" : "translateY(5vh)",
                                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
                                opacity: isFomoVisible ? 1: 0,
                            }}
                        >
                            COMES ALIVE!
                        </span>
                    </div>
                    <div style={{
                        top: '0%',
                        marginTop: isMobileScreen ? '235%' : '45%',
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        left: '0%',
                        right: '0%'
                    }} 
                    >   
                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'left',
                            marginLeft: isMobileScreen ? '12%' : '10%'
                        }}>
                            <motion.span
                                style={{
                                    fontSize: isMobileScreen ? '6vw' : '3.5vw',
                                    color: 'white',
                                    fontFamily: 'Roboto',
                                    fontWeight: '500',
                                    marginTop: isMobileScreen ? '11%' : '7%'
                                }}
                                initial={{ opacity: 0, y: '20vh'}}
                                whileInView={{ opacity: 1, y: '0'}}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                FOMO is your
                            </motion.span>
                            <motion.span 
                                style={{
                                    fontSize: '7.5vw',
                                    color: 'white',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold',
                                    marginTop: '-2.5%',
                                }}
                                initial={{ opacity: 0, y: '20vh'}}
                                whileInView={{ opacity: 1, y: '0'}}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.25 }}
                            >
                                NOCTURNAL
                            </motion.span>
                            <motion.span 
                                style={{
                                    fontSize: '7.5vw',
                                    color: 'white',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold',
                                    marginTop: isMobileScreen ? '-2%' : '-4%',
                                }}
                                initial={{ opacity: 0, y: '20vh'}}
                                whileInView={{ opacity: 1, y: '0'}}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.25 }}
                            >
                                NAVIGATOR
                            </motion.span>
                            <motion.span
                                style={{
                                    fontSize: isMobileScreen ? '6vw' : '3.5vw',
                                    color: 'white',
                                    fontFamily: 'Roboto',
                                    fontWeight: isMobileScreen ? '400' : '500',
                                    marginTop: isMobileScreen ? '-1%' : '-2.5%',
                                    lineHeight: isMobileScreen ? '120%' : '100%',
                                    paddingRight: isMobileScreen ? '20%' : '10%'
                                }}
                                initial={{ opacity: 0, y: '20vh'}}
                                whileInView={{ opacity: 1, y: '0'}}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
                            >
                                ready to take you on wild rides through the cities that never sleep!
                            </motion.span>
                        </div>
                        <motion.img
                            src={mask1Image}
                            alt={"Mask 1"}
                            style={mask1ImageStyle}
                            variants={maskImageVariantsRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        />
                        <div
                            style={{
                                position: 'relative',
                                fontSize: isMobileScreen ? '5.5vw' : '3.2vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: isMobileScreen ? '400' : '500',
                                paddingLeft: isMobileScreen ? '0%' : '0%',
                                paddingRight: isMobileScreen ? '10%' : '0%',
                                textAlign: 'right',
                                lineHeight: isMobileScreen ? '160%' : '',
                                marginTop: isMobileScreen ? '75%' : '67.5%',
                                marginRight: isMobileScreen ? '-5%' : '-30%'
                            }}
                        >
                            {rightAlignedParagraph.map((line, index) => (
                                <motion.span 
                                    style={{
                                        textAlign: 'right',
                                        display: 'block',
                                        marginTop: '-2.8%'
                                    }}
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
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
                        <motion.img
                            src={mask2Image}
                            alt={"Mask 2"}
                            style={mask2ImageStyle}
                            variants={maskImageVariantsLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        />
                        <div
                            style={{
                                fontSize: isMobileScreen ? '5.5vw' : '3.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: isMobileScreen ? '400' : '500',
                                textAlign: 'left',
                                marginTop: isMobileScreen ? '75%' : '52%',
                                marginLeft: isMobileScreen ? '0%' : '-16%',
                                lineHeight : isMobileScreen ? '160%' : '',
                            }}
                        >
                            {leftAlignedParagraph.map((line, index) => (
                                <motion.span 
                                    style={{
                                        textAlign: 'left',
                                        display: 'block',
                                        marginTop: '-2.7%'
                                    }}
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
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
                        <motion.img
                            src={mask3Image}
                            alt={"Mask 3"}
                            style={mask3ImageStyle}
                            variants={maskImageVariantsRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.7 }}
                        />
                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left',
                            marginTop: isMobileScreen ? '40%' : '20%',
                            marginLeft: isMobileScreen ? '0%' : '-10%'
                        }}>
                            <motion.span
                                style={{
                                    fontSize: isMobileScreen ? '7.5vw' : '6vw',
                                    color: 'white',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold',
                                    marginTop: '39%',
                                }}
                                initial={{ opacity: 0, y: '20vh'}}
                                whileInView={{ opacity: 1, y: '0'}}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                            >
                                AT FOMO,
                            </motion.span>
                            <motion.span
                                style={{
                                    fontSize: isMobileScreen ? '7.5vw' : '6vw',
                                    color: 'white',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold',
                                    marginTop: '-2%',
                                }}
                                initial={{ opacity: 0, y: '20vh'}}
                                whileInView={{ opacity: 1, y: '0'}}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
                            >
                                WE'VE BOTTLED
                            </motion.span>
                            <motion.span
                                style={{
                                    fontSize: isMobileScreen ? '7.5vw' : '6vw',
                                    color: 'white',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold',
                                    marginTop: '-2%',
                                }}
                                initial={{ opacity: 0, y: '20vh'}}
                                whileInView={{ opacity: 1, y: '0'}}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
                            >
                                THAT FEAR &
                            </motion.span>
                            <motion.span
                                style={{
                                    fontSize: isMobileScreen ? '6vw' : '3.5vw',
                                    color: 'white',
                                    fontFamily: 'Roboto',
                                    fontWeight: isMobileScreen ? '400' : '500',
                                    marginTop: '-2%',
                                    marginLeft : isMobileScreen ? '2%'  :''
                                }}
                                initial={{ opacity: 0, y: '20vh'}}
                                whileInView={{ opacity: 1, y: '0'}}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
                            >
                                turned it into a way of life.
                            </motion.span>
                        </div>
                        <motion.img
                            src={cheersImage}
                            alt={"Cheers hands"}
                            style={cheersImageStyle}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cheersImageVariants}
                        />
                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left',
                            marginLeft: isMobileScreen ? '-10%' : '-25%',
                            marginTop: isMobileScreen ? '55%' : '15%'
                        }}>
                            <motion.span
                                style={{
                                    fontSize: isMobileScreen ? '6vw' : '3.5vw',
                                    color: 'white',
                                    fontFamily: 'Roboto',
                                    fontWeight: isMobileScreen ? '400' : '500',
                                    marginTop: '35%'
                                }}
                                initial={{ opacity: 0, y: '20vh'}}
                                whileInView={{ opacity: 1, y: '0'}}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
                            >
                                because
                            </motion.span>
                            <motion.span
                                style={{
                                    fontSize: isMobileScreen ? '7.5vw' : '6vw',
                                    color: 'white',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold',
                                    marginTop: '-2%'
                                }}
                                initial={{ opacity: 0, y: '20vh'}}
                                whileInView={{ opacity: 1, y: '0'}}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
                            >
                                THE FEAR OF
                            </motion.span>
                            <motion.span
                                style={{
                                    fontSize: isMobileScreen ? '7.5vw' : '6vw',
                                    color: 'white',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold',
                                    marginTop: '-3%'
                                }}
                                initial={{ opacity: 0, y: '20vh'}}
                                whileInView={{ opacity: 1, y: '0'}}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
                            >
                                MISSING OUT
                            </motion.span>
                            <motion.span
                                style={{
                                    fontSize: isMobileScreen ? '6vw' : '3.5vw',
                                    color: 'white',
                                    fontFamily: 'Roboto',
                                    fontWeight: isMobileScreen ? '400' : '500',
                                    marginTop: '-2%'
                                }}
                                initial={{ opacity: 0, y: '20vh'}}
                                whileInView={{ opacity: 1, y: '0'}}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
                            >
                                is the thing of the past!
                            </motion.span>
                        </div>
                        <motion.img
                            src={mask4Image}
                            alt={"Mask 4"}
                            style={mask4ImageStyle}
                            variants={maskImageVariantsLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.7 }}
                        />
                        <motion.div
                            style={{
                                fontFamily: 'Nulshock',
                                fontSize: isMobileScreen ? '7vw' : '4vw',
                                color: 'white',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingRight: isMobileScreen ? '0%' : '8%',
                                marginTop: '55%',
                                marginBottom: '15%',
                                marginLeft: isMobileScreen ? '0%' : '12%',
                                lineHeight: isMobileScreen ? '105%' : ''
                            }}
                            initial="hidden"
                            whileInView="stamp"
                            viewport={{ once: true }}
                            variants={stampVariants}
                        >
                            FASTEN YOUR
                            {isMobileScreen ? <br/> : <span>&nbsp;</span>}
                            SEATBELTS,
                            <br/>
                            BANGALORE & GOA
                            <br/>
                            ARE ABOUT TO
                            {isMobileScreen ? <br/> : <span>&nbsp;</span>}
                            GET WILD!
                        </motion.div>
                        <span
                            style={{
                                fontSize: isMobileScreen ? '6vw' : '4vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'normal',
                                textAlign: 'center',
                                marginTop: isMobileScreen ? '20%' : '6%'
                            }}
                        >
                            COMING SOON
                        </span>
                        <motion.div 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginTop: isMobileScreen ? '10%' : '3%',
                            marginBottom: isMobileScreen ? '1.5%' : '0%',
                            color: '#FFF',
                            userSelect: 'none',
                            cursor: 'pointer'
                        }}

                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        initial={{ opacity: 0, y: '10vh' }}
                        whileInView={{ opacity: 1, y: '0' }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
                        >
                            <img 
                                src={isMobileScreen ? discoverTileMobileImage : discoverTileImage} 
                                alt="discover tile"
                                style={{
                                    width: isMobileScreen ? '100%' : '80%',
                                    justifyContent: 'center',
                                    marginLeft: isMobileScreen ? '0%' : '10%'
                                }}
                                />
                            <span
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    marginLeft: isMobileScreen ? '17%' : '17%',
                                    marginTop: isMobileScreen ? '27.5%' : '3%',
                                    fontSize:isMobileScreen ? '7vw' : '3.5vw',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold'
                                }}
                            >DISCOVER</span>
                            <p
                                style={{
                                    position: 'absolute',
                                    marginLeft: isMobileScreen ? '17%' : '17%',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    lineHeight: isMobileScreen ? '110%' : '120%',
                                    fontSize: isMobileScreen ? '5.5vw' : '2vw',
                                    paddingRight: isMobileScreen ? '10%' : '20%',
                                    textAlign: 'left',
                                    marginTop: isMobileScreen ? '10%' : '4.5%'
                                }}
                            >Explore the city's coolest bars and most exciting events that match your vibe!</p>
                        </motion.div>
                        <motion.div 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginTop: isMobileScreen ? '5%' : '3%',
                            marginBottom: isMobileScreen ? '1.5%' : '0%',
                            color: '#FFF',
                            userSelect: 'none',
                            cursor: 'pointer'
                        }}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        initial={{ opacity: 0, y: '10vh' }}
                        whileInView={{ opacity: 1, y: '0' }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
                        >
                            <img 
                                src={isMobileScreen ? partyPackageTileMobileImage : partyPackageTileImage} 
                                alt="party package"
                                style={{
                                    width: isMobileScreen ? '100%' : '80%',
                                    justifyContent: 'center',
                                    marginLeft: isMobileScreen ? '0%' : '10%'
                                    
                                }}/>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    marginLeft: isMobileScreen ? '13%' : '17%',
                                    marginTop: isMobileScreen ? '15%' : '1.5%',
                                    fontSize: isMobileScreen ? '7vw' : '3.5vw',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold',
                                    textAlign: 'left',
                                    lineHeight: isMobileScreen ? '100%' : ''
                                }}
                            >
                                PARTY
                                {isMobileScreen ? <br/> : <span>&nbsp;</span>}
                                PACKAGES
                            </span>
                            <p
                                style={{
                                    position: 'absolute',
                                    marginLeft: isMobileScreen ? '13%' : '17%',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    fontSize: isMobileScreen ? '5.5vw' : '2vw',
                                    lineHeight: isMobileScreen ? '110%' : '120%',
                                    paddingRight: isMobileScreen ? '10%' : '20%',
                                    textAlign: 'left',
                                    marginTop: isMobileScreen ? '20%' : '4%' 
                                }}
                            >
                                Perfect for large group bookings for private and corporate events.
                                We help you find and book the ideal party venue and the best party packages that suit your budget.
                            </p>
                        </motion.div>
                        <motion.div 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginTop: isMobileScreen ? '5%' : '3%',
                            marginBottom: isMobileScreen ? '1.5%' : '0%',
                            color: '#FFF',
                            userSelect: 'none',
                            cursor: 'pointer'
                        }}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        initial={{ opacity: 0, y: '10vh' }}
                        whileInView={{ opacity: 1, y: '0' }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
                        >
                            <img 
                                src={isMobileScreen ? fomoTipsTileMobileImage : fomoTipsTileImage} 
                                alt="fomo tips tile"
                                style={{
                                    width: isMobileScreen ? '100%' : '80%',
                                    justifyContent: 'center',
                                    marginLeft: isMobileScreen ? '0%' : '10%'
                                    
                                }}/>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    marginLeft: isMobileScreen ? '13%' : '17%',
                                    marginTop: isMobileScreen ? '22.5%' : '3%',
                                    fontSize: isMobileScreen ? '7vw' : '3.5vw',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold'
                                }}
                            >FOMO TIPS</span>
                            <p
                                style={{
                                    position: 'absolute',
                                    marginLeft: isMobileScreen ? '13%' : '17%',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    fontSize: isMobileScreen ? '5.5vw' : '2vw',
                                    paddingRight: isMobileScreen ? '15%' : '20%',
                                    lineHeight: isMobileScreen ? '110%' : '120%',
                                    textAlign: 'left',
                                    marginTop: isMobileScreen ? '10%' : '4.5%'
                                }}
                            >
                                Get FOMO-verified recommendations for the town's top parties, ensuring you never miss out again!
                            </p>
                        </motion.div>
                        <motion.div 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginTop: isMobileScreen ? '5%' : '3%',
                            marginBottom: isMobileScreen ? '1.5%' : '0%',
                            color: '#FFF',
                            userSelect: 'none',
                            cursor: 'pointer'
                        }}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        initial={{ opacity: 0, y: '10vh' }}
                        whileInView={{ opacity: 1, y: '0' }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
                        >
                            <img 
                                src={isMobileScreen ? contentTileMobileImage : contentTileImage} 
                                alt="content tile"
                                style={{
                                    width: isMobileScreen ? '100%' : '80%',
                                    justifyContent: 'center',
                                    marginLeft: isMobileScreen ? '0%' : '10%'
                                    
                                }}/>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    marginLeft: isMobileScreen ? '13%' : '17%',
                                    marginTop: isMobileScreen ? '25%' : '3%',
                                    fontSize: isMobileScreen ? '7vw' : '3.5vw',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold'
                                }}
                            >CONTENT</span>
                            <p
                                style={{
                                    position: 'absolute',
                                    marginLeft: isMobileScreen ? '13%' : '17%',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    fontSize: isMobileScreen ? '5.5vw' : '2vw',
                                    paddingRight: isMobileScreen ? '10%' : '20%',
                                    lineHeight: isMobileScreen ? '110%' : '120%',
                                    textAlign: 'left',
                                    marginTop: isMobileScreen ? '7.5%' : '4%'
                                }}
                            >
                                Engage with stories, watch, listen and comment on the influential figures in the nightlife industry.
                            </p>
                        </motion.div>
                        <motion.div 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginTop: isMobileScreen ? '5%' : '3%',
                            marginBottom: isMobileScreen ? '1.5%' : '0%',
                            color: '#FFF',
                            userSelect: 'none',
                            cursor: 'pointer'
                        }}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        initial={{ opacity: 0, y: '10vh' }}
                        whileInView={{ opacity: 1, y: '0' }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
                        >
                            <img 
                                src={isMobileScreen ? dealsTileMobileImage : dealsTileImage} 
                                alt="deals tile"
                                style={{
                                    width: isMobileScreen ? '100%' : '80%',
                                    justifyContent: 'center',
                                    marginLeft: isMobileScreen ? '0%' : '10%'
                                    
                                }}/>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    marginLeft: isMobileScreen ? '13%' : '17%',
                                    marginTop: isMobileScreen ? '25%' : '3%',
                                    fontSize: isMobileScreen ? '7vw' : '3.5vw',
                                    paddingRight: '15%',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold'
                                }}
                            >DEALS</span>
                            <p
                                style={{
                                    position: 'absolute',
                                    marginLeft: isMobileScreen ? '13%' : '17%',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    fontSize: isMobileScreen ? '5.5vw' : '2vw',
                                    paddingRight: isMobileScreen ? '10%' : '20%',
                                    lineHeight: isMobileScreen ? '110%' : '120%',
                                    textAlign: 'left',
                                    marginTop: isMobileScreen ? '7.5%' : '4%'
                                }}
                            >
                                Unearth the most exclusive and unheard-of deals and happy hours at local pubs and bars.
                            </p>
                        </motion.div>
                        <motion.div 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginTop: isMobileScreen ? '5%' : '3%',
                            color: '#FFF',
                            userSelect: 'none',
                            cursor: 'pointer'
                        }}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        initial={{ opacity: 0, y: '10vh' }}
                        whileInView={{ opacity: 1, y: '0' }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
                        >
                            <img 
                                src={isMobileScreen ? loyaltyTileMobileImage : loyaltyTileImage} 
                                alt="loyalty tile"
                                style={{
                                    width: isMobileScreen ? '100%' : '80%',
                                    justifyContent: 'center',
                                    marginLeft: isMobileScreen ? '0%' : '10%'
                                    
                                }}/>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    marginLeft: isMobileScreen ? '13%' : '17%',
                                    marginTop: isMobileScreen ? '17.5%' : '3%',
                                    fontSize: isMobileScreen ? '7vw' : '3.5vw',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold',
                                    lineHeight: isMobileScreen ? '120%' : ''
                                }}
                            >
                                LOYALTY &
                                {isMobileScreen ? <br/> : <span>&nbsp;</span>}
                                REFERRAL
                            </span>
                            <p
                                style={{
                                    position: 'absolute',
                                    marginLeft: isMobileScreen ? '13%' : '17%',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    fontSize: isMobileScreen ? '5.5vw' : '2vw',
                                    paddingRight: isMobileScreen ? '10%' : '20%',
                                    lineHeight: isMobileScreen ? '110%' : '120%',
                                    textAlign: 'left',
                                    marginTop: isMobileScreen ? '27.5%' : '4%'
                                }}
                            >
                                Create and share party content, review your favourite outlets and refer FOMO to your friends
                                to earn points, goodies and freebies
                            </p>
                        </motion.div>
                        <img
                            src={FOMOLogo}
                            alt={"FOMO logo footer"}
                            style={fomoLogoStyle2}
                        />
                        <span
                            style={{
                                fontSize: '5.7vw',
                                color: 'white',
                                fontFamily: 'Germany Sans',
                                fontWeight: 'normal',
                                textAlign: 'center',
                                marginTop: isMobileScreen ? '5%' : '0%'
                            }}
                        >
                            REDEFINING NIGHTLIFE EXPERIENCES
                        </span>
                        <div
                            style={{
                                position: 'relative',
                                marginTop: isMobileScreen ? '35%' : '12%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <img
                                src={instaxs}
                                alt="insta small logo"
                                style={{
                                    position: 'absolute',
                                    marginTop: '1%',
                                    width: isMobileScreen ? '20%' : '15%',
                                    marginBottom: isMobileScreen ? '45%' : '35%'
                                }}
                            />
                            <span
                                style={{
                                    fontSize: isMobileScreen ? '5vw' : '3vw',
                                    color: 'white',
                                    fontFamily: 'Roboto',
                                    fontWeight: '300',
                                    textAlign: 'center',
                                    marginTop: isMobileScreen ? '0%' : '3%'
                                }}
                            >   
                                Follow us on Instagram
                            </span>
                            <a
                                href="https://www.instagram.com/thefomo.co/"
                                target="_blank"  // This will open the link in a new tab
                                rel="noopener noreferrer"  // Recommended for security when using `target="_blank"`
                                style={{ textDecoration: 'none', 
                                marginTop: isMobileScreen ? '-3%' : '-2%'
                            }}  // This will remove the underline typically associated with links
                            >
                                <span
                                    style={{
                                        fontSize: isMobileScreen ? '5vw' : '3vw',
                                        color: 'white',
                                        fontFamily: 'Roboto',
                                        fontWeight: '800',
                                        textAlign: 'center'
                                    }}
                                >
                                    @thefomo.co
                                </span>
                            </a>
                        </div>
                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: isMobileScreen ? '35%' : '12%'
                        }}>
                            <img
                            src={whatsappxs}
                            alt="whatsapp small logo"
                            style={{
                                position: 'absolute',
                                width: isMobileScreen ? '27.5%' : '22%',
                                paddingBottom: isMobileScreen ? '45%' : '45%'
                            }}
                        />
                        <span
                            style={{
                                fontSize: isMobileScreen ? '5vw' : '3vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: '300',
                                textAlign: 'center',
                                marginTop: isMobileScreen ? '8%' : '13%'
                            }}
                        >
                            Contact us at
                        </span>
                        <a
                            href="tel:+919945594437"
                            style={{ textDecoration: 'none', marginTop: isMobileScreen ? '-4%' : '-1%' }}  // This will remove the underline typically associated with links
                        >
                            <span
                                style={{
                                    fontSize: isMobileScreen ? '5vw' : '3vw',
                                    color: 'white',
                                    fontFamily: 'Roboto',
                                    fontWeight: '800',
                                    textAlign: 'center',
                                }}
                            >
                                +91 99455 94437
                            </span>
                        </a>
                        </div>
                        <motion.div
                            style={{
                                background: '#FFFFFF 0% 0% no-repeat padding-box',
                                border: '1px solid #707070',
                                justifyContent: 'center',
                                fontSize: isMobileScreen ? '4.5vw' : '3vw',
                                fontFamily: 'Roboto',
                                fontWeight: '500',
                                padding: isMobileScreen ? '3% 5% 3% 5%' : '2% 2.5% 2% 2.5%',
                                marginTop: isMobileScreen ? '30%' : '10%',
                                width: '40%',
                                borderRadius: isMobileScreen ? '50px' : '75px',
                                boxShadow: '0px 3px 15px #00000099',
                                cursor: 'pointer',
                                userSelect: 'none'
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale : 0.95 }}
                            onTap={handleFormOpenClick}
                        >
                            <span>
                                Join the Party
                            </span>
                        </motion.div>
                    </div>
                </div>
                {isUserInterestFormEnabled === true && <FormComponent isUserInterestFormEnabled setIsUserInterestFormEnabled={setIsUserInterestFormEnabled} />}
        </Section>
    )
}

export default MainPage;