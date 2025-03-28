import React from "react";

const Testimonial = () => {
	return (
		<section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-20 bg-gray-100 ">
			<div className="max-w-lg">
				<p className="text-gray-700 italic">
					"I have been an aviculturist for 45 years. Birds are my passion; they are my reason for living. I always
					provide them with the best care and food possible. Each day I rely on NutriBird to keep them healthy."
				</p>
				<div className="flex items-center gap-4 mt-6 justify-center">
					<img src={"tonySilva.png"} alt="Tony Silva" className="w-12 h-12 rounded-full" />
					<div>
						<h3 className="text-green-600 font-bold">
							TONY SILVA <span className="text-sm text-gray-600">(USA)</span>
						</h3>
						<p className="text-gray-500 text-sm">Aviculturist and Ornithologist</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
