import React, { useEffect, useState } from "react";
import mission from "../assets/mission.jpg";
import value from "../assets/value.jpg";
import vision from "../assets/vision.jpg";

const Autoscroll = () => {
	const scrollItems = [
		{
			title: "Mission",
			description: "Empowering Self Discovery and Growth.",
			image: mission,
		},
		{
			title: "Values",
			description:
				"We value empathy, inclusivity, and accuracy empowering self-discovery through personalized personality insights.",
			image: value,
		},
		{
			title: "Vision",
			description: "Creating the World of Self-Aware Individuals.",
			image: vision,
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % scrollItems.length);
		}, 3000); // Change every 3 seconds

		return () => clearInterval(interval);
	}, [scrollItems.length]);

	return (
		<div className="relative flex justify-center items-center h-[700px] w-full overflow-hidden bg-black mt-[950px]">
			<div
				className="flex w-full transition-transform duration-500"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{scrollItems.map((item, index) => (
					<div
						key={index}
						className="flex-shrink-0 w-full h-full flex flex-col justify-center items-center text-center p-8"
					>
						<div className="w-64 h-64 bg-gray-800 rounded-full flex items-center justify-center shadow-md">
							<img
								src={item.image}
								alt={item.title}
								className="w-32 h-32 object-contain"
							/>
						</div>
						<h2 className="mt-6 text-3xl font-bold text-white">{item.title}</h2>
						<p className="mt-4 text-lg text-gray-400">{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Autoscroll;
