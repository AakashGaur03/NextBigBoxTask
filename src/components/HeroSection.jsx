import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const paragraphRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			imageRef.current,
			{ x: 300, opacity: 0, rotateY: 30 },
			{ x: 0, opacity: 1, rotateY: 0, duration: 1.2, ease: "power3.out" }
		);

		// Entrance animation for the title (Slide in from left)
		gsap.fromTo(
			titleRef.current,
			{ x: -100, opacity: 0 },
			{ x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
		);

		// Entrance animation for the paragraph (Fade in with delay)
		gsap.fromTo(
			paragraphRef.current,
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.6 }
		);

		// Scroll animation for the image (3D moving up)
		gsap.to(imageRef.current, {
			y: -150, // Moves image upwards
			rotateX: 15, // Adds a slight 3D rotation
			scale: 1.05,
			scrollTrigger: {
				trigger: imageRef.current,
				start: "top bottom",
				scrub: 1, // Smooth effect
			},
		});
	}, []);

	const handleMouseEnter = () => {
		gsap.to(imageRef.current, {
			rotateY: 15,
			scale: 1.05,
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
		<section className="relative flex flex-col lg:flex-row items-center justify-between ps-8 lg:ps-16 py-20 min-h-screen mt-20">
			<div className="max-w-[650px] text-left md:ps-32">
				<h1 ref={titleRef} className="text-7xl font-extrabold text-black leading-tight">
					WE ARE <br /> NUTRIBIRD
				</h1>
				<p ref={paragraphRef} className="text-black mt-4 text-lg font-serif">
					We are NutriBird, for bird owners to carefree give the best to their birds. We’re obsessed with making birds
					look and perform at their best. We specialize in complete and balanced all-in-one nutrition formulas for all
					bird species, at every life stage.
				</p>
			</div>

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
