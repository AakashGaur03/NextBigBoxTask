import React from "react";
import HeroSection from "./components/HeroSection";
import ExpertSupport from "./components/ExpertSupport";
import Testimonial from "./components/Testimonial";
import Header from "./components/Header";

const App = () => {
	return (
		<>
			<Header />
			<HeroSection />
			<ExpertSupport />
			<Testimonial />
		</>
	);
};

export default App;
