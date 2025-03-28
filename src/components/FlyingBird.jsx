import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";

const FlyingBird = () => {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["end", "start"], // Track scroll progress from start to end
	});

	// Horizontal (x) movement - right to left
	const x = useTransform(scrollYProgress, [0, 0.5, 0.9, 1], ["-150%", "70%", "150%", "300%"]);

	// Vertical (y) movement - controlled descent
	const y = useTransform(scrollYProgress, [0, 0.5, 0.9, 1], ["0%", "10%", "20%", "40%"]);

	// Scale effect
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

	// Rotation effect
	const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "15deg"]);

	return (
		<div ref={sectionRef} className="relative">
			<motion.img
				src={"./flyBird.gif"} // Replace with actual image
				alt="Flying Bird"
				className="w-auto fixed top-1/3 z-50 h-[450px]"
				style={{ x, y, scale, rotate }}
			/>
		</div>
	);
};

export default FlyingBird;
