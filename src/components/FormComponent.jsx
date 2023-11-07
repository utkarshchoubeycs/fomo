import React, {useState, useRef, useEffect, useCallback} from 'react';
import {motion} from 'framer-motion';
import '../index.css';

import landscapeFormBg from '../assets/Group66.webp';
import logoImage from '../assets/P2.webp';

const googleFormUrl = "https://script.google.com/macros/s/AKfycbzaNuZOUQMdoyP1kV9UjfQ9CHg2mTcT35vYs4wOFPHQZLSyYaCgGKgiBn47_V7NKfBiYg/exec"
const phoneRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})?[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
const emailRegex = /\S+@\S+\.\S+/;

const Loader = () => <div>Submitting...</div>;

const FormComponent = ({isUserInterestFormEnabled, setIsUserInterestFormEnabled}) => {

    const [formName, setFormName] = useState('')
    const [formPhoneNumber, setFormPhoneNumber] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
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

    const handleNameChange = (e) => {
        setFormName(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setFormPhoneNumber(e.target.value);
    };

    const handleEmailChange = (e) => {
        setFormEmail(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        if (!formName || !formPhoneNumber || !formEmail) {
            alert("Please fill all the fields!");
            return;
        } else if (!formPhoneNumber.match(phoneRegex)) {
            alert("Please enter a valid phone number!");
            return;
        } else if (!formEmail.match(emailRegex)) {
            alert("Please enter a valid email address!");
            return;
        }

        try {
            const formData = new FormData();
            formData.append('Name', formName);
            formData.append('Phone', formPhoneNumber);
            formData.append('Email', formEmail);

            const response = await fetch(googleFormUrl, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            console.log(result);
            alert("Success!");

        } catch (error) {
            console.error('Error submitting form: ', error);
            alert("Error submitting form, try again!");
        }
        setFormEmail('');
        setFormName('');
        setFormPhoneNumber('');
        setIsSubmitting(false);
        setIsUserInterestFormEnabled(false);
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
            <div className="flex justify-center -mt-16 md:-mt-24">
                <img src={logoImage} alt="Logo" className="w-32 h-32 md:w-48 md:h-48"/>
            </div>
            <div className='flex flex-col' style={{color: '#fff'}}>
                <span style={{fontFamily: 'Roboto', fontWeight: '800'}} className='text-lg md:text-2xl justify-center'>Shoot Your Queries</span>
                <span style={{fontFamily: 'Nulshock', fontWeight: 'bold'}} className='text-xl md:text-4xl'>NO FOMO ALLOWED</span>
                <div className='flex flex-row text-sm md:text-lg justify-center mx-5 mt-2 md:mt-5'>
                    <span style={{fontFamily: 'Roboto', fontWeight: '200'}}>Customised party packages, venues & villas in Bangalore and Goa!</span>
                </div>

                <div className='flex flex-col my-5 mt-8 space-y-4 mx-10 md:mx-32 lg:mx-56'
                     style={{color: '#000', fontFamily: 'Roboto', fontWeight: '400'}}>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='flex-1'>
                            <input
                                value={formName}
                                placeholder='Name'
                                className='w-full px-4 py-4 md:py-4 text-lg rounded-lg border border-gray-300'
                                onChange={handleNameChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="mb-4 md:mb-0 md:mr-2 flex-1">
                            <input
                                type="tel"
                                value={formPhoneNumber}
                                className="w-full px-4 py-4 md:py-4 text-lg rounded-lg border border-gray-300"
                                placeholder="Phone"
                                onChange={handlePhoneNumberChange}
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <input
                                type="email"
                                value={formEmail}
                                className="w-full px-4 py-4 md:py-4 text-lg rounded-lg border border-gray-300"
                                placeholder="Email"
                                onChange={handleEmailChange}
                                required
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
                        className='text-xl md:text-3xl px-6 py-4 rounded-full'
                        whileHover={{scale: 1.04}}
                        onTap={handleFormSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <Loader/> : 'Submit'}
                    </motion.button>
                </div>

            </div>
        </div>

    )
}

export default FormComponent;