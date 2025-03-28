import React from "react";
import { FaBars, FaGlobe } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";

const Header = () => {
	return (
		<header className="fixed top-0 left-0 w-full bg-transparent px-6 lg:px-16 py-4 flex items-center justify-between z-50">
			<div className="flex items-center gap-2">
				<FaBars className="text-black text-2xl cursor-pointer" />
				<span className="text-black font-semibold text-lg">MENU</span>
			</div>

			<div className="flex justify-center">
				<img src="./nutriBirdLogo.png" alt="NutriBird Logo" className="h-12" />
			</div>

			<div className="flex items-center gap-4">
				<BiBarChart className="text-black text-2xl cursor-pointer" />
				<FaGlobe className="text-black text-2xl cursor-pointer" />
			</div>
		</header>
	);
};

export default Header;
