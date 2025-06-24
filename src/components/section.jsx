import React from "react";
import Slider from "./Slider";

const Section = () => {
	return (
		<section className="flex flex-col items-center justify-center w-full py-2">
			<h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center">
				Personality Traits
			</h2>
			<div className="w-full mt-8">
				<Slider />
			</div>
		</section>
	);
};

export default Section;
