import React, {useRef, useState, useEffect} from 'react';
import { motion, useScroll } from 'framer-motion';

const Section1 = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", 'end end']
    });
	const [stage, setStage] = useState(0);

    // Trigger animation based on scroll progress
	useEffect(() => {

		const unsubY = scrollYProgress.on("change", value => {
            console.log(value);
			if (value <= 0.2) setStage(0);
			else if (value <= 0.4) setStage(1);
			else if (value <= 0.6) setStage(2);
			else if (value <= 0.8) setStage(3);
			else setStage(4);
		});

		return () => {
			unsubY();
		}
	}, [scrollYProgress])

    return (
        <div ref={targetRef} style={{ height: '500vh', zIndex: 99999999999}}>
            <motion.div
                style={{
                    position: 'relative',
                    top: 0,
                    height: "100vh",
                    width: '100vw'
                }}
            > <div style={{ display: 'flex', justifyContent: "center", textAlign: 'center', height: '100vh', width: '100vw' }}>Hello World {stage}</div>
            </motion.div>
        </div>
    )
}

export default Section1;