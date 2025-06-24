import React from "react";
import mission from "../assets/mission.jpg";
import value from "../assets/value.jpg";
import vision from "../assets/vision.jpg";

const cards = [
	{
		key: "value",
		title: "Values",
		image: value,
		text: "We value empathy, inclusivity, and accuracy.",
	},
	{
		key: "vision",
		title: "Vision",
		image: vision,
		text: "Creating the World of Self-Aware Individuals.",
	},
	{
		key: "mission",
		title: "Mission",
		image: mission,
		text: "Empowering Self Discovery and Growth.",
	},
];

const AutoScroll = () => {
	return (
		<div
			id="scroll-section"
			className="relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden mt-40 px-4"
		>
			<div className="flex animate-marquee whitespace-nowrap">
				{[...cards, ...cards].map((card, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[500px] sm:h-[600px] lg:h-[700px] bg-customGray-50 rounded-2xl p-5 mx-4"
					>
						<img
							src={card.image}
							alt={card.key}
							className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] rounded-full mt-5"
						/>
						<h2 className="text-white text-3xl sm:text-4xl lg:text-5xl mt-5 text-center">
							{card.title}
						</h2>
						<p className="text-white text-base sm:text-lg lg:text-xl mt-4 text-center max-w-[90%]">
							{card.text}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AutoScroll;
