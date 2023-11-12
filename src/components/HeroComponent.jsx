import React, { useState, useEffect, useRef } from 'react';
import {useScroll} from 'framer-motion';

import FourHandsImage from '../assets/P0.webp';
import sunsetLogo from '../assets/P1.webp';
import FOMOLogo from '../assets/P2.webp';

const HeroComponent = () => {

    const sunsetViewRef = useRef();
    const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768);
    const [isFomoVisible, setIsFomoVisible] = useState(false);

    const {scrollYProgress} = useScroll({
        target: sunsetViewRef,
        offset: ["start end", "end end"]
    });

    useEffect(() => {
        const unsubScrollYProgress = scrollYProgress.on("change", value => {

            const threshold = isMobileScreen ? 0.65 : 0.9;

            if (value <= threshold) setIsFomoVisible(false);
            else setIsFomoVisible(true);
        })

        if (window.innerWidth < 768) setIsMobileScreen(true);
        else setIsMobileScreen(false);

        return () => unsubScrollYProgress();
    }, [scrollYProgress, isMobileScreen]);

    const fomoLogoStyle = {
        position: 'absolute',
        width: isMobileScreen ? '70vw' : '45vw',
        marginTop: isMobileScreen ? '75%' : '0%'
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
    
    return(
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
                    ...fomoLogoStyle
                }}
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
                exit={{opacity: '0'}}
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
                    opacity: isFomoVisible ? 1 : 0,
                }}
            >
                    COMES ALIVE!
                </span>
        </div>
    )
}

export default HeroComponent;