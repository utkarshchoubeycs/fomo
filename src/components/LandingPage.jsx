import React, { useState } from 'react';
import MainPage from './MainPage';

function LandingPage() {
    const [stage, setStage] = useState(0);
    
    const [scrollValue, setScrollValue] = useState(0);
    const SCROLL_INCREMENT = [0.08, 0.08, 0.08, 0.08, 0.08, 0.004];

	const handleScroll = (direction) => {
        if (direction > 0) {
            setScrollValue(prev => Math.min(5, prev + SCROLL_INCREMENT[stage]));
            setStage(Math.floor(scrollValue));
            console.log('Going down! with stage', stage);
        } else if (direction < 0 && stage < 5) {
            setScrollValue(prev => Math.max(0, prev - SCROLL_INCREMENT[stage]));
            setStage(Math.ceil(scrollValue));
            console.log('Going up!');
        }
    };

    const handleWheel = (e) => {
        handleScroll(e.deltaY);
    };

    const [touchStartY, setTouchStartY] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
        const touchMoveY = e.touches[0].clientY;
        if (touchStartY !== null) {
            const direction = touchMoveY - touchStartY;
            handleScroll(direction);
        }
    };

    const handleTouchEnd = () => {
        setTouchStartY(null);
    };

    const ringData = [
        [
            { size: '25vw', borderColor: '#C800FF' }
        ],
        [
            { size: '33vw', borderColor: 'rgba(254, 0, 0, 1)' },
            { size: '25vw', borderColor: '#fff' }
        ],
        [
            { size: '43vw', borderColor: 'rgba(1, 255, 255, 1)' },
            { size: '23vw', borderColor: '#fff' },
            { size: '14vw', borderColor: '#fff' }
        ],
        [
            { size: '47vw', borderColor: 'rgba(0, 255, 1, 1)' },
            { size: '23vw', borderColor: '#fff' },
            { size: '21vw', borderColor: '#fff' },
            { size: '14vw', borderColor: '#fff' },
        ],
        [
            { size: '47vw', borderColor: '#fff' },
            { size: '36vw', borderColor: '#fff' },
            { size: '23vw', borderColor: '#fff' },
            { size: '21vw', borderColor: '#fff' },
            { size: '14vw', borderColor: '#fff' }
        ],
    ];

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

    const renderStages = () => {
        switch (stage) {
            case 0: return <div style={{ background: getBackgroundForStage(0), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ringData[0].map((ringMetadata, index) => <RingComponent key={index} size={ringMetadata.size} borderColor={ringMetadata.borderColor} stage={0} />)}</div>
            case 1: return <div style={{ background: getBackgroundForStage(1), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ringData[1].map((ringMetadata, index) => <RingComponent key={index} size={ringMetadata.size} borderColor={ringMetadata.borderColor} stage={1} />)}</div>
            case 2: return <div style={{ background: getBackgroundForStage(2), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ringData[2].map((ringMetadata, index) => <RingComponent key={index} size={ringMetadata.size} borderColor={ringMetadata.borderColor} stage={2} />)}</div>
            case 3: return <div style={{ background: getBackgroundForStage(3), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ringData[3].map((ringMetadata, index) => <RingComponent key={index} size={ringMetadata.size} borderColor={ringMetadata.borderColor} stage={3} />)}</div>
            case 4: return <div style={{ background: getBackgroundForStage(4), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ringData[4].map((ringMetadata, index) => <RingComponent key={index} size={ringMetadata.size} borderColor={ringMetadata.borderColor} stage={4} />)}</div>
            case 5: return <MainPage />
            default: return <div style={{ background: getBackgroundForStage(0), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ringData[0].map((ringMetadata, index) => <RingComponent key={index} size={ringMetadata.size} borderColor={ringMetadata.borderColor} stage={stage} />)}</div>
        }
    }

    return (
        <div onWheel={handleWheel} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            {renderStages()}
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