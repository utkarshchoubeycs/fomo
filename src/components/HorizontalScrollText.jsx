import React, { useState, useEffect, useRef } from 'react';

function HorizontalScrollText() {

    const textRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

    useEffect(() => {
        const container = textRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;

        const scrollInterval = setInterval(() => {
            if (direction === 1 && scrollPosition < maxScroll) {
                setScrollPosition((prevScroll) => prevScroll + 1);
            } else if (direction === -1 && scrollPosition > 0) {
                setScrollPosition((prevScroll) => prevScroll - 1);
            }
        }, 1);

        // Set the actual scroll position of the container
        container.scrollLeft = scrollPosition;

        return () => clearInterval(scrollInterval);
    }, [scrollPosition, direction]);

    const toggleDirection = () => {
        setDirection((prevDir) => -prevDir);
    };




    const textStyle = {
        position: 'absolute',
        transform: 'matrix(1, -0.07, 0.07, 1, 0, 0)',
        textAlign: 'left',
        fontSize: '5vw',
        fontStyle: 'italic',
        fontWeight: 900,
        fontFamily: 'Roboto',
        letterSpacing: '0px',
        color: '#FFFFFF',
        opacity: 1,
        whiteSpace: 'nowrap',
        overflowX: 'auto',
        paddingLeft: '8%'
    };

    return (
        <div ref={textRef} style={textStyle} onClick={toggleDirection}>
            Step into an entrancing realm where India's nightlife comes alive
        </div>
    );
}

export default HorizontalScrollText;