import React from "react";

const Testimonial = () => {
	return (
		<section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-20 ">
			<div className="max-w-[650px] md:ps-32">
				<p className="text-black mt-4 text-lg font-serif">
					I have been an aviculturist for 45 years. Birds are my passion; they are my reason for living. I always
					provide them with the best care and food possible. Each day I rely on NutriBird to keep them healthy.
					NutriBird is nutritious, based on science and produced by a company that mills the product - they don't rely
					on others to produce it for them. This gives me the confidence to give NutriBird to my flock, which ranges
					from parakeets to hyacinth macaws to palm cockatoos.
				</p>
				<div className="flex items-center gap-4 mt-6 justify-center">
					<img src={"tonySilva.png"} alt="Tony Silva" className="w-12 h-12 rounded-full" />
					<div>
						<h3 className="font-bold text-lg">
							<span className="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
								TONY SILVA
							</span>
							<span className="text-sm text-gray-600 font-normal"> (USA)</span>
						</h3>
						<p className="text-black font-bold text-sm">AVICULTURIST AND ORNITHOLOGIST</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
