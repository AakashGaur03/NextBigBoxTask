import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BirdAnimation = () => {
	const birdRef = useRef(null);

	useEffect(() => {
		gsap.to(birdRef.current, {
			x: window.innerWidth,
			duration: 5,
			repeat: -1,
			ease: "power1.inOut",
		});
	}, []);

	return (
		<div
			ref={birdRef}
			className="absolute top-20 left-0 w-16 h-16 bg-cover"
			style={{
				backgroundImage: `url('./flyBird.gif')`, // Replace with your bird image
			}}
		/>
	);
};

export default BirdAnimation;
