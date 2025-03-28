import React from "react";
import FlyingBird from "./FlyingBird";

const ExpertSupport = () => {
	return (
		<section className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-20 bg-gray-100  overflow-hidden">
			{/* Content */}
			<FlyingBird /> {/* The bird that moves on scroll */}
			<div className="max-w-lg order-1 lg:order-2">
				<h2 className="text-4xl font-bold text-black">YOUR BIRDS AT THEIR BEST, BACKED BY EXPERTS</h2>
				<p className="text-gray-700 mt-4">
					From canaries and parrots to toucans and hornbills. Making the right choice in bird nutrition is a vital step
					in fulfilling the needs of your birds. You want them to look and perform at their best. At every stage in
					their lives. But where do you start? With NutriBird.
				</p>
			</div>
		</section>
	);
};

export default ExpertSupport;
