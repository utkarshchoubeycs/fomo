import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../index.css';

import landscapeFormBg from '../assets/Group66.webp';
import logoImage from '../assets/P2.webp';

const FormComponent = ({isUserInterestFormEnabled=true, setIsUserInterestFormEnabled}) => {

    const [formName, setFormName] = useState('')
    const [formPhoneNumber, setFormPhoneNumber] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const overlayRef = useRef(null);

    const handleClickOutside = useCallback((event) => {
        if (overlayRef.current && !overlayRef.current.contains(event.target)) {
            setIsUserInterestFormEnabled(false);
        }
    }, [setIsUserInterestFormEnabled]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [handleClickOutside]);

    if (!isUserInterestFormEnabled) return null;

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div
        ref={overlayRef}
        style={{
            position: 'fixed',
            background: `url(${landscapeFormBg}) no-repeat center center`,
            backgroundPosition: 'cover',
            color: '#000',
            zIndex: 10
        }}
        className="absolute bottom-8 md:bottom-12 mx-9 md:mx-20 lg:mx-28 w-5/6 rounded-3xl"
        >
            <div className="flex justify-center -mt-8 md:-mt-16"> {/* Negative margin to pull the logo half way up */}
                <img src={logoImage} alt="Logo" className="w-24 h-24 md:w-40 md:h-40" />
            </div>
            <div className='flex flex-col' style={{ color: '#fff' }}>
                <span style={{ fontFamily: 'Roboto', fontWeight: '800' }} className='text-lg md:text-2xl justify-center'>Shoot Your Queries</span>
                <span style={{ fontFamily: 'Nulshock', fontWeight: 'bold'}} className='text-xl md:text-4xl'>NO FOMO ALLOWED</span>
                <div className='flex flex-row text-sm md:text-lg justify-center mx-5 mt-2 md:mt-5'>
                    <span style={{ fontFamily: 'Roboto', fontWeight: '200' }}>Customised party packages, venues & villas in Bangalore and Goa!</span>
                </div>

                <div className='flex flex-col my-5 mt-8 space-y-4 mx-10 md:mx-32 lg:mx-56' style={{color: '#000', fontFamily: 'Roboto', fontWeight: '400'}}>
                    <div className='flex flex-col md:flex-row items-center mx-0 md:mx-0'>
                        <input 
                            text={formName} 
                            placeholder='Name'
                            className='w-full px-2 py-4 text-2xl rounded-lg'
                            onChange={setFormName} 
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="mb-4 md:mb-0 md:mr-2 flex-1">
                            <input
                            type="tel"
                            text={formPhoneNumber}
                            className="w-full px-2 py-4 text-2xl rounded-lg border border-gray-300"
                            placeholder="Phone"
                            onChange={setFormPhoneNumber}
                            />
                        </div>
                        <div className="flex-1">
                            <input
                            type="email"
                            text={formEmail}
                            className="w-full px-2 py-4 text-2xl rounded-lg border border-gray-300"
                            placeholder="Email"
                            onChange={setFormEmail}
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-16 mb-10 mr-10 md:mr-32 lg:mr-56 md:mt-2 flex justify-end items-end'>
                    <motion.button 
                        style={{
                            background: 'transparent linear-gradient(107deg, #000000 0%, #7021B2 100%) 0% 0% no-repeat padding-box',
                            boxShadow: '0px 3px 15px #0000004D'
                        }}
                        className= 'text-3xl py-3 px-4 rounded-full'
                        whileHover={{ scale: 1.04 }}
                        onTap={handleFormSubmit}
                    >
                        Submit
                    </motion.button>
                </div>

            </div>
        </div>
        
    )
}

export default FormComponent;