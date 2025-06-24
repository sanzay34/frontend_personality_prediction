import React from "react";
import Landingpage from "../assets/landingpage.jpg";
import Button from "./Button";

const Hero = () => {
	const handleExploreClick = () => {
		document
			.getElementById("explore-section")
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="bg-black w-full text-white font-poppins">
			<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-20">
				{/* Left Text Section */}
				<div className="lg:max-w-[600px] flex flex-col justify-center">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
						<span className="block">Discover the</span>
						<span className="block">
							<span className="bg-customgradient bg-clip-text text-transparent">
								Essence
							</span>{" "}
							of who
						</span>
						<span className="block">you are</span>
					</h1>

					<p className="text-sm sm:text-base md:text-lg mt-6">
						<span className="block">
							Explore your personality like never before. Find out
						</span>
						<span className="block">
							what your traits reveal about your energy,
						</span>
						<span className="block">potential, and essence.</span>
					</p>

					<div className="mt-8">
						<Button extraStyles="rounded-lg md:px-7 md:py-2 border border-white md:text-xl text-base bg-white hover:bg-black">
							<span
								onClick={handleExploreClick}
								className="bg-customgradientb bg-clip-text text-transparent cursor-pointer"
							>
								Explore
							</span>
						</Button>
					</div>
				</div>

				{/* Right Image Section */}
				<div className="mt-10 lg:mt-0 flex justify-center items-center">
					<div className="bg-customGray-50 rounded-xl p-4 rotate-3 flex justify-center items-center">
						<img
							src={Landingpage}
							alt="Landingpage image"
							className="w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
