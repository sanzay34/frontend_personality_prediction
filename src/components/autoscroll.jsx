import React from "react";
import mission from "../assets/mission.jpg";
import value from "../assets/value.jpg";
import vision from "../assets/vision.jpg";

const Autoscroll = () => {
	const items = [
		<div
			key="value"
			className="bg-customGray-50 w-[750px] h-[700px] flex flex-col items-center justify-center rounded-lg p-5"
		>
			<div>
				<img
					src={value}
					alt="Value"
					className="w-[200px] h-[200px] mt-[90px]"
				/>
			</div>
			<div className="text-white text-[60px] mt-5">Values</div>
			<p className="text-white text-[25px] mt-5 text-center overflow-hidden text-ellipsis">
				We value empathy, inclusivity, and accuracy empowering self-discovery
				through personalized personality insights.
			</p>
		</div>,
		<div
			key="vision"
			className="bg-customGray-50 w-[750px] h-[700px] flex flex-col items-center justify-center rounded-lg"
		>
			<div>
				<img src={vision} alt="Vision" className="w-[200px] h-[200px]" />
			</div>
			<div className="text-white text-[60px] mt-5">Vision</div>
			<p className="text-white text-[25px] mt-5">
				Creating the World of Self-Aware Individuals.
			</p>
		</div>,
		<div
			key="mission"
			className="bg-customGray-50 w-[750px] h-[700px] flex flex-col items-center justify-center rounded-lg"
		>
			<div>
				<img src={mission} alt="Mission" className="w-[200px] h-[200px]" />
			</div>
			<div className="text-white text-[60px] mt-5">Mission</div>
			<p className="text-white text-[25px] mt-5">
				Empowering Self Discovery and Growth.
			</p>
		</div>,
	];

	return (
		<div className="relative w-full h-[800px] overflow-hidden mt-[1000px]">
			<div className="flex gap-10 animate-marquee whitespace-nowrap">
				{/* Duplicate the items array to ensure infinite scrolling */}
				{[...items, ...items].map((item, index) => (
					<div key={index} className="flex-shrink-0">
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default Autoscroll;
