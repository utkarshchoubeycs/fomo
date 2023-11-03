import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const HeroComponent = () => {
	const [stage, setStage] = useState(0);
	//const { scrollY } = useScroll();

	// const viewportHeight = window.innerHeight;

	/*useEffect(() => {

		const unsubScrollYProgress = scrollY.on("change", value => {
			if(value < 0.5 * viewportHeight) setStage(0);
			else if(value < 1 * viewportHeight) setStage(1);
			else if(value < 1.5 * viewportHeight) setStage(2);
			else if(value < 2 * viewportHeight) setStage(3);
			else setStage(4);
		})

		return () => {
			unsubScrollYProgress();
		}
	}, [scrollY, viewportHeight, stage]);*/

	/*const handleClick = () => {
		if(stage < 4){
			window.scrollTo({top: ((stage+1) * 0.5 * viewportHeight), behavior: 'instant'});
		}
		else{
			window.scrollTo({top: 3.5 * viewportHeight, behavior: 'smooth'});
		}
	}*/

	useEffect(() => {

		if (stage < 4) {
		  const timer = setTimeout(() => {
			setStage(prevStage => prevStage + 1);
		  }, 1000);
	
		  return () => clearTimeout(timer);
		}
	  }, [stage]);

	const isMobileScreen = window.innerWidth < 768;
	console.log(isMobileScreen)

	const ringData = [
		[
			{ size: isMobileScreen ? '70vw' : '25vw', borderColor: '#C800FF', opacity: 1 }
		],
		[
			{ size: isMobileScreen ? '75vw' : '33vw', borderColor: 'rgba(254, 0, 0, 1)', opacity: 1 },
			{ size: isMobileScreen ? '45vw' : '25vw', borderColor: '#fff', opacity: 0.5 }
		],
		[
			{ size: isMobileScreen ? '85vw' : '43vw', borderColor: 'rgba(1, 255, 255, 1)', opacity: 1 },
			{ size: isMobileScreen ? '60vw' : '23vw', borderColor: '#fff', opacity: 0.2 },
			{ size: isMobileScreen ? '45vw' : '14vw', borderColor: '#fff', opacity: 0.2 }
		],
		[
			{ size: isMobileScreen ? '110vw' : '47vw', borderColor: 'rgba(0, 255, 1, 1)', opacity: 1 },
			{ size: isMobileScreen ? '85vw' : '23vw', borderColor: '#fff', opacity: 0.3 },
			{ size: isMobileScreen ? '55vw' : '21vw', borderColor: '#fff', opacity: 0.15 },
			{ size: '14vw', borderColor: '#fff', opacity: 0.1 },
		],
		[
			{ size: isMobileScreen ? '120vw' : '47vw', borderColor: '#fff', opacity: 1 },
			{ size: isMobileScreen ? '85vw' : '36vw', borderColor: '#fff', opacity: 0.25 },
			{ size: '23vw', borderColor: '#fff', opacity: 0.2 },
			{ size: '21vw', borderColor: '#fff', opacity: 0.1 },
			{ size: '14vw', borderColor: '#fff', opacity: 0.1 }
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
			case 0: return <div style={{ background: getBackgroundForStage(0), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ringData[0].map((ringMetadata, index) => <RingComponent key={index} size={ringMetadata.size} borderColor={ringMetadata.borderColor} opacity={ringMetadata.opacity} stage={0} isMobileScreen={isMobileScreen} />)}</div>
			case 1: return <div style={{ background: getBackgroundForStage(1), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ringData[1].map((ringMetadata, index) => <RingComponent key={index} size={ringMetadata.size} borderColor={ringMetadata.borderColor} opacity={ringMetadata.opacity} stage={1} isMobileScreen={isMobileScreen} />)}</div>
			case 2: return <div style={{ background: getBackgroundForStage(2), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ringData[2].map((ringMetadata, index) => <RingComponent key={index} size={ringMetadata.size} borderColor={ringMetadata.borderColor} opacity={ringMetadata.opacity} stage={2} isMobileScreen={isMobileScreen} />)}</div>
			case 3: return <div style={{ background: getBackgroundForStage(3), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ringData[3].map((ringMetadata, index) => <RingComponent key={index} size={ringMetadata.size} borderColor={ringMetadata.borderColor} opacity={ringMetadata.opacity} stage={3} isMobileScreen={isMobileScreen} />)}</div>
			case 4: return <div style={{ background: getBackgroundForStage(4), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ringData[4].map((ringMetadata, index) => <RingComponent key={index} size={ringMetadata.size} borderColor={ringMetadata.borderColor} opacity={ringMetadata.opacity} stage={4} isMobileScreen={isMobileScreen} />)}</div>
			default: return <div style={{ background: getBackgroundForStage(0), height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ringData[0].map((ringMetadata, index) => <RingComponent key={index} size={ringMetadata.size} borderColor={ringMetadata.borderColor} opacity={ringMetadata.opacity} stage={stage} isMobileScreen={isMobileScreen} />)}</div>
		}
	}

	return (
		<div style={{ height: '100vh', position: stage < 5 ? 'fixed' : 'relative', zIndex: -1}}>
			{renderStages()}
			{	stage === 4 
				&& (
				<motion.button 
					style={{ border: '1px white solid', cursor: 'pointer', userSelect: 'none', fontFamily: 'Nulshock', zIndex: 1 }}
					className="fixed mb-10 right-0 mx-6 md:mb-8 lg:mb-4 bottom-0 md:right-8 bg-transparent text-xs sm:text-sm md:text-base text-white py-3 px-12 rounded-full"
				>
					Scroll to the world of FOMO
				</motion.button>
			)}
		</div>
	);
};

const LandingPageComponent = () => {
	return (
		<div style={{ height: '100vh' }}>
			<HeroComponent />
		</div>
	)
}

const RingComponent = ({ size, borderColor, opacity, stage, isMobileScreen }) => {
	const ringBase = {
		position: 'absolute',
		borderRadius: '50%',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: isMobileScreen ? '12vw' : '5vw',
		border: '1px solid white',
		fontFamily: 'NulShock',
		fontWeight: '300'
	};

	return (
		<motion.div style={{
			...ringBase,
			width: size,
			height: size,
			borderRadius: '50%',
			borderColor: borderColor,
			whiteSpace: 'nowrap',
			cursor: 'pointer',
			userSelect: 'none',
			transition: 'width 0.3s ease-out, height 0.3s ease-out, backgroundColor 0.3s ease-out',
			opacity: opacity
		}}
		>
			{(stage === 0) && (
				<span style={{ color: '#E75CFF', letterSpacing: '2px', WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '3px', transition: 'width 0.5s, height 0.5s, backgroundColor 0.5s' }}>
					MUSIC
				</span>)}
			{(stage === 1) && (
				<span style={{ color: 'white', textTransform: 'uppercase', letterSpacing: '2px' }}>
					MUSIC, 
					{isMobileScreen ? <br/> : <span>&nbsp;</span>}
					<span style={{ color: 'rgba(254, 0, 0, 1)', WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '3px' }}>DRINKS</span>
				</span>)}
			{(stage === 2) && (
				<span style={{ color: 'white', textTransform: 'uppercase', letterSpacing: '2px' }}>
					MUSIC,
					{isMobileScreen ? <br/> : <span>&nbsp;</span>}
					DRINKS,<br /> <span style={{ color: 'rgba(1, 255, 255, 1)', WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: '3px' }}>LIGHTS</span>
				</span>)}
			{(stage === 3) && (
				<span style={{ color: 'white', textTransform: 'uppercase', letterSpacing: '2px', fontSize: isMobileScreen ? '10vw' : '5vw' }}>
					MUSIC, 
					{isMobileScreen ? <br/> : <span>&nbsp;</span>}
					DRINKS,
					<br /> 
					LIGHTS 
					{isMobileScreen ? <br/> : <span>&nbsp;</span>}
					<span style={{ color: 'rgba(0, 255, 1, 1)', WebkitTextFillColor: 'transparent', WebkitTextStrokeWidth: "3px" }}>& ACTION</span>
				</span>)}
			{(stage === 4) &&
				(
				<span style={{ color: 'white', textTransform: 'uppercase', letterSpacing: '2px', fontSize: (isMobileScreen ? '9vw' : '5vw') }}>
					MUSIC, 
					{isMobileScreen ? <br/> : <span>&nbsp;</span>}
					DRINKS,
					<br /> LIGHTS
					{isMobileScreen ? <br/> : <span>&nbsp;</span>}
					& ACTION
				</span>
				)}
		</motion.div>
	)
}

export default LandingPageComponent;
