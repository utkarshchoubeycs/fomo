import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import FormBackgroundImage from '../assets/Group66.png';

const FormComponent = ({isUserInterestFormEnabled=true, setIsUserInterestFormEnabled}) => {

    const [formName, setFormName] = useState('')
    const [formEmail, setFormEmail] = useState('');

    const [formPhoneNumber, setFormPhoneNumber] = useState('');

    const overlayRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                setIsUserInterestFormEnabled(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
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
            className="mx-4"
            style={{ 
                backgroundImage: `url(${FormBackgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                border: '1px black solid'
            }}
        >   
            <div className='flex flex-col justify-center m-5'>
                <div className='flex flex-col justify-center p-5'>
                    <div className="flex justify-center w-1 m-5" style={{ fontFamily: ''}}>Shoot Your Queries</div>
                    <div className="flex justify-center w-1 m-5">'CUZ NO FOMO ALLOWED</div>
                    <div className="flex justify-center m-5">Cutomized party packages, venues & villas in Bangalore & Goa!</div>
                </div>
                <div>
                    <div className="mb-4">
                        <input type="text" id="name" name="name" placeholder="Name" className="w-full border rounded-md p-2" />
                    </div>

                    <div className="flex gap-4 mb-4 md:flex">
                        <div className="w-1/2">
                            <input type="email" id="email" name="email" placeholder="Email" className="w-full border rounded-md p-2" />
                        </div>
                        <div className="w-1/2">
                            <input type="tel" id="telephone" name="Phone" placeholder="Phone" className="w-full border rounded-md p-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormComponent;
