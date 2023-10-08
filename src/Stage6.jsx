import React from 'react';

const Stage6 = ({ src }) => {
    const styles = {
        image: {
            width: '100vw',
            margin: '5px',
            transform: 'scale(1.2)', // Example transform
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
                transform: 'scale(1.2) rotate(40deg)', // Example hover effect
            }
        }
    };

    return <img src={src} alt="Dynamic Content" style={styles.image} />;
};

export default Stage6;
