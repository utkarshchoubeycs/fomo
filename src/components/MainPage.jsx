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

import discoverTileImage from '../assets/Coming Soon/Group 77.webp';
import partyPackageTileImage from '../assets/Coming Soon/Group 78.webp';
import fomoTipsTileImage from '../assets/Coming Soon/Group 79.webp';
import contentTileImage from '../assets/Coming Soon/Group 80.webp';
import dealsTileImage from '../assets/Coming Soon/Group 81.webp';
import loyaltyTileImage from '../assets/Coming Soon/Group 82.webp';

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

const fomoLogoStyle = {
    position: 'absolute',
    width: '41vw',
    marginLeft: '0%',
    marginTop: '-1%',
};

const sunsetLogoStyle = {
    position: 'absolute',
    width: '35vw',
    marginLeft: '0%',
    marginTop: '10%',
}

const fourhandsStyle = {
    position: 'absolute',
    width: '58vw',
    marginTop: '1%',
    marginLeft: '25%',
    marginRight: '25%',   
}

const mask1ImageStyle = {
    position: 'absolute',
    width: '100%',
    height: '10%',
    marginTop: '25%'
}

const mask2ImageStyle = {
    position: 'absolute',
    width: '90%',
    height: '8%',
    marginLeft: '-10%',
    marginTop: '110%'
}

const mask3ImageStyle = {
    position: 'absolute',
    width: '98%',
    marginRight: '-2%',
    height: '6%',
    marginTop: '188%'
}

const cheersImageStyle = {
    position: 'absolute',
    width: '40vw',
    marginTop: '245%',
    marginRight: '-32%'
}

const mask4ImageStyle = {
    position: 'absolute',
    width: '99%',
    top: '0%',
    height: '6%',
    marginLeft: '-1%',
    marginTop: '307%',
}

const fomoLogoStyle2 = {
    position: 'absolute',
    width: '40%',
    marginTop: '535%'
};

function Section({ image, aspectRatio, style, children }) {
    const sectionStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        borderColor: 'black',
        borderWidth: '2px',
        backgroundRepeat: 'no-repeat',
        width: '100%',
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
            if(value <= 0.9) setIsFomoVisible(false);
            else setIsFomoVisible(true);
        })

        return () => unsubScrollYProgress();
    }, [scrollYProgress]);

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

    const rightAlignedParagraph = [
        "We're diving deep into the vibrant",
        "heartbeats of Bangalore and",
        "the sun-soaked shores of Goa.",
        "We will bring you the insider scoop" ,
        "of the happening parties in town."  
    ]

    const leftAlignedParagraph = [
        "Get ready for action-packed parties,",
        "electric pubs, and clubs that buzz", 
        "louder than your morning alarm.", 
        "Curated by true party enthusiasts.", 
        "We've got your back!"
    ]
    
    return (
            <Section
                image={backgroundImage}
                aspectRatio={0.14692378}
                style={{
                    zIndex: 2,
                    ...mainImageStyle
                }}
            >   
                <div style={contentStyle}>
                    <div 
                        ref={sunsetViewRef}
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
                            marginTop: '2%', 
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
                                ...sunsetLogoStyle}}
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
                                fontSize: '5.8vw', 
                                color: 'white', 
                                fontFamily: 'Nulshock', 
                                fontWeight: 'bold', 
                                textAlign: 'center',
                                justifyContent: 'center',
                                marginLeft: '10%',
                                marginRight: '10%',
                                marginTop: '30%', 
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
                        marginTop: '40%',
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        left: '0%',
                        right: '0%'
                    }} 
                    >
                        <motion.span
                            style={{
                                fontSize: '3.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: '500',
                                textAlign: 'left',
                                marginTop: '7%',
                                marginLeft: '-52%',
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
                                textAlign: 'left',
                                marginLeft: '-15%',
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
                                textAlign: 'left',
                                marginLeft: '-21%',
                                marginTop: '-4%',
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
                                fontSize: '3.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: '500',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginTop: '-2.5%',
                                marginLeft: '10.5%'
                            }}
                            initial={{ opacity: 0, y: '20vh'}}
                            whileInView={{ opacity: 1, y: '0'}}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
                        >
                            ready to take you on wild rides through the cities <br/> that never sleep!
                        </motion.span>
                        <motion.img
                            src={mask1Image}
                            alt={"Mask 1"}
                            style={mask1ImageStyle}
                            whileHover={{ transform: 'translateY(4%)' }}
                        />
                        <div
                            style={{
                                fontSize: '3.2vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: '500',
                                textAlign: 'right',
                                paddingRight: '8%',
                                marginTop: '59%',
                                marginRight: '-30%'
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
                            whileHover={{ transform: 'translateY(4%)' }}
                        />
                        <div
                            style={{
                                fontSize: '3.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: '500',
                                textAlign: 'left',
                                marginTop: '52%',
                                marginLeft: '-16%'
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
                            whileHover={{ transform: 'translateY(4%)' }}
                        />
                        <motion.span
                            style={{
                                fontSize: '6vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                marginTop: '37%',
                                marginLeft: '-37%'
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
                                fontSize: '6vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                marginTop: '-2%',
                                marginLeft: '-11%'
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
                                fontSize: '6vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                marginTop: '-2%',
                                marginLeft: '-21%'
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
                                fontSize: '3.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: '500',
                                textAlign: 'left',
                                marginLeft: '-31%',
                                marginTop: '-2%'
                            }}
                            initial={{ opacity: 0, y: '20vh'}}
                            whileInView={{ opacity: 1, y: '0'}}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
                        >
                            turned it into a way of life.
                        </motion.span>
                        <motion.img
                            src={cheersImage}
                            alt={"Cheers hands"}
                            style={cheersImageStyle}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cheersImageVariants}
                        />
                        <motion.span
                            style={{
                                fontSize: '3.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: '500',
                                textAlign: 'left',
                                marginLeft: '-59%',
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
                                fontSize: '6vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                marginLeft: '-21.5%',
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
                                fontSize: '6vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                marginLeft: '-23%',
                                marginTop: '-2.5%'
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
                                fontSize: '3.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: '500',
                                textAlign: 'left',
                                paddingRight: '8%',
                                marginLeft: '-27.5%',
                                marginTop: '-2%'
                            }}
                            initial={{ opacity: 0, y: '20vh'}}
                            whileInView={{ opacity: 1, y: '0'}}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
                        >
                            is the thing of the past!
                        </motion.span>
                        <motion.img
                            src={mask4Image}
                            alt={"Mask 4"}
                            style={mask4ImageStyle}
                            whileHover={{ transform: 'translateY(4%)' }}
                        />
                        <motion.span
                            style={{
                                fontFamily: 'Nulshock',
                                fontSize: '4vw',
                                color: 'white',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '41%',
                                marginLeft: '12%',
                            }}
                            initial="hidden"
                            whileInView="stamp"
                            viewport={{ once: true }}
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
                                marginTop: '3.5%',
                                marginLeft: '12%'
                            }}
                            initial="hidden"
                            whileInView="stamp"
                            viewport={{ once: true }}
                            variants={stampVariants}
                            transition={{ delay: 2 }}
                        >
                            BANGALORE & GOA
                        </motion.span>
                        <motion.span
                            style={{
                                fontSize: '7.5vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingRight: '8%',
                                marginTop: '3.5%',
                                marginLeft: '11%'
                            }}
                            initial="hidden"
                            whileInView="stamp"
                            viewport={{ once: true }}
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
                                marginTop: '2.5%',
                                marginLeft: '8%'
                            }}
                            initial="hidden"
                            whileInView="stamp"
                            viewport={{ once: true }}
                            variants={stampVariants}
                            transition={{ delay: 4 }}
                        >
                            GET WILD!
                        </motion.span>
                        <span
                            style={{
                                fontSize: '3.5vw',
                                color: 'white',
                                fontFamily: 'Nulshock',
                                fontWeight: 'normal',
                                textAlign: 'center',
                                marginTop: '8%'
                            }}
                        >
                            COMING SOON!
                        </span>
                        <motion.div 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginTop: '3%',
                            color: '#FFF',
                            userSelect: 'none',
                            cursor: 'pointer'
                        }}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        >
                            <img 
                                src={discoverTileImage} 
                                alt="discover tile"
                                style={{
                                    width: '80%',
                                    justifyContent: 'center',
                                    marginLeft: '10%'
                                }}
                                />
                            <span
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    marginLeft: '17%',
                                    marginTop: '3%',
                                    fontSize: '3.5vw',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold'
                                }}
                            >DISCOVER</span>
                            <p
                                style={{
                                    position: 'absolute',
                                    marginLeft: '17%',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    fontSize: '1.5vw',
                                    textAlign: 'left',
                                    marginTop: '7%'
                                }}
                            >Explore the city's coolest bars and most exciting <br/> events that match your vibe!</p>
                        </motion.div>
                        <motion.div 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginTop: '3%',
                            color: '#FFF',
                            userSelect: 'none',
                            cursor: 'pointer'
                        }}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        >
                            <img 
                                src={partyPackageTileImage} 
                                alt="party package"
                                style={{
                                    width: '80%',
                                    justifyContent: 'center',
                                    marginLeft: '10%',
                                    
                                }}/>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    marginLeft: '17%',
                                    marginTop: '3%',
                                    fontSize: '3.5vw',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold'
                                }}
                            >PARTY PACKAGE</span>
                            <p
                                style={{
                                    position: 'absolute',
                                    marginLeft: '17%',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    fontSize: '1.5vw',
                                    textAlign: 'left',
                                    marginTop: '7%'
                                }}
                            >
                                Perfect for large group bookings for private and corporate events. We help you find and book <br/>
                                the ideal party venue and the best party packages that suit your budget.
                            </p>
                        </motion.div>
                        <motion.div 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginTop: '3%',
                            color: '#FFF',
                            userSelect: 'none',
                            cursor: 'pointer'
                        }}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        >
                            <img 
                                src={fomoTipsTileImage} 
                                alt="fomo tips tile"
                                style={{
                                    width: '80%',
                                    justifyContent: 'center',
                                    marginLeft: '10%',
                                    
                                }}/>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    marginLeft: '17%',
                                    marginTop: '3%',
                                    fontSize: '3.5vw',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold'
                                }}
                            >FOMO TIPS</span>
                            <p
                                style={{
                                    position: 'absolute',
                                    marginLeft: '17%',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    fontSize: '1.5vw',
                                    textAlign: 'left',
                                    marginTop: '7%'
                                }}
                            >
                                Get FOMO-verified recommendations for the town's top parties, ensuring you never miss <br/>
                                out again!
                            </p>
                        </motion.div>
                        <motion.div 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginTop: '3%',
                            color: '#FFF',
                            userSelect: 'none',
                            cursor: 'pointer'
                        }}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        >
                            <img 
                                src={contentTileImage} 
                                alt="content tile"
                                style={{
                                    width: '80%',
                                    justifyContent: 'center',
                                    marginLeft: '10%',
                                    
                                }}/>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    marginLeft: '17%',
                                    marginTop: '3%',
                                    fontSize: '3.5vw',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold'
                                }}
                            >CONTENT</span>
                            <p
                                style={{
                                    position: 'absolute',
                                    marginLeft: '17%',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    fontSize: '1.5vw',
                                    textAlign: 'left',
                                    marginTop: '7%'
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
                            marginTop: '3%',
                            color: '#FFF',
                            userSelect: 'none',
                            cursor: 'pointer'
                        }}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        >
                            <img 
                                src={dealsTileImage} 
                                alt="deals tile"
                                style={{
                                    width: '80%',
                                    justifyContent: 'center',
                                    marginLeft: '10%',
                                    
                                }}/>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    marginLeft: '17%',
                                    marginTop: '3%',
                                    fontSize: '3.5vw',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold'
                                }}
                            >DEALS</span>
                            <p
                                style={{
                                    position: 'absolute',
                                    marginLeft: '17%',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    fontSize: '1.5vw',
                                    textAlign: 'left',
                                    marginTop: '7%'
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
                            marginTop: '3%',
                            color: '#FFF',
                            userSelect: 'none',
                            cursor: 'pointer'
                        }}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        >
                            <img 
                                src={loyaltyTileImage} 
                                alt="loyalty tile"
                                style={{
                                    width: '80%',
                                    justifyContent: 'center',
                                    marginLeft: '10%',
                                    
                                }}/>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    marginLeft: '17%',
                                    marginTop: '3%',
                                    fontSize: '3.5vw',
                                    fontFamily: 'Nulshock',
                                    fontWeight: 'bold'
                                }}
                            >LOYALTY & REFERRAL</span>
                            <p
                                style={{
                                    position: 'absolute',
                                    marginLeft: '17%',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    fontSize: '1.5vw',
                                    textAlign: 'left',
                                    marginTop: '7%'
                                }}
                            >
                                Create and share party content, review your favourite outlets and refer FOMO to your friends <br/>
                                to earn points, goodies and freebies
                            </p>
                        </motion.div>
                        <img
                            src={FOMOLogo}
                            alt={"Section 1 Mask"}
                            style={fomoLogoStyle2}
                        />
                        <span
                            style={{
                                fontSize: '5.7vw',
                                color: 'white',
                                fontFamily: 'Germany Sans',
                                fontWeight: 'normal',
                                textAlign: 'center',
                                marginTop: '45%'
                            }}
                        >
                            REDEFINING NIGHTLIFE EXPERIENCES
                        </span>
                        <span
                            style={{
                                fontSize: '2.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: '300',
                                textAlign: 'center',
                                marginTop: '10%'
                            }}
                        >   
                            Follow us on Instagram
                        </span>
                        <a
                            href="https://www.instagram.com/thefomo.co/"
                            target="_blank"  // This will open the link in a new tab
                            rel="noopener noreferrer"  // Recommended for security when using `target="_blank"`
                            style={{ textDecoration: 'none' }}  // This will remove the underline typically associated with links
                        >
                            <span
                                style={{
                                    fontSize: '2.5vw',
                                    color: 'white',
                                    fontFamily: 'Roboto',
                                    fontWeight: '800',
                                    textAlign: 'center'
                                }}
                            >
                                @thefomo.co
                            </span>
                        </a>
                        <span
                            style={{
                                fontSize: '2.5vw',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: '300',
                                textAlign: 'center',
                                marginTop: '8%'
                            }}
                        >
                            Contact us at
                        </span>
                        <a
                            href="tel:+919945594437"
                            style={{ textDecoration: 'none' }}  // This will remove the underline typically associated with links
                        >
                            <span
                                style={{
                                    fontSize: '2.5vw',
                                    color: 'white',
                                    fontFamily: 'Roboto',
                                    fontWeight: '800',
                                    textAlign: 'center'
                                }}
                            >
                                +91 99455 94437
                            </span>
                        </a>
                        <motion.div
                            style={{
                                background: '#FFFFFF 0% 0% no-repeat padding-box',
                                border: '1px solid #707070',
                                justifyContent: 'center',
                                fontSize: '2.3vw',
                                fontFamily: 'Roboto',
                                fontWeight: '500',
                                padding: '1.5% 1% 1.5% 1%',
                                marginTop: '15%',
                                width: '25%',
                                borderRadius: '50px',
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
                        {isUserInterestFormEnabled === true && <FormComponent isUserInterestFormEnabled setIsUserInterestFormEnabled={setIsUserInterestFormEnabled} />}
                    </div>
                </div>
        </Section>
    )
}

export default MainPage;