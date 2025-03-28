import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
	const imageRef = useRef(null);

	useEffect(() => {
		// Entrance animation (slide in from right)
		gsap.fromTo(
			imageRef.current,
			{ x: 300, opacity: 0, rotateY: 30 }, // Initial state
			{ x: 0, opacity: 1, rotateY: 0, duration: 1.2, ease: "power3.out" } // Target state
		);
	}, []);

	const handleMouseEnter = () => {
		gsap.to(imageRef.current, {
			rotateY: 15, // 3D rotation
			scale: 1.05, // Slight zoom effect
			duration: 0.3,
			ease: "power2.out",
		});
	};

	const handleMouseLeave = () => {
		gsap.to(imageRef.current, {
			rotateY: 0,
			scale: 1,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	return (
		<section
			className="relative flex flex-col lg:flex-row items-center justify-between ps-8 lg:ps-16 py-20 min-h-screen"
			style={{
				background: "linear-gradient(to bottom, #f0f0f0, #d9d9d9)", // Soft gray gradient
			}}
		>
			{/* Left Content (Text) */}
			<div className="max-w-lg text-left md:ps-40">
				<h1 className="text-6xl font-bold text-black leading-tight">
					WE ARE <br /> NUTRIBIRD
				</h1>
				<p className="text-gray-700 mt-4 text-lg">
					We are NutriBird, for bird owners to carefree give the best to their birds. We’re obsessed with making birds
					look and perform at their best. We specialize in complete and balanced all-in-one nutrition formulas for all
					bird species, at every life stage.
				</p>
			</div>

			{/* Right Content (Image) */}
			<div className="mt-8 lg:mt-0">
				<img
					ref={imageRef}
					src={"./heroBird.png"}
					alt="Birds on a branch"
					className="max-w-full w-[700px] h-auto cursor-pointer"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				/>
			</div>
		</section>
	);
};

export default HeroSection;
