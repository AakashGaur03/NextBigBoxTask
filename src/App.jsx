import React from "react";
import BirdAnimation from "./components/BirdAnimation";
import HeroSection from "./components/HeroSection";
import ExpertSupport from "./components/ExpertSupport";
import Testimonial from "./components/Testimonial";
import FlyingBird from "./components/FlyingBird"; // New component for bird animation on scroll

const App = () => {
	return (
		<>
			{/* Static flying bird */}
			{/* Sections */}
			<HeroSection />
			<ExpertSupport />
			<Testimonial />
			<div className="h-screen"></div>
		</>
	);
};

export default App;
