import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FlyingBird = () => {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start", "end"], // Extend scroll range so the bird moves further down
	});

	// Move the bird from right to left across a longer distance
	const x = useTransform(scrollYProgress, [0, 0.5, 1], ["1000%", "100%", "-200%"]);
	// Adjust flight path to continue further down
	const y = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], ["-10%", "125%", "20%", "45%", "80%"]);
	// Scale the bird slightly while flying
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
	// Add slight rotation for natural movement
	const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "15deg"]);

	return (
		<div ref={sectionRef} className="relative">
			<motion.img
				src={"./flyBird.gif"} // Replace with your actual bird image
				alt="Flying Bird"
				className="w-auto fixed top-1/3 z-50 h-96"
				style={{ x, y, scale, rotate }}
			/>
		</div>
	);
};

export default FlyingBird;
