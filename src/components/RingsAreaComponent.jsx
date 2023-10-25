import React, { useState } from "react";
import { motion, useScroll } from 'framer-motion';
import { useEffect } from "react";

const HeroComponent = () => {
	const [stage, setStage] = useState(0);
	const { scrollY } = useScroll();

	const viewportHeight = window.innerHeight;

	useEffect(() => {

		const unsubScrollYProgress = scrollY.on("change", value => {
			console.log(stage, value/viewportHeight);
			if(value <= 0.5 * viewportHeight) setStage(0);
			else if(value <= 1 * viewportHeight) setStage(1);
			else if(value <= 1.5 * viewportHeight) setStage(2);
			else if(value <= 2 *  viewportHeight) setStage(3);
			else setStage(4);
		})

		return () => {
			unsubScrollYProgress();
		}
	}, [scrollY, viewportHeight, stage]);

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
			/*case 6: return <div style={{ height: '100vh', overflow: 'hidden' }}><MainPage /></div>
			case 7: return <div><MainPage /></div>*/
			default: return <div style={{ background: getBackgroundForStage(0), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ringData[0].map((ringMetadata, index) => <RingComponent key={index} size={ringMetadata.size} borderColor={ringMetadata.borderColor} stage={stage} />)}</div>
		}
	}

	return (
		<div style={{ height: '100vh', position: 'fixed'}}>
			{renderStages()}
		</div>
	);
};

const LandingPageComponent = () => {
	return (
		<div style={{ height: '300vh' }}>
			<HeroComponent />
		</div>
	)
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
		<motion.div style={{
			...ringBase,
			width: size,
			height: size,
			borderRadius: '50%',
			borderColor: borderColor,
			whiteSpace: 'nowrap',
			transition: 'width 0.3s ease-out, height 0.3s ease-out, backgroundColor 0.3s ease-out'
		}}
		>
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
		</motion.div>
	)
}

export default LandingPageComponent;
