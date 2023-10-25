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
                </div>




            </div>
        </Section>
    )
}



export default MainPage;