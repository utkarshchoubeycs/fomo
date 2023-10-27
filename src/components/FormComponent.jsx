import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const FormComponent = ({isUserInterestFormEnabled, setIsUserInterestFormEnabled}) => {

    const [formName, setFormName] = useState('')
    const [formPhoneNumber, setFormPhoneNumber] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const overlayRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (overlayRef.current && !overlayRef.current.contains(event.target)) {
            setIsUserInterestFormEnabled(false);
        }
        };

        // Attach the click event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    if (!isUserInterestFormEnabled) return null;


    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div
        ref={overlayRef}
        style={{
            position: 'fixed', /* Fixed position */
            bottom: '5%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                display: 'flex',
                position: 'fixed',
                height: '70vh',
                width: '70vw',
                backgroundColor: 'rgb(255,255,255, 0.5)',
                backdropFilter: 'blur(0.5vw)',
                flexDirection: 'column',
                boxShadow: '0px 3px 15px #00000099',
                borderRadius: '4vw',
                color: '#fff',
                zIndex: 3,
                flex: 1,
            }}>
                <span style={{ fontFamily: 'Roboto Medium', fontSize: '2.7vw', paddingTop: '1vh' }}>Get on the guest list!</span>
                <span style={{ fontFamily: 'Nulshock', fontSize: '2.7vw' }}>NO FOMO ALLOWED!</span>
                <span style={{ fontFamily: 'Roboto Normal', fontSize: '1.5vw', paddingTop: '2vh' }}>Book the best villas and venues for party in Bangalore & Goa!</span>
                <div style={{ flex: 1, flexDirection: 'row', margin: '5vh 5vw 0 5vw'}}>
                    <input style={{ width: '58vw', padding: '1vh 0 1vh 1vw', margin: '0 1.5vw 0 1.5vw', fontSize: '2vw', borderRadius: '1vw', border: '0.05vw grey solid' }} text={formName} placeholder='Name' onChange={setFormName} />
                    <input style={{ width: '23vw', padding: '1vh 0 1vh 1vw', margin: '2vh 0.5vw 0 0vw', fontSize: '2vw', borderRadius: '1vw', border: '0.05vw grey solid' }} text={formPhoneNumber} placeholder='Phone' onChange={setFormPhoneNumber} />
                    <input style={{ width: '34vw', padding: '1vh 0 1vh 1vw', margin: '0 0vw 0 0.5vw', fontSize: '2vw', borderRadius: '1vw', border: '0.05vw grey solid' }} text={formEmail} placeholder='Email' onChange={setFormEmail} />
                    <motion.div 
                        onClick={handleFormSubmit} 
                        style={{ 
                            textAlign: 'center', 
                            margin: '4vh 0 -5vh 0', 
                            fontFamily: 'Roboto Normal',
                            fontSize: '2vw',
                            padding: '2.5vh 0 2.5vh 0',
                            fontWeight: 'medium',
                            background: 'transparent linear-gradient(107deg, #4B1FC2 0%, #7021B2 100%) 0% 0% no-repeat padding-box',
                            borderRadius: '5vw',
                            marginLeft: '50vw', 
                            marginRight: '0vw',
                            opacity: '0.76',
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                        whileTap={{ scale: 0.95 }}
                        >
                        Submit
                    </motion.div>
                </div>
                
            </div>
        </div>
    )
}

export default FormComponent;