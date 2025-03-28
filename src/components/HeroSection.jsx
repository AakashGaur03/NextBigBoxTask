import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-20 bg-gray-100 min-h-screen">
			<div className="max-w-lg">
				<h1 className="text-5xl font-bold text-black">WE ARE NUTRIBIRD</h1>
				<p className="text-gray-700 mt-4">
					We are NutriBird, for bird owners to carefree give the best to their birds. We’re obsessed with making birds
					look and perform at their best. We specialize in complete and balanced all-in-one nutrition formulas for all
					bird species, at every life stage.
				</p>
			</div>
			<div className="mt-8 lg:mt-0">
				<motion.img
					src={"./heroBird.png"}
					alt="Birds on a branch"
					className="max-w-full w-[500px] h-auto"
					whileHover={{ x: [-10, 10, -10] }} // Moves back and forth
					transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
				/>
			</div>
		</section>
	);
};

export default HeroSection;
