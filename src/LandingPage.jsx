import React, { useState } from 'react';

function LandingPage() {
    const [stage, setStage] = useState(0);
    const [scrollValue, setScrollValue] = useState(0);

    const SCROLL_INCREMENT = 0.08; // Amount to increment/decrement on each wheel event

    const ringData = [
        {
            rings:
                [
                    { size: '25vw', borderColor: '#C800FF' }
                ]
        },
        {
            rings:
                [
                    { size: '33vw', borderColor: 'rgba(254, 0, 0, 1)' },
                    { size: '25vw', borderColor: '#fff' }
                ]
        },
        {
            rings:
                [
                    { size: '43vw', borderColor: 'rgba(1, 255, 255, 1)' },
                    { size: '23vw', borderColor: '#fff' },
                    { size: '14vw', borderColor: '#fff' }
                ],
        },
        {
            rings: [
                { size: '47vw', borderColor: 'rgba(0, 255, 1, 1)' },
                { size: '23vw', borderColor: '#fff' },
                { size: '21vw', borderColor: '#fff' },
                { size: '14vw', borderColor: '#fff' },
            ],
        },
        {
            rings: [
                { size: '47vw', borderColor: '#fff' },
                { size: '36vw', borderColor: '#fff' },
                { size: '23vw', borderColor: '#fff' },
                { size: '21vw', borderColor: '#fff' },
                { size: '14vw', borderColor: '#fff' }
            ],
        },
    ];


    const handleWheel = (e) => {
        if (e.deltaY > 0) {
            setScrollValue(prev => Math.min(ringData.length - 1, prev + SCROLL_INCREMENT))
            setStage(Math.floor(scrollValue));
        } else if (e.deltaY < 0) {
            setScrollValue(prev => Math.max(0, prev - SCROLL_INCREMENT));
            setStage(Math.ceil(scrollValue));
        }
    };

    const getBackgroundForStage = (stage) => {
        switch (stage) {
            case 0: return 'radial-gradient(ellipse farthest-side at center, rgba(119, 27, 146, 1), black)'; // neon pink
            case 1: return 'radial-gradient(ellipse farthest-side at center, rgba(116, 16, 16, 1), black)'; // neon red
            case 2: return 'radial-gradient(ellipse farthest-side at center, rgba(15, 123, 123, 1), black)'; // neon sky blue
            case 3: return 'radial-gradient(ellipse farthest-side at center, rgba(13, 97, 13, 1), black)'; // neon green
            case 4: return 'radial-gradient(ellipse farthest-side at center, rgba(23, 24, 129, 1), black)'; // neon blue
            default: return 'black';
        }
    };

    return (
        <div onWheel={handleWheel} style={{ background: getBackgroundForStage(stage), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {
                ringData[stage].rings.map(ringMetadata => <RingComponent size={ringMetadata.size} borderColor={ringMetadata.borderColor} stage={stage} />)
            }
        </div>
    );
}

const RingComponent = ({ size, borderColor, stage }) => {
    const ringBase = {
        position: 'absolute',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '5vw',
        border: '1px solid white',
        fontFamily: 'NulShock'
    };

    return (
        <div style={{
            ...ringBase,
            width: size,
            height: size,
            borderRadius: '50%',
            borderColor: borderColor,
            whiteSpace: 'nowrap',
            transition: 'width 0.5s, height 0.5s, backgroundColor 0.5s'
        }}>
            {(stage === 0) && (
                <span style={{ color: '#E75CFF', fontWeight: 'bold', letterSpacing: '2px', WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '3px', transition: 'width 0.5s, height 0.5s, backgroundColor 0.5s' }}>
                    MUSIC
                </span>)}
            {(stage === 1) && (
                <span style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    MUSIC, <span style={{ color: 'rgba(254, 0, 0, 1)', WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '3px' }}>DRINKS</span>
                </span>)}
            {(stage === 2) && (
                <span style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    MUSIC, DRINKS,<br /> <span style={{ color: 'rgba(1, 255, 255, 1)', WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '3px' }}>LIGHTS</span>
                </span>)}
            {(stage === 3) && (
                <span style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    MUSIC, DRINKS,<br /> LIGHTS <span style={{ color: 'rgba(0, 255, 1, 1)', WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: "3px" }}>& ACTION</span>
                </span>)}
            {(stage === 4) &&
                (<span style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    MUSIC, DRINKS,<br /> LIGHTS & ACTION
                </span>)}
        </div>
    )
}

export default LandingPage;