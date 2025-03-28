import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type"; // For splitting text into letters/words
import FlyingBird from "./FlyingBird";

gsap.registerPlugin(ScrollTrigger);

const ExpertSupport = () => {
	const titleRef = useRef(null);
	const paragraphRef = useRef(null);

	useEffect(() => {
		// Split the heading into words first to avoid improper breaks
		const titleSplit = new SplitType(titleRef.current, { types: "words, chars" });

		// Ensure words are wrapped properly
		titleSplit.words.forEach((word) => {
			word.style.whiteSpace = "nowrap";
		});

		// Animate heading letters one by one from bottom
		gsap.fromTo(
			titleSplit.chars,
			{ y: 50, opacity: 0, display: "inline-block" },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.03,
				ease: "power3.out",
				scrollTrigger: {
					trigger: titleRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			}
		);
	}, []);

	return (
		<section className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-48 py-20 overflow-hidden min-h-screen">
			{/* Flying Bird Animation */}
			<FlyingBird />

			{/* Content Section */}
			<div className="max-w-lg order-1 lg:order-2 text-center lg:text-left">
				<header>
					<h2 ref={titleRef} className="text-5xl font-extrabold text-black leading-tight">
						YOUR BIRDS AT THEIR BEST, BACKED BY EXPERTS
					</h2>
				</header>
				<p ref={paragraphRef} className="text-black mt-4 text-lg font-serif">
					From canaries and parrots to toucans and hornbills. Making the right choice in bird nutrition is a vital step
					in fulfilling the needs of your birds. You want them to look and perform at their best—at every stage in their
					lives. But where do you start? With NutriBird.
				</p>
			</div>
		</section>
	);
};

export default ExpertSupport;
