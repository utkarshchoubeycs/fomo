import React, { useRef, useEffect } from 'react';
import "react-international-phone/style.css";

import FormBackgroundImage from '../assets/Group66.png';

const FormComponent = ({isUserInterestFormEnabled=true, setIsUserInterestFormEnabled}) => {

    // const [formName, setFormName] = useState('')
    // const [formEmail, setFormEmail] = useState('');

    // const [formPhoneNumber, setFormPhoneNumber] = useState('');

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

    /*const handleFormSubmit = (e) => {
        e.preventDefault();
    }*/

    return (
        <div 
            ref={overlayRef}
            className="h-80 w-80 grid"
            style={{ 
                backgroundImage: `url(${FormBackgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                border: '1px black solid'
            }}
        >   
            HELLO WORLD
        </div>
    )
}

export default FormComponent;
