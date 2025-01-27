import React from "react";
import mission from "../assets/mission.jpg";
import value from "../assets/value.jpg";
import vision from "../assets/vision.jpg";

const Autoscroll = () => {
	const items = [
		<div
			key="value"
			className="bg-customGray-50 w-[650px] h-[700px] flex flex-col items-center justify-center rounded-lg p-5"
		>
			<div>
				<img
					src={value}
					alt="Value"
					className="w-[200px] h-[200px] mt-[90px] rounded-full"
				/>
			</div>
			<div className="text-white text-[60px] mt-5 text-center">Values</div>
			<div className="overflow-hidden mt-5 text-wrap">
				<p className="text-white text-[25px] mt-5 text-center overflow-hidden text-ellipsis">
					We value empathy, inclusivity, and accuracy empowering self-discovery
					through personalized personality insights.
				</p>
			</div>
		</div>,
		<div
			key="vision"
			className="bg-customGray-50 w-[650px] h-[700px] flex flex-col items-center justify-center rounded-lg"
		>
			<div>
				<img src={vision} alt="Vision" className="w-[200px] h-[200px] rounded-full" />
			</div>
			<div className="text-white text-[60px] mt-5 text-center">Vision</div>
			<p className="text-white text-[25px] mt-5 text-center">
				Creating the World of Self-Aware Individuals.
			</p>
		</div>,
		<div
			key="mission"
			className="bg-customGray-50 w-[650px] h-[700px] flex flex-col items-center justify-center rounded-2xl"
		>
			<div>
				<img src={mission} alt="Mission" className="w-[200px] h-[200px] rounded-full" />
			</div>
			<div className="text-white text-[60px] mt-5 text-center">Mission</div>
			<p className="text-white text-[25px] mt-5 text-center">
				Empowering Self Discovery and Growth.
			</p>
		</div>,
	];

	return (
		<div className="relative  h-[800px] overflow-hidden mt-[1000px] ml-[100px] mr-[100px]">
			<div className="flex gap-[80px] animate-marquee whitespace-nowrap">
				{/* Duplicate the items array to ensure infinite scrolling */}
				{[...items, ...items].map((item, index) => (
					<div
						key={index}
						className="flex-shrink-0 w-[650px] h-[700px] flex flex-col items-center"
					>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default Autoscroll;
