import React from "react";
import Landingpage from "../assets/landingpage.jpg";
import Button from "./Button";
const Hero = () => {
	const handleExploreClick = () => {
		document.getElementById("explore-section").scrollIntoView({behavior:"smooth"})
	}
	return (
		<div className="bg-black w-full text-white">
			<div className="flex flex-col   mt-[100px] lg:mt-[150px] ml-[100px] font-poppins">
				<div className="lg:w-[1200px] lg:h-[600px] h-auto  bg-customGray-50 text-white font-bold text-3xl rounded-xl relative">
					<p className=" py-[70px] lg:px-[100px] text-[40px] md:text-[65px] mb-3 ">
						<span className="block mb-[20px] lg:mb-[40px]">Discover the</span>
						<span className="block mb-[20px] lg:mb-[40px]">
							<span className="bg-customgradient bg-clip-text text-transparent ">
								Essence
							</span>
							<span> of who</span>
						</span>
						<span className="block"> you are</span>
					</p>
					<p className="md:text-[20px] text-[15px] font-poppins px-[100px] absolute top-[300px]">
						<span className="block">
							Explore your personality like never before.Find out
						</span>
						<span className="block">
							what your traits reveal about your energy,
						</span>
						<span className="block">potential and essence.</span>
					</p>
					<Button extraStyles="rounded-lg md:px-7 md:py-2 border-white md:text-[25px]  ml-[100px] mt-[130px]  text-center bg-white hover:bg-black  ">
						<span onClick={handleExploreClick} className="bg-customgradientb bg-clip-text text-transparent">
							Explore
						</span>
					</Button>
				</div>
				<div className=" w-[320px] h-[320px] md:w-[695px] md:h-[695px] bg-customGray-50 flex items-center justify-center rotate-[11deg] absolute right-[150px] top-[268px]">
					<img
						src={Landingpage}
						alt="Landingpage image"
						className=" w-[300px] h-[300px] md:w-[620px] md:h-[620px]
						 "
					/>
				</div>
			</div>
		</div>
	);
};
export default Hero;
